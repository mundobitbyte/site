# Ventilador MbB — aprenda com comandos e LEDs

Neste projeto, três LEDs representam as velocidades de um ventilador. Você vai entender como uma escolha no celular pode chegar ao Arduino, conferir a resposta e observar o que acontece quando as mensagens param.

**Os programas são somente para LEDs. Não conecte suas saídas a relés, motores ou à rede elétrica.** A etapa do ventilador real depende de um projeto elétrico específico e da avaliação do profissional responsável.

## Comece pelo arquivo certo

| Arquivo | Para que serve |
| --- | --- |
| `01_serial_leds/01_serial_leds.ino` | Testar Uno e LEDs pelo Monitor Serial USB, a 9600 bit/s. |
| `02_bluetooth_leds/02_bluetooth_leds.ino` | Estudar mensagens simples pelo HC-05, depois de conferir sua ligação. Mantém a última escolha recebida. |
| `03_bancada_supervisionada/03_bancada_supervisionada.ino` | Usar com o aplicativo Ventilador MbB. Também verifica se continuam chegando mensagens. |
| `VentiladorMBB03.apk` | Instalar o aplicativo no Android. Versão 0.3-experimental, código 3. |
| `VentiladorMBB.aia` | Abrir e editar a tela e os blocos no MIT App Inventor. |
| `appinventor/` | Consultar os arquivos da tela, dos blocos e da configuração do projeto. |
| `VALIDACAO_MANUAL.md` | Fazer os testes em ordem e registrar o resultado esperado e o observado. |
| `APK_VERIFICADO.md` | Conferir a identificação e a integridade do APK disponibilizado. |

Os três programas Arduino são completos e independentes. Abra a pasta da versão desejada na IDE Arduino, selecione a placa Uno e grave o programa inteiro. Não misture trechos entre versões.

## Por que o aplicativo não libera os botões sem Arduino?

O aplicativo não é um simulador: precisa conversar com um HC-05 conectado ao Uno e ao programa 3. Na conexão, ele envia o texto `0` e aguarda a resposta `0`. Só depois libera as velocidades.

Sem o Arduino respondendo, pode haver uma tentativa de conexão seguida de encerramento, e os botões permanecem bloqueados. Esse bloqueio é intencional. Para experimentar os botões sem equipamento, use o simulador da etapa 5 no site.

O app lista dispositivos previamente pareados no Android. Parear significa guardar a associação com um aparelho; conectar significa abrir a comunicação. Receber a resposta do Uno é uma terceira verificação. Fones, caixas de som e outros dispositivos Bluetooth não substituem o HC-05 deste exercício.

## Prepare os LEDs

Retire toda a alimentação antes de montar ou mudar fios. Peça ao professor que confira o circuito antes de conectar o USB.

| Saída do Uno | Caminho até o GND |
| --- | --- |
| D5 | Resistor de 330 Ω → ânodo do LED 1 → cátodo → GND. |
| D6 | Resistor de 330 Ω → ânodo do LED 2 → cátodo → GND. |
| D7 | Resistor de 330 Ω → ânodo do LED 3 → cátodo → GND. |

Cada LED tem seu próprio resistor. Ω é o símbolo de ohm, a unidade de resistência. Confira os terminais do LED e se há fios unidos por engano. Essas instruções não definem a alimentação do HC-05 nem de uma placa de relés.

## Acrescente o Bluetooth só depois do teste USB

O programa usa D2 para receber e D3 para transmitir, com a biblioteca `SoftwareSerial`, a 9600 bit/s no modo de dados. TX de um dispositivo transmite para RX do outro.

Antes de ligar o HC-05, o professor precisa conferir sua placa, alimentação, referência GND e adaptação da tensão dos sinais. Aceitar determinada tensão em VCC não comprova que RX aceite a mesma tensão. Não copie a posição dos pinos de uma foto de outro modelo.

## Entenda os comandos e o sinal de presença

O texto `0` apaga todos os LEDs. Os textos `1`, `2` e `3` escolhem um LED. O Arduino responde com o caractere da escolha aplicada. Uma letra inválida, como `X`, apaga os LEDs e confirma `0`; os caracteres de final de linha CR e LF são ignorados.

**O aplicativo exige o programa 3**, cujo nome de arquivo é `03_bancada_supervisionada.ino`. Ele reconhece `?`, o sinal enviado pelo app a cada 500 milissegundos, ou meio segundo, para indicar sua presença. Essa mensagem periódica também é chamada de heartbeat. O programa 2 considera `?` inválido e apaga os LEDs; use-o somente para o exercício anterior de mensagens simples.

No programa 3, após 2000 milissegundos sem mensagem válida para a verificação, os LEDs apagam. Voltar a enviar apenas `?` não os reacende; é necessário um novo comando de velocidade. `?` não recebe resposta. Esses tempos servem ao exercício e não dimensionam a proteção de um motor.

## O que a resposta do aplicativo significa

Enquanto espera a confirmação de um comando, o app bloqueia velocidades e permite pedir Desligar. O primeiro pedido de `0` pode substituir a espera por uma velocidade e iniciar seu próprio prazo. Repetir Desligar enquanto já espera `0` não deve renovar esse prazo. Só a resposta esperada libera as velocidades.

“Confirmação lógica” e “estado lógico” são os textos usados no APK para informar a resposta do programa. Não comprovam rotação nem abertura de contatos. Falta de confirmação, permissão recusada, erro ou resposta inválida encerram a conexão e bloqueiam comandos.

O Android pode atrasar o evento do relógio do app, e seu relógio pode ser ajustado. Não interprete o prazo como garantia de reação em exatamente dois segundos. Como as mensagens não têm um número único de identificação, uma resposta antiga igual pode parecer atual. Vários pedidos de Desligar podem acumular respostas. Sem comando pendente, a ausência exclusiva de respostas também não é detectada apenas pelo sinal `?`, que não recebe eco.

## Estude ou modifique o aplicativo

No App Inventor, importe o AIA como projeto separado, preservando o original. Use o título “Ventilador MbB”. O projeto disponível possui dez componentes, dez eventos, cinco variáveis globais e cinco procedimentos; os blocos organizam as tarefas para evitar repetição. A aula do site ensina os procedimentos antes dos eventos que os utilizam.

O APK disponível e o AIA correspondem ao aplicativo 0.3-experimental, código 3. Se modificar os blocos, gere outro APK pelo menu Build e registre sua versão. Não é necessário compilar novamente apenas para testar o APK já fornecido.

## Registre o que você realmente observou

Anote data, placa, programa, HC-05, alimentação, modelo do celular e Android. Para cada teste, escreva: passos, resultado esperado, resultado observado e situação — aprovado, falhou ou não realizado.

A conferência de arquivos e assinaturas do APK foi concluída. O funcionamento no Android, as permissões e a comunicação com HC-05 precisam ser verificados no aparelho e na montagem reais. Uma simulação ou compilação não encerra esses testes. Use o roteiro `VALIDACAO_MANUAL.md` para continuar.
