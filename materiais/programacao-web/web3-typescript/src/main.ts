const nome = "Café Aurora";
let tempoEstimado: number = 25;
const pedidosAbertos: boolean = true;

tempoEstimado = 40;

document.body.textContent = `Café Aurora
Negócio: ${nome}
Atendimento aberto: ${pedidosAbertos}
Tempo estimado: ${tempoEstimado} minutos.`;
