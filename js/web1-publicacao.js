(function () {
  'use strict';
  const aula = document.getElementById('capitulo-12');
  if (!aula) return;

  const resposta = aula.querySelector('[data-publicacao-resposta]');
  aula.querySelector('[data-publicacao-conferir]').addEventListener('click', function () {
    const opcao = aula.querySelector('input[name="publicacao-conceito"]:checked');
    resposta.textContent = !opcao
      ? 'Escolha uma resposta antes de conferir.'
      : opcao.value === 'hospedagem'
        ? 'Isso! A outra pessoa precisa de um endereço público. A hospedagem disponibiliza os arquivos para o navegador dela; o caminho da sua pasta só identifica arquivos no seu computador.'
        : 'Esse caminho aponta para uma pasta no seu computador. O celular do colega não tem acesso a ela. Precisamos hospedar os arquivos e compartilhar o endereço público.';
  });

  const campo = aula.querySelector('[data-publicacao-url]');
  const aviso = aula.querySelector('[data-publicacao-url-status]');
  const abrir = aula.querySelector('[data-publicacao-abrir]');
  const chave = 'mbb:web1:publicacao:url:v1';

  function enderecoPublico(valor) {
    try {
      const url = new URL(valor);
      const host = url.hostname;
      const rotulos = host.split('.');
      const dominio = rotulos.length >= 2 && rotulos.every(parte =>
        /^[a-z0-9](?:[a-z0-9-]{0,61}[a-z0-9])?$/i.test(parte));
      if (url.protocol !== 'https:' || url.username || url.password || url.port ||
          !dominio || !/^[a-z]{2,63}$/i.test(rotulos.at(-1)) ||
          /(?:^|\.)(?:localhost|local|internal|test|invalid|example)$/i.test(host)) return null;
      return url.href;
    } catch (_) { return null; }
  }

  function prepararLink(url) {
    abrir.href = url;
    abrir.hidden = false;
  }

  campo.addEventListener('input', function () {
    abrir.hidden = true;
    abrir.removeAttribute('href');
    aviso.textContent = 'Depois de alterar o endereço, clique em Registrar endereço.';
  });

  aula.querySelector('[data-publicacao-registrar]').addEventListener('click', function () {
    const url = enderecoPublico(campo.value.trim());
    if (!url) {
      abrir.hidden = true;
      abrir.removeAttribute('href');
      aviso.textContent = 'Cole o endereço público completo, começando com https://, sem usuário ou senha. Caminhos do computador e endereços locais não servem para compartilhar.';
      campo.setAttribute('aria-invalid', 'true');
      campo.focus();
      return;
    }
    campo.removeAttribute('aria-invalid');
    campo.value = url;
    prepararLink(url);
    try {
      sessionStorage.setItem(chave, url);
      aviso.textContent = 'Endereço registrado nesta aba até ela ser fechada. Abra e teste: registrar o endereço não comprova que o site funciona.';
    } catch (_) {
      aviso.textContent = 'O link está pronto para abrir. O navegador não permitiu guardá-lo nesta aba; copie o endereço para suas anotações.';
    }
  });

  try {
    const url = enderecoPublico(sessionStorage.getItem(chave));
    if (url) {
      campo.value = url;
      prepararLink(url);
      aviso.textContent = 'Endereço que você registrou nesta aba. Repita os testes antes de marcar as verificações.';
    }
  } catch (_) { /* A atividade continua funcionando sem armazenamento. */ }

  const itens = [...aula.querySelectorAll('[data-publicacao-check]')];
  const progresso = aula.querySelector('[data-publicacao-progresso]');
  const conquista = aula.querySelector('[data-publicacao-conquista]');
  function atualizar() {
    const total = itens.filter(item => item.checked).length;
    progresso.textContent = `${total} de 4 verificações marcadas por você.`;
    conquista.hidden = total !== 4;
  }
  itens.forEach(item => item.addEventListener('change', atualizar));
  atualizar();
}());
