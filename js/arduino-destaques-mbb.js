// Padrão MbB — revisão de destaques do módulo Arduino / Sistemas Embarcados.
// Destaca somente verbos de execução nas instruções práticas.
// Conteúdo, códigos, circuitos, imagens e exercícios permanecem intactos.
// Setas/círculos/retângulos só devem ser adicionados quando existir alvo visual inequívoco.
(() => {
  const STYLE_ID = 'mbb-arduino-acoes-praticas-style';
  const ACTION_CLASS = 'mbb-arduino-action-key';
  const ACTION_RE = /\b(Não\s+(?:altere|apague|conecte|execute|feche|force|ligue|mude|use)|Nunca\s+(?:conecte|ligue|use)|Acesse|Abra|Afaste|Aguarde|Ajuste|Altere|Anote|Aponte|Aproxime|Arraste|Carregue|Clique|Cole|Compare|Conecte|Confirme|Confira|Copie|Crie|Cubra|Digite|Envie|Escolha|Execute|Gire|Ilumine|Inicie|Insira|Instale|Ligue|Localize|Mantenha|Meça|Monte|Mude|Observe|Passe|Pressione|Preencha|Procure|Realize|Reinicie|Remova|Renomeie|Repita|Reutilize|Salve|Selecione|Solte|Substitua|Teste|Toque|Troque|Verifique|Volte)\b/;

  function garantirEstilo(){
    if(document.getElementById(STYLE_ID)) return;
    const style = document.createElement('style');
    style.id = STYLE_ID;
    style.textContent = `
      #arduinoLayout .${ACTION_CLASS}{font-weight:800!important;color:#123b73}
    `;
    document.head.appendChild(style);
  }

  function destacarPrimeiraAcao(root){
    if(!root || root.querySelector?.(`.${ACTION_CLASS}`)) return;

    const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
    let node = walker.nextNode();

    while(node){
      const parent = node.parentElement;
      if(!parent || parent.closest('strong,b,code,pre,script,style,button,kbd,samp,a')){
        node = walker.nextNode();
        continue;
      }

      const text = node.nodeValue || '';
      const match = text.match(ACTION_RE);
      if(match && typeof match.index === 'number'){
        const before = text.slice(0, match.index);
        const action = match[0];
        const after = text.slice(match.index + action.length);
        const fragment = document.createDocumentFragment();

        if(before) fragment.appendChild(document.createTextNode(before));
        const strong = document.createElement('strong');
        strong.className = ACTION_CLASS;
        strong.textContent = action;
        fragment.appendChild(strong);
        if(after) fragment.appendChild(document.createTextNode(after));

        node.replaceWith(fragment);
        return;
      }

      node = walker.nextNode();
    }
  }

  function aplicarDestaques(){
    garantirEstilo();

    document.querySelectorAll([
      '#arduinoLayout main ol > li',
      '#arduinoLayout main .card.exercise p',
      '#arduinoLayout main .card.errors p',
      '#arduinoLayout main .circuitFigure figcaption',
      '#arduinoLayout main #fund-experimentar p',
      '#arduinoLayout main #fund-experimentar li',
      '#arduinoLayout main #fund-minilabs p',
      '#arduinoLayout main #fund-minilabs li',
      '#arduinoLayout main #fund-desafios p',
      '#arduinoLayout main #fund-desafios li',
      '#arduinoLayout main #exercicios p',
      '#arduinoLayout main #exercicios li'
    ].join(',')).forEach(destacarPrimeiraAcao);
  }

  function iniciar(){
    aplicarDestaques();
    const main = document.querySelector('#arduinoLayout main');
    if(!main) return;
    const observer = new MutationObserver(() => window.requestAnimationFrame(aplicarDestaques));
    observer.observe(main, {childList:true, subtree:true});
  }

  window.MbbArduinoDestaques = { aplicar: aplicarDestaques };
  if(document.readyState === 'loading') document.addEventListener('DOMContentLoaded', iniciar);
  else iniciar();
})();