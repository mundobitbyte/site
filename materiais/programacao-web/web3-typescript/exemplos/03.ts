const pedidosAbertos: boolean = true;
let tempoEstimado: number | null = 45;
let mensagem: string;

if (pedidosAbertos && tempoEstimado !== null) {
  mensagem = `Tempo estimado: ${tempoEstimado} minutos.`;
} else {
  mensagem = "Consulte a equipe antes de pedir.";
}

document.body.textContent = `Café Aurora\n${mensagem}`;
