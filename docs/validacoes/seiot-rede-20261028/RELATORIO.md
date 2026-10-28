# Conectividade 6.4 e 6.5 — revisão prática

Validação de 28/10/2026. Base incorporada: `168fea611fe768ea7453f755a2c6afde3dae241e` (main, incluindo as alterações recentes de Banco de Dados).

## 1. O que foi possível no Wokwi gratuito

O programa com `WiFi.h`, `WebServer.h` e `ESPmDNS.h` compilou e executou. `MDNS.begin("ambiente-mbb")` entrou no ramo de sucesso; a configuração `MDNS.addService("http", "tcp", 80)` produziu registros de serviço observáveis no PCAP exportado pela interface do Wokwi. Não dependemos apenas de uma mensagem no Serial.

| Captura real | Quadros | Pacotes mDNS | Nome no registro A | Serviço SRV |
| --- | ---: | ---: | --- | --- |
| [Primeira execução](wokwi-mdns.pcap) | 135 | 6 | ambiente-mbb.local → 10.10.0.2 | ambiente-mbb.local, porta 80 |
| [Checkpoint: nome alterado](wokwi-mdns-sala.pcap) | 148 | 6 | ambiente-sala.local → 10.10.0.2 | ambiente-sala.local, porta 80 |

Em cada captura, foram três sondagens e três anúncios, de `10.10.0.2` para `224.0.0.251:5353`. Os bytes foram lidos pelo novo leitor JavaScript e a primeira captura foi conferida independentemente pelo Scapy. As quantidades são evidência destes ensaios; não são números que todo aluno deva reproduzir.

A segunda execução manteve ESP32, LED no GPIO 23 e resistor de 220 Ω, e alterou somente o argumento de `MDNS.begin()`. [Resultados dos registros](pcap-resultados.json), [circuito usado](diagram.json) e [captura da interface](wokwi-mdns-sala.jpg).

## 2. O que não foi comprovado

- Resolução de `ambiente-mbb.local` pelo navegador do computador a partir do Wokwi público.
- Consulta e resposta mDNS entre ESP32 de projetos simulados diferentes. Não foi encontrada uma rota gratuita documentada e comprovadamente funcional para isso.
- Entrada HTTP do computador até o ESP32 simulado usando o gateway público. A documentação o limita a conexões de saída; o gateway privado oferece entrada e acesso à rede local, mas é pago.

Um anúncio capturado comprova emissão pela pilha simulada. Uma sondagem do próprio ESP32 não é consulta de outro dispositivo. Um GET de saída do ESP32 também não é um túnel para seu servidor.

## 3. Solução adotada para mDNS

A prática principal funciona no navegador: executar o sketch completo, exportar PCAP pelo ícone Wi-Fi, carregar a captura no leitor local da aula, identificar A/SRV/PTR e repetir com outro nome. O leitor não faz consultas nem fabrica respostas; decodifica o arquivo selecionado. Não há upload do PCAP.

A extensão opcional usa Python e Zeroconf em dois processos do mesmo computador, com multicast na interface local. O anunciante e um cliente novo descobriram `ambiente-mbb.local.`, IP `127.0.0.1` e porta `8000`. Após parar o anúncio, outro processo de consulta aguardou cinco segundos e não recebeu resposta. Esse ensaio é mDNS/DNS-SD real entre processos; não testa a resolução nativa do navegador nem uma LAN entre máquinas.

O programa físico foi mantido, acrescentando IP no Serial e uma mensagem que distingue inicialização de resolução. A verificação por IP e depois pelo nome continua disponível na rede local.

## 4. Solução adotada para tunelamento

Servidor Python restrito ao endereço local `127.0.0.1:8000`, com uma página fixa fictícia. Não serve uma pasta, não entrega arquivos e não oferece rotas de controle. Quick Tunnels/cloudflared fornece o caminho externo temporário sem conta ou cartão.

O ensaio real em Linux isolado retornou HTTP 200 pela URL pública, com conteúdo idêntico ao local, SHA-256 `971a702b46c832a78514c0f2ba1f189854508d5b686087c118db66ea6f787145`. Após encerrar o cliente, a URL deixou de entregar o aviso e o servidor local continuou respondendo. Os processos foram encerrados ao finalizar. A URL temporária não é um link de demonstração permanente.

O binário oficial Linux cloudflared 2026.10.5 foi conferido por SHA-256 antes de executar. localhost.run e ngrok foram comparados documentalmente; não foram executados. A escolha reduz cadastro/credenciais e perguntas de confiança de chave SSH para iniciantes. HTTPS não foi apresentado como autenticação.

Se a rede não permitir o túnel, há encaminhamento HTTP local real de 9000 para 8000, com comparação das respostas e interrupção do encaminhador. Está explicitamente identificado como encaminhamento local, sem acesso externo e sem criptografia de túnel.

A opção com ESP32 físico agora oferece um programa adicional somente leitura. As rotas do LED sem autenticação continuam restritas à experiência local de 6.3/6.4; não há orientação para publicá-las.

## 5. Testes realmente executados

