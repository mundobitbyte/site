const apelido: string = "";
const pedidosAbertos: boolean = true;
const prazo: number | null = 0;

const nomeExibido = apelido || "Café Aurora";
const podeInformarPrazo = pedidosAbertos && prazo !== null;
const situacao = pedidosAbertos ? "Aberto" : "Encerrado";
const prazoExibido = prazo ?? "Consulte a equipe";

document.body.textContent = `${nomeExibido}
Atendimento: ${situacao}
Pedidos encerrados: ${!pedidosAbertos}
Pode informar prazo: ${podeInformarPrazo}
Prazo: ${prazoExibido}`;
