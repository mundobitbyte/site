const pedidosAbertos: boolean = true;
let tempoEstimado: number | null = 45;
let mensagem: string;

if (!pedidosAbertos) {
  mensagem = "Atendimento encerrado.";
} else if (tempoEstimado === null) {
  mensagem = "Consulte a equipe antes de pedir.";
} else {
  mensagem = `Tempo estimado: ${tempoEstimado} minutos.`;
}

document.body.textContent = `Café Aurora\n${mensagem}`;