| Verificação | Resultado |
| --- | --- |
| Wokwi: sketch principal e mudança de nome | Compilação, execução, inicialização e anúncios observados em duas capturas reais |
| Programas físicos mDNS e aviso somente leitura | Ambos compilaram no compilador ESP32 do Wokwi e iniciaram; os SSIDs fictícios não se conectam à rede do simulador |
| Fonte da página versus arquivos | Quatro programas copiados idênticos aos arquivos; cinco arquivos completos e idênticos no ZIP |
| Parser PCAP | Cinco testes passaram: captura, relógio em nanossegundos, arquivos inválidos/truncados, captura vazia e checkpoint do nome |
| Scapy independente | Primeira captura: 135 quadros, seis mensagens mDNS, três sondagens/três anúncios, registro A correto |
| HTTP Python real | Página 200; `/servidor.py`, `/../` e `/ligar` recusados com 404; POST recusado com 501 |
| Encaminhamento local real | Conteúdo idêntico; rota de comando recusada; porta 9000 deixa de responder após encerrar; 8000 permanece |
| mDNS Python real | Consulta positiva e nova consulta negativa após interromper o anúncio, em processos separados |
| Túnel externo real | Página pública 200, conteúdo idêntico, encerramento e preservação do acesso local |
| Leitor no navegador | 390/768/1366 px, captura real, arquivo inválido recusado, nenhum envio de arquivo, rolagem e ampliação global em telas estreitas |
| Percurso renderizado | 105 visitas a etapas e 66 cópias conferidas na área de transferência; três âncoras internas e três pesquisas; zero erros JavaScript ou recursos locais quebrados |
| Meu MbB | 29 testes existentes passaram; favoritos, conclusão, visitas e duas anotações em cinco módulos conferidos com conta fictícia em memória, sem escrever no Firebase |
| Preservação | Painéis 6.0, preparação, 6.1 e 6.2 idênticos; códigos anteriores até 6.3 preservados; mesma identidade das 153 unidades do catálogo |

Execução ampla aprovada: [GitHub Actions 40771082789](https://github.com/mundobitbyte/site/actions/runs/40771082789). Os checks do PR validam novamente a versão final. [Hashes e limites das compilações](compilacoes.json), [preservação](preservacao.json) e [resultado do leitor](rede-navegador.json).

Falhas encontradas durante a preparação dos testes não foram contadas como aprovação: Playwright antigo incompatível com o Ubuntu mais recente; posicionamento de âncoras no Chromium 134; e uma asserção que pressupunha imagens lazy carregadas sem visitá-las. O fluxo final usa Playwright 1.62.1/Chromium 151 em Ubuntu 24.04 e efetivamente abre e decodifica as imagens. Não foi necessário alterar a navegação do produto para acomodar o navegador antigo.

## 6. Limitações e pendências

Não foram executados: Windows nativo, macOS, celular físico/rede móvel, ESP32 físico ou resolução `.local` pelo sistema operacional do navegador. A largura de celular foi conferida em navegador automatizado, não em aparelho físico. A compilação no Wokwi não substitui ensaio da placa na rede local.

Os testes Python/mDNS exigiram um runner Linux isolado porque o ambiente local do agente restringe enumeração de interfaces. Os ensaios estão no código e nos logs do GitHub; não são descritos como testes locais que não aconteceram.

Quick Tunnels não garante disponibilidade. Redes institucionais podem bloquear o cliente ou multicast; a aula orienta respeitar essas restrições. Python é necessário para a bancada de tunelamento e o executável oficial para a parte externa. O PCAP de mDNS não exige essas instalações.

## 7. Arquivos e publicação

- `pages/arduino-conectividade.html`: duas etapas, ponte de 6.3 e duas linhas do quadro de ambientes.
- `css/arduino-conectividade-rede.css` e `js/arduino-mdns-pcap.js`: apresentação restrita às práticas e leitor local de bytes.
- Três scripts existentes de Conectividade: retirada apenas das orientações antigas que sobrescreviam 6.4/6.5 ou repetiam explicações já integradas.
- `materiais/arduino/conectividade/` e `downloads/arduino/ambiente-mbb-rede-local.zip`: programas completos e instruções.
- `meu-mbb/catalogo.json`: índice regenerado apenas para a unidade Conectividade, preservando IDs/progresso e mudanças recentes da main.
- `tests/seiot-rede/`, `.github/workflows/seiot-rede-pratica.yml`, `tools/seiot-validacao/navegador.cjs`: verificações reproduzíveis.
- Esta pasta: capturas originais, hashes, registros e imagens de interfaces realmente renderizadas.

A publicação segue branch própria → PR → checks → merge. O link do PR e o estado da publicação serão registrados na entrega; nenhuma prática física não executada será promovida a evidência de funcionamento.

## Referências oficiais conferidas

- [Rede ESP32, gateways e PCAP — Wokwi](https://docs.wokwi.com/guides/esp32-wifi)
- [ESPmDNS — Espressif](https://github.com/espressif/arduino-esp32/tree/master/libraries/ESPmDNS)
- [Multicast DNS — RFC 6762](https://www.rfc-editor.org/info/rfc6762/)
- [Python Zeroconf](https://python-zeroconf.readthedocs.io/en/stable/)
- [HTTP server — Python](https://docs.python.org/3/library/http.server.html)
- [Quick Tunnels — Cloudflare](https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/)
- [cloudflared 2026.10.5 — release oficial](https://github.com/cloudflare/cloudflared/releases/tag/2026.10.5)
- [Plano gratuito — localhost.run](https://localhost.run/docs/forever-free/)
- [Limites gratuitos — ngrok](https://ngrok.com/docs/pricing-limits/free-plan-limits/)
