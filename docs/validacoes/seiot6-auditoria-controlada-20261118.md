# Auditoria controlada — tópico 6, Conectividade (18/11/2026)

## Estado e restauração
- Repositório: `mundobitbyte/site`.
- Referência de preservação: `main` no commit `e9b652d5ed4e1d1f3b441b9ae51ff0448fb93941` (já contém o PR #263 e o JSON visível do PR #266).
- Esta branch **não modifica a main**.
- Verificados históricos dos PRs #257, #258, #259 e #263 quanto à sua intenção e integração; **a auditoria histórica de todos os diffs e recursos ainda não foi concluída**.

## Inventário inicial dos recursos identificados
- Página principal: `pages/arduino-conectividade.html` (preparação, Bluetooth, Wi-Fi, HTTP cliente/servidor, mDNS, túnel).
- Scripts de conteúdo e funcionamento: `js/arduino-conectividade.js`, `js/arduino-conectividade-mbb-wokwi-20261005.js`, `js/arduino-conectividade-aprofundamento-mbb-20261026.js`, `js/arduino-conectividade-acrescimos-20261117.js`, `js/arduino-mdns-pcap.js` e scripts compartilhados.
- Exemplos: `materiais/arduino/conectividade/wokwi/*.ino`, `diagram.json`, programas para ESP32 físico e recursos de laboratório Python em `rede-local`.
- Testes existentes: `tests/seiot-restauracao/`, `tests/seiot-rede/`; workflows `seiot6-restauracao.yml`, `seiot-rede-pratica.yml`.
- Solução Bluetooth particularmente protegida: biblioteca auxiliar `BluetoothSerial.h` produzida no Wokwi para preservar a *interface* do programa da placa física, sem simular o rádio real.

## Intervenções realizadas nesta etapa
1. Mapa transversal de evidências, distinguindo o que cada ambiente comprova e o que **não** comprova nas cinco etapas.
2. Fundamentação de SSID, DHCP, IP local e 2,4 GHz, seguida de investigação autônoma, na etapa Wi-Fi.

## Preservação verificada
- No primeiro commit de conteúdo, o diff registrou **23 linhas adicionadas ao HTML, nenhuma removida**. Os commits posteriores corrigiram dois scripts complementares e acrescentaram testes. Consulte o diff atual do PR para a relação completa de arquivos e linhas.
- Contagens de seções existentes, blocos `pre`, botões `copyCode`, referências `href` e scripts preservadas.
- Não foram alterados códigos Arduino, arquivos JSON, biblioteca Bluetooth, estilos nem recursos de busca. **Dois scripts complementares foram corrigidos** para preservar textos didáticos, sem modificar o código executável dos exemplos Arduino.
- Nenhum tópico fora do 6 foi modificado.

## Validação: alcance real
| Elemento | Situação | Evidência / limite |
| --- | --- | --- |
| Diff, arquivos e contagens estáticas | **Validado estaticamente** | Comparação GitHub e verificações de estrutura |
| Códigos existentes | **Preservados** | Nenhum código removido ou alterado nesta branch |
| JSON de LED e biblioteca auxiliar Bluetooth | **Preservados** | Arquivos não modificados |
| Simulação Wokwi | **Pendente** | Não executada nesta etapa |
| ESP32 físico | **Pendente** | Hardware não testado |
| Navegação, cópia e responsividade real | **Pendente** | Não foi executado teste de navegador |
| Jornada pedagógica completa aluno sozinho | **Pendente** | A inclusão de explicações não comprova aprendizagem |

## Pendências relevantes antes da conclusão da missão integral
- Auditoria linha a linha do conteúdo montado após execução dos scripts, com observação da ordem de carregamento.
- Comparação histórica detalhada de todos os conteúdos e arquivos potencialmente perdidos.
- Revisão por unidade dos comandos, parâmetros, conexões, práticas, diagnósticos, resultados e exercícios.
- Compilação, validação JSON, ensaios de simulação e testes de navegação, cópia, acessibilidade e responsividade.
- Oito voltas completas de revisão MbB com registro de evidências.
- Aplicação do teste do aluno sozinho em todos os assuntos.

**Conclusão parcial e explícita:** esta branch contém melhorias iniciais seguras; **não** representa ainda a missão integral como concluída. Nenhum merge ou deploy foi feito.

## Auditoria adicional do comportamento integrado dos scripts
A revisão não ficou restrita ao HTML. Foram examinados os seguintes fluxos de código e suas dependências:
- `js/arduino-conectividade.js`: navegação por âncoras, habilitação de etapas, botões Copiar, montagem do circuito, inserção do arquivo auxiliar Bluetooth e construção do exemplo Wi-Fi.
- `js/arduino-conectividade-mbb-wokwi-20261005.js`: revisões posteriores por `innerHTML`. **Defeito confirmado por leitura de código:** ele apagava a orientação já introduzida em 4A e a explicação dos parâmetros `WiFi.begin(...)`. **Corrigido:** acréscimos não destrutivos com identificadores para evitar duplicações.
- `js/arduino-conectividade-aprofundamento-mbb-20261026.js`: inserção de leitura comentada junto ao código. **Defeito confirmado por leitura de código:** removia `.explain` original. **Corrigido:** conserva a explicação já presente e acrescenta a leitura.
- `js/arduino-conectividade-acrescimos-20261117.js`: análise do carregamento assíncrono e cópia do JSON `diagram.json`, do programa HTTP local e do modelo de túnel; nenhuma alteração nesta passagem.
- `js/arduino-mdns-pcap.js`: inspeção da leitura local de PCAP clássico, IPv4/UDP e registros DNS; existem testes específicos com capturas de referência; nenhuma alteração nesta passagem.
- `materiais/arduino/conectividade/wokwi/http-local.ino`: inspeção das rotas GET/POST e do cliente loopback; não houve compilação nesta passagem.
- `materiais/arduino/conectividade/mdns-fisico.ino`, `wokwi/mdns.ino`: inspeção das inicializações mDNS e dos caminhos físico/simulado; sem executar hardware.
- `materiais/arduino/conectividade/rede-local/servidor.py` e `encaminhador_local.py`: inspeção dos servidores de teste com bind em 127.0.0.1; não foram executados.
- `tests/seiot-restauracao/validar.mjs`, `navegador.cjs`, `gerar-bluetooth.mjs`, `tests/seiot-rede/pcap.test.cjs` e `conteudo.py`: verificação dos testes existentes. Foram adicionadas afirmações estáticas de não regressão em `validar.mjs`.

**Nota sobre validação:** as correções descritas são confirmadas pela análise de origem e comparação dos trechos modificados, mas os novos testes ainda não foram executados num navegador nesta sessão. Conferências com Wokwi e aluno real seguem pendentes.

**Limitação importante da proteção:** a preservação de linhas de HTML e de arquivos Arduino não basta. Também é necessário verificar que o DOM final mantém as explicações após o carregamento e que os scripts posteriores não removem conteúdo válido. Esta revisão acrescentou proteção específica para dois mecanismos de sobrescrita, mas não certifica ainda todo o DOM final.

## Coerência da sequência HTTP
O roteiro de leitura comentada invertia as legendas da Parte A (cliente) e da Parte B (servidor), contrariando o HTML da aula. A nomenclatura foi corrigida no script de aprofundamento, e foi acrescentada uma asserção de regressão. Nenhuma rota, biblioteca ou sketch foi modificada.

## Execução real da CI após revisão dos scripts
No commit `27b85e2713a78b95e2c32aed257e9531e93576d5`, o GitHub Actions concluiu:
- **Sucesso:** [recuperação do tópico 6](https://github.com/mundobitbyte/site/actions/runs/44300218218), incluindo jobs `compilacao`, `navegador` e `conteudo`.
- **Sucesso:** [validação visual global](https://github.com/mundobitbyte/site/actions/runs/44300218229).
- **Sucesso:** [prática real mDNS e servidor local](https://github.com/mundobitbyte/site/actions/runs/44300218225). A expressão “real” refere-se à prática de rede no ambiente CI, **não** a hardware ESP32 físico.
- **Sucesso:** [segurança do repositório](https://github.com/mundobitbyte/site/actions/runs/44300218213).
- **Falha:** [pesquisa global](https://github.com/mundobitbyte/site/actions/runs/44300218192), na etapa `node meu-mbb/atualizar-pesquisa.cjs --check`: **“1 unidade(s) com índice desatualizado.”**. A regeneração envolve `meu-mbb/catalogo.json`, arquivo de aproximadamente 5,6 MB; correção pendente, sem substituição manual arriscada do catálogo.

Os testes de navegação foram reforçados em commit posterior para detectar perda de textos após a aplicação dos scripts. O sucesso dos testes anteriores **não valida automaticamente esse novo teste**; aguardar conclusão da CI do novo commit.

**Decisão de escopo:** não alterar tópicos 1–5 nem 7+ para sanar a busca; confirmar que a única unidade afetada pelo índice é Conectividade antes de atualizar o catálogo.

## Terceira regressão de conteúdo corrigida: teste do cliente HTTP
O script `arduino-conectividade-mbb-wokwi-20261005.js` também substituía integralmente o elemento `ol` da etapa `5. Testando o cliente` por meio de `innerHTML`. A lista já tinha instruções e evidências úteis. A substituição foi removida: agora o complemento é um parágrafo separado com `data-mbb6-http-cliente-complemento`. As verificações estática e Playwright agora cobrem este comportamento.

## Resultado adicional dos testes de DOM
O primeiro teste novo exigia o texto do título do aprofundamento HTTP no DOM final, mas o renderizador elimina especificamente o `h3` dessa leitura. Essa exigência era incorreta. O teste foi corrigido para localizar os blocos `data-mbb6-leitura=http-cliente` e `http-servidor` e validar as explicações efetivamente inseridas. No job `navegador` do [run 44304676176](https://github.com/mundobitbyte/site/actions/runs/44304676176), a versão corrigida do teste de DOM passou. As alterações posteriores do teste de preservação do HTTP ainda exigem a sua própria execução e conferência.
