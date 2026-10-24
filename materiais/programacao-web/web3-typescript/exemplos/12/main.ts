import { obterAtendimento } from "./atendimento.js";
import type { Atendimento } from "./atendimento.js";

const atendimento: Atendimento = obterAtendimento();

document.body.textContent = `${atendimento.nome}
Tempo estimado: ${atendimento.tempoEstimado} minutos.`;
