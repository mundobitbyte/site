const calcularPrazo = (preparo: number, margem: number): number => preparo + margem;

const formatarPrazo = (minutos: number): string => {
  return `Tempo estimado: ${minutos} minutos.`;
};

const prazo = calcularPrazo(40, 5);
document.body.textContent = `Café Aurora
${formatarPrazo(prazo)}`;
