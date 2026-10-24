interface Atendimento {
  nome: string;
  tempoEstimado: number;
}

const atendimento: Atendimento = {
  nome: "Café Aurora",
  tempoEstimado: 40,
};

const { nome, tempoEstimado } = atendimento;
const atualizado: Atendimento = { ...atendimento, tempoEstimado: 55 };

document.body.textContent = `${nome}
Antes: ${tempoEstimado} minutos.
Depois: ${atualizado.tempoEstimado} minutos.
Original preservado: ${atendimento.tempoEstimado} minutos.`;
