async function carregar(): Promise<void> {
  document.body.textContent = "Consultando o prazo do Café Aurora…";

  try {
    const texto = await Promise.resolve('{"tempoEstimado":35}');
    const dados: unknown = JSON.parse(texto);

    if (
      typeof dados !== "object" || dados === null ||
      !("tempoEstimado" in dados) ||
      typeof dados.tempoEstimado !== "number" ||
      !Number.isFinite(dados.tempoEstimado) || dados.tempoEstimado < 0
    ) {
      throw new Error("O prazo recebido não é válido.");
    }

    document.body.textContent =
      `Café Aurora\nTempo estimado: ${dados.tempoEstimado} minutos.`;
  } catch (erro) {
    const mensagem = erro instanceof Error ? erro.message : "Falha na consulta.";
    document.body.textContent = `Café Aurora\n${mensagem}`;
  }
}

carregar();
