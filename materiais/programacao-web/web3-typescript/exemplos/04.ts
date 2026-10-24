function calcularPrazo(preparo: number, margem: number): number {
  return preparo + margem;
}

const prazo = calcularPrazo(40, 5);
document.body.textContent = `Café Aurora
Tempo estimado: ${prazo} minutos.`;
