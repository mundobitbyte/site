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
- Diff da branch em relação ao commit de referência: **um arquivo modificado; 23 linhas adicionadas; nenhuma linha removida**.
- Contagens de seções existentes, blocos `pre`, botões `copyCode`, referências `href` e scripts preservadas.
- Não foram alterados códigos Arduino, arquivos JSON, biblioteca Bluetooth, estilos, recursos de busca nem scripts.
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
