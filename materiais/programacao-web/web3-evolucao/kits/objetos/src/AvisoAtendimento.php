<?php
/** A regra do Café recebe valores e prepara as mensagens dos consumidores. */
class AvisoAtendimento
{
    public string $nomeNegocio;
    public bool $pedidosAbertos;
    public ?int $tempoEstimado;

    public function __construct(string $nomeNegocio, bool $pedidosAbertos, ?int $tempoEstimado)
    {
        if (trim($nomeNegocio) === "" || mb_strlen($nomeNegocio) > 100) {
            throw new InvalidArgumentException("Informe um nome de até 100 caracteres.");
        }
        if ($tempoEstimado !== null && ($tempoEstimado < 0 || $tempoEstimado > 240)) {
            throw new InvalidArgumentException("Informe de 0 a 240 minutos ou ausência de estimativa.");
        }
        $this->nomeNegocio = $nomeNegocio;
        $this->pedidosAbertos = $pedidosAbertos;
        $this->tempoEstimado = $tempoEstimado;
    }

    public function mensagens(): array
    {
        if (!$this->pedidosAbertos) {
            $situacao = "Pedidos para retirada estão encerrados.";
            $tempo = "Consulte novamente durante o horário de atendimento.";
        } elseif ($this->tempoEstimado === null) {
            $situacao = "Pedidos para retirada estão abertos.";
            $tempo = "Consulte a equipe para saber o prazo de retirada.";
        } else {
            $situacao = "Pedidos para retirada estão abertos.";
            $tempo = "Tempo estimado: {$this->tempoEstimado} minutos.";
        }
        return ["nomeNegocio" => $this->nomeNegocio, "mensagemStatus" => $situacao, "mensagemTempo" => $tempo];
    }
}
