interface ProdutoConfirmado { nome: string; descricao: string; enderecoImagem: string }

export function aplicarProdutoConfirmado(dados: ProdutoConfirmado, raiz: ParentNode = document): void {
  const card=raiz.querySelector('[data-produto="cafe-coado"]');
  const imagem=card?.querySelector<HTMLImageElement>('img');
  const titulo=card?.querySelector('h3');
  const descricao=card?.querySelector<HTMLElement>('[data-descricao-produto]');
  const retorno=raiz.querySelector<HTMLElement>('#retorno-midia-cardapio');
  if(!imagem || !titulo || !descricao || !retorno) throw new Error('Aguarde o cardápio e consulte novamente.');
  const preco=descricao.querySelector('strong');
  titulo.textContent=dados.nome;
  descricao.textContent=dados.descricao+' ';
  if(preco)descricao.append(preco);
  const anterior=imagem.src;
  imagem.onerror=()=>{imagem.onerror=null;imagem.src=anterior;retorno.textContent='Texto confirmado; a foto não carregou e a imagem anterior foi preservada.';};
  imagem.src=dados.enderecoImagem;
  retorno.textContent='Texto e referência da foto recebidos do serviço. Confira o carregamento da imagem.';
}
