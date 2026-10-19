(function (root) {
  'use strict';
  const LIMITE_MS = 2000;
  class ControleBancada {
    constructor() { this.conectado = false; this.estado = 0; this.ultimo = 0; }
    conectar(agora) { this.conectado = true; this.estado = 0; this.ultimo = agora; return '0'; }
    receber(byte, agora) {
      if (!this.conectado) return null;
      this.verificar(agora);
      if (byte === '?') { this.ultimo = agora; return null; }
      if (byte === '\r' || byte === '\n') return null;
      this.ultimo = agora;
      this.estado = /^[0-3]$/.test(byte) ? Number(byte) : 0;
      return String(this.estado);
    }
    verificar(agora) {
      if (this.estado && agora - this.ultimo >= LIMITE_MS) { this.estado = 0; return '0'; }
      return null;
    }
    desconectar() { this.conectado = false; this.estado = 0; }
  }
  if (typeof module !== 'undefined' && module.exports) module.exports = { ControleBancada, LIMITE_MS };
  if (!root.document) return;
  const document = root.document;
  function iniciar() {
    // A confirmação só aparece depois da conclusão real de writeText/execCommand.
    document.querySelectorAll('[data-vent-copiar]').forEach(botao => {
      botao.addEventListener('click', async () => {
        const code = document.getElementById(botao.dataset.ventCopiar); if (!code) return;
        let ok = false;
        try {
          if (root.navigator.clipboard?.writeText && root.isSecureContext) {
            await root.navigator.clipboard.writeText(code.textContent); ok = true;
          } else { throw new Error('Usar alternativa local'); }
        } catch (_) {
          const area = document.createElement('textarea'); area.value = code.textContent;
          area.style.cssText = 'position:fixed;left:-10000px;top:0'; document.body.append(area); area.select();
          try { ok = document.execCommand('copy') === true; } catch (_) { ok = false; }
          area.remove(); botao.focus();
        }
        botao.textContent = ok ? 'Copiado!' : 'Falha ao copiar';
        const mensagem = botao.closest('.vent-code')?.querySelector('[data-copia-estado]');
        if (mensagem) mensagem.textContent = ok ? 'Código completo copiado.' : 'Selecione o código ou baixe o arquivo.';
        clearTimeout(botao._retorno); botao._retorno = setTimeout(() => { botao.textContent = 'Copiar'; }, 2500);
      });
    });
    const chave = 'mbb:ventilador:checklist:v1';
    let salvos = {};
    try { salvos = JSON.parse(root.localStorage.getItem(chave) || '{}'); if (!salvos || Array.isArray(salvos) || typeof salvos !== 'object') salvos = {}; } catch (_) {}
    document.querySelectorAll('[data-vent-check]').forEach(input => {
      input.checked = salvos[input.dataset.ventCheck] === true;
      input.addEventListener('change', () => {
        salvos[input.dataset.ventCheck] = input.checked;
        try { root.localStorage.setItem(chave, JSON.stringify(salvos)); } catch (_) {
          const status = input.closest('fieldset')?.querySelector('[role="status"]');
          if (status) status.textContent = 'Seu navegador não salvou as marcações. Elas permanecem nesta página.';
        }
      });
    });
    const sim = document.getElementById('vent-simulador');
    if (sim) {
      const controle = new ControleBancada(); let supervisao = true;
      const estado = sim.querySelector('[data-sim-estado]'); const log = sim.querySelector('[data-sim-log]');
      let linhas = [];
      function registrar(msg) { linhas.push(msg); linhas = linhas.slice(-8); log.textContent = linhas.join('\n'); }
      function render() {
        sim.querySelectorAll('[data-sim-comando]').forEach(b => b.disabled = !controle.conectado);
        sim.querySelectorAll('[data-sim-led]').forEach(led => led.dataset.on = String(Number(led.dataset.simLed) === controle.estado));
        estado.textContent = (controle.conectado ? 'Simulação conectada. ' : 'Simulação desconectada. ') + 'Escolha do programa: ' + controle.estado + '. Apenas LEDs na tela.';
      }
      sim.querySelector('[data-sim-conectar]').addEventListener('click', () => {
        if (controle.conectado) { controle.desconectar(); registrar('Simulação desconectada; LEDs apagados.'); }
        else { supervisao = true; controle.conectar(Date.now()); registrar('Conexão simulada → comando inicial 0 → confirmação 0.'); }
        render();
      });
      sim.querySelectorAll('[data-sim-comando]').forEach(b => b.addEventListener('click', () => {
        const resposta = controle.receber(b.dataset.simComando, Date.now()); registrar('Texto enviado: ' + b.dataset.simComando + ' → resposta do programa: ' + resposta); render();
      }));
      sim.querySelector('[data-sim-falha]').addEventListener('click', () => { supervisao = false; registrar('Sinais de presença interrompidos. Aguarde o prazo de 2 s para ver os LEDs apagarem.'); });
      root.setInterval(() => {
        const agora = Date.now();
        // Primeiro verifica o prazo: uma aba suspensa não deve mascarar a expiração.
        if (controle.verificar(agora)) { registrar('As mensagens pararam por 2 s → LEDs apagados. A escolha anterior não é retomada.'); render(); }
        if (controle.conectado && supervisao) controle.receber('?', agora);
      }, 500);
      render();
    }
    const rele = document.querySelector('[data-rele-toggle]');
    if (rele) rele.addEventListener('change', () => {
      document.querySelector('[data-rele-estado]').textContent = rele.checked ? 'Bobina com alimentação: COM–NA fechado; COM–NF aberto (modelo ideal).' : 'Bobina sem alimentação: COM–NF fechado; COM–NA aberto (modelo ideal).';
    });
    document.querySelectorAll('[data-vent-quiz]').forEach(grupo => {
      grupo.querySelectorAll('button').forEach(b => b.addEventListener('click', () => {
        const output = grupo.querySelector('[role="status"]'); output.textContent = b.dataset.correto === 'true' ? 'Correto. ' + grupo.dataset.explicacao : 'Revise: ' + grupo.dataset.explicacao;
      }));
    });
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar, { once: true }); else iniciar();
})(typeof window !== 'undefined' ? window : globalThis);
