# Fundamentos da Informática — Mapa e critérios MbB

## Objetivo
Criar um módulo transversal e autossuficiente do Mundo bit Byte que ensine a base que qualquer pessoa com conhecimentos fundamentais de informática deveria compreender, mesmo que nunca estude os módulos especializados.

O módulo também deve funcionar como **ponte de atualização tecnológica** para quem estudou informática em gerações anteriores: preservar o modelo mental que continua correto, mostrar o que mudou e permitir interpretar tecnologias atuais sem transformar Fundamentos em curso de manutenção, arquitetura de computadores ou catálogo de produtos.

Ao concluir o percurso, a pessoa deve ser capaz de **ler uma ficha técnica básica de um computador moderno**, reconhecer os principais componentes e tecnologias, separar números que medem coisas diferentes e explicar o papel de cada recurso no sistema.

## Origem curricular
O mapa considera os planos já analisados do Centro Paula Souza (`1 DS.pdf`, `2 e 3 DS.pdf` e `1 INF.pdf`). O antigo componente **Fundamentos da Informática** explicita evolução da informática, representação binária, unidades de dados, hardware, software, redes/Internet, livre/proprietário, virtualização, nuvem, sistemas operacionais e práticas de linha de comando, arquivos, pipes, redirecionamentos, permissões e comandos em lote. Os planos atuais distribuem fundamentos também por manutenção, programação, banco de dados, redes, segurança, nuvem, sistemas embarcados, IoT e IA.

## Regra de fronteira
- **Essencial:** precisa ser aprendido aqui, mesmo que outro módulo o aprofunde.
- **Ponte:** precisa ser compreendido aqui para que o aluno reconheça o conceito depois.
- **Especialização:** pertence ao módulo específico; Fundamentos apenas contextualiza.

Pergunta de controle: **“Uma pessoa com formação básica em informática deveria saber isso mesmo que nunca faça o módulo especializado?”**

### Regra de atualização tecnológica
Para hardware e tecnologias atuais:
- ensinar primeiro o **conceito estável**; gerações, marcas e produtos entram como exemplos;
- ensinar a **interpretar especificações**, não a escolher vencedor pelo maior número;
- registrar tecnologias atuais quando já fazem parte do vocabulário básico, como núcleos/threads, GPU, NPU, SoC, DDR4/DDR5, MT/s, PCIe e NVMe;
- usar história curta quando ela explicar o presente — por exemplo, IBM PC/XT/AT, 286, 386, 486 e Pentium como ponte até multicore e integração atual;
- não transformar a linha histórica em catálogo de modelos nem exigir memorização de gerações comerciais;
- BIOS/UEFI Setup pode ser observado e compreendido, mas práticas potencialmente destrutivas, atualização de firmware, overclock, tensões e manutenção física profunda ficam fora de Fundamentos.

## Filosofia pedagógica
ENTENDER → EXPERIMENTAR → PROGRAMAR → APLICAR.

### Regra narrativa
A história é fio condutor, não gênero literário.

**A história cria a pergunta; a explicação técnica resolve a pergunta.**

Cada aula deve preferir:
1. abertura curta e interessante;
2. dúvida real;
3. construção do raciocínio;
4. conceito técnico com definição clara;
5. exemplo, contraste ou contraexemplo;
6. figura/fotografia/diagrama quando realmente ensinar;
7. pequena verificação de compreensão;
8. essência;
9. ponte para a próxima aula.

A contextualização existe para criar necessidade, não para enfeitar. O módulo não deve virar romance, enciclopédia ou glossário.

### Regra de contextualização conceitual
Antes de apresentar um conceito novo, criar uma situação, dúvida, comparação ou problema concreto que faça o estudante perceber por que aquela ideia é necessária. A sequência preferencial é:

**situação → dúvida real → tentativa de resposta → caso que desafia a resposta → construção do critério → nome técnico → nova comparação → conclusão → aplicação.**

Uma frase genérica antes de um card não conta como contextualização. Se uma sequência começar a parecer `título → definição → card → definição`, revisar antes de publicar.

A contextualização deve ser **proporcional ao conceito**: ideias simples podem nascer de uma situação curta; conceitos que mudam o modelo mental do aluno precisam de uma situação mais desenvolvida. Não transformar cada definição em historinha artificial.

### Fio conceitual Mundo bit Byte
A identidade do projeto pode aparecer pedagogicamente como uma passagem entre representação e uso, sem criar uma falsa equivalência técnica entre “bit = mundo interno” e “byte = mundo externo”.

Fio preferencial:

**mundo físico / símbolos → medição e representação → sistemas numéricos → bits e bytes → códigos e estruturas → hardware e software → comunicação e processamento → resultado útil no mundo.**

Bit e byte são unidades de representação digital. A metáfora dos “dois mundos” deve ajudar a compreender como tecnologias transformam representações em ações, comunicação e significado, nunca substituir a definição técnica.

### Regra editorial: texto publicado fala com o aluno
Todo texto exibido na aula deve fazer parte da experiência de aprendizagem do estudante.

- Não expor decisões de bastidor, critérios editoriais ou justificativas de autoria.
- Evitar frases como “o Mundo bit Byte vai...”, “não precisamos ensinar...”, “por isso aparece aqui...” ou referências ao aluno em terceira pessoa.
- Se uma ressalva metodológica for importante, convertê-la em conhecimento útil para o estudante.
- Regras de construção do material pertencem a este documento interno, não ao conteúdo publicado.

Pergunta de controle antes de publicar: **“Esta frase ensina algo ao aluno ou explica para o autor por que o material foi escrito assim?”** Se for a segunda opção, retirar ou reescrever.

### Rigor técnico e histórico
- Não repetir “lendas de informática” como fatos.
- Expressões como “primeiro computador”, “primeiro programador” ou “inventou sozinho” devem receber qualificação quando houver disputa de critérios.
- ENIAC é marco obrigatório.
- A história do termo **bug** deve registrar que o uso técnico antecede a mariposa do Harvard Mark II; o episódio de 1947 é uma brincadeira histórica memorável, não a origem do termo.
- Definições modernas devem preferir fontes normativas ou primárias quando existirem: RFCs, NIST, UEFI Forum, documentação oficial etc.
- Uma simplificação é aceitável quando ajuda o iniciante, desde que não produza uma ideia tecnicamente falsa que precise ser desaprendida depois.
- XT/AT são plataformas/computadores; 286/386/486/Pentium são processadores ou famílias. A linha histórica deve preservar essa distinção.
- “CMOS Setup” é tratado como expressão histórica: em plataformas atuais, variáveis de firmware podem usar armazenamento não volátil/NVRAM; não ensinar que todas as configurações modernas ficam numa RAM CMOS alimentada pela bateria.
- Frequência e taxa de transferências não são sinônimos: em memória DDR, usar **MT/s** quando o conceito for taxa de dados e explicar o uso informal de MHz em anúncios.

## Regra visual
**Foto mostra o que existiu; diagrama explica como funciona.**

- Preferir fotografia real para pessoas, máquinas, componentes e acontecimentos reais.
- Usar diagrama quando relações e fluxo forem mais importantes que aparência física.
- Usar capturas de tela quando a habilidade desejada for reconhecer uma interface real, como CMD, Gerenciador de Tarefas ou BIOS/UEFI Setup.
- Toda reconstrução ou réplica deve ser identificada como tal.
- Imagens devem ter resolução razoável, tamanho moderado e legenda pedagógica.
- Créditos e licença ficam visíveis na legenda; não usar “consulte a licença” quando a autoria/licença puder ser verificada.
- Imagens não devem existir só para decorar.
- Quando a imagem vier de repositório externo, usar versão redimensionada e `srcset` quando disponível para reduzir tráfego no celular.
- Sempre que possível, futuramente consolidar imagens relevantes como arquivos locais otimizados, preservando autoria e licença.

### Auditoria visual consolidada
A revisão completa confirmou que **nem toda aula precisa de fotografia**. Em temas abstratos ou de mecanismo, diagramas, tabelas comparativas e fluxos são pedagogicamente melhores que imagens decorativas.

Fotografias reais estão concentradas onde aparência/história ajudam: computação humana, máquinas históricas, ENIAC/transistor, microprocessador/PC, componentes físicos, memória/armazenamento, registro do bug, firmware/UEFI, CMD, placa de rede/switch, datacenter, Arduino/ESP32.

A atualização de 09/2026 reforçou o uso visual funcional: valor posicional e conversões em tabelas, leitura de ficha técnica, gerações de memória, tela real de firmware/UEFI e missões de observação no Gerenciador de Tarefas/Setup. Aulas abstratas continuam usando diagramas e fluxos quando eles explicam melhor que uma foto.

### Responsividade
O site deve funcionar bem em celular, inclusive em telas estreitas e em “site para computador”.
- Imagens usam largura responsiva e não forçam zoom.
- Fotografias individuais não devem ocupar várias telas sem necessidade.
- Grades empilham antes de comprimir texto.
- Tabelas podem rolar dentro do próprio contêiner, nunca forçando rolagem horizontal da página inteira.
- Diagramas se reorganizam verticalmente no celular.
- Menu continua em drawer sobreposto; não rouba largura permanente do conteúdo.

## Exercícios
Prática é progressiva:
- **microverificações dentro das aulas**, sem nota;
- **checkpoints ao fim de arcos maiores**;
- **Aula 99** com exercícios e desafios integradores.

Perguntas devem avaliar critério e explicação, não apenas datas, siglas e nomes.

Conteúdos essenciais acrescentados ao módulo devem aparecer novamente em prática. Isso vale especialmente para bases numéricas, ASCII/Unicode, classificação de periféricos e software, leitura de especificações de CPU/RAM/armazenamento e reconhecimento seguro do BIOS/UEFI Setup.

### Regra da Aula 99
A Aula 99 não introduz nova teoria estrutural. Ela deve obrigar o conhecimento já aprendido a trabalhar em quatro níveis progressivos:
1. **compreensão:** separar conceitos relacionados que costumam ser confundidos;
2. **aplicação:** interpretar situações, fichas técnicas e reconhecer o mecanismo envolvido;
3. **diagnóstico:** receber sintomas/evidências, formular ou priorizar hipóteses e evitar conclusões maiores que o teste permite;
4. **integração:** seguir uma situação real por várias camadas e justificar por que cada tecnologia entra.

Depois dos blocos objetivos, usar **desafios abertos** em que o aluno formula a resposta antes de abrir uma linha de raciocínio sugerida, além de pequenas missões práticas seguras. O fechamento deve exigir explicação de ponta a ponta e diagnóstico, não simples reprodução de definições.

## Mapa narrativo consolidado
### Ato 1 — Como chegamos aqui
00. **O começo** — computer como pessoa; computar; informática; automação.
01. **Da conta à máquina** — Babbage, Ada Lovelace, programa, algoritmo, dados, Hollerith.
02. **Era eletrônica** — relé, válvula, Z3/Colossus em contexto, ENIAC, programa armazenado, transistor.
03. **O computador encolhe** — gerações, circuitos integrados, microprocessador, CPU, mainframe, supercomputador, minicomputador, microcomputador, PC e ponte histórica curta IBM PC → XT → AT/286 → 386 → 486 → Pentium → multicore → integração atual. **Checkpoint 1.**

### Ato 2 — Como funciona
04. **O que é computador?** — definição funcional, entrada, processamento, memória, saída, propósito geral/especializado, periféricos classificados por entrada/saída/entrada-saída/armazenamento/comunicação, microcontrolador e sistema computacional.
05. **Bits e Bytes** — mundo físico e representação, analógico/digital, valor posicional, decimal/binário/octal/hexadecimal, conversões, potências de 2, bit, byte, dado/informação, ASCII prático, Unicode/UTF-8, imagem/RGB/hex, áudio, lógica digital em alto nível, unidades, b × B.
06. **Hardware** — placa-mãe, CPU, ciclo buscar–decodificar–executar, clock, núcleos, threads/processadores lógicos, cache, RAM, armazenamento, CPU × GPU × NPU, SoC, PCIe, interface/conector/protocolo, fonte/refrigeração, leitura de ficha técnica e observação no Gerenciador de Tarefas.
07. **Memória e armazenamento** — registradores, cache, RAM, volatilidade, DDR/DDR2/DDR3/DDR4/DDR5, capacidade × geração × MT/s, DIMM/SO-DIMM, canais, reconhecimento de LPDDR/GDDR/HBM, latência em alto nível, SSD/HDD, SATA/PCIe/NVMe/M.2 e memória virtual. **Checkpoint 2.**
08. **Software e programação** — software de sistema/aplicativo/desenvolvimento/firmware, linguagem de programação ≠ categoria de software, problema dos 500 alunos, pensamento computacional, algoritmo, linguagem/código, ISA/código de máquina, compilação/interpretação, processo, driver, software livre/proprietário/open source e bug/debugging.
09. **Sistema Operacional + especial BIOS/UEFI** — concorrência por recursos, kernel, processos, escalonamento, memória, autenticação/autorização, sistema de arquivos, GUI/CLI, firmware da plataforma, BIOS histórica, UEFI, Setup, CMOS/NVRAM em contexto, POST, ordem de boot, Secure Boot × TPM, virtualização, atualização segura de firmware, observação sem alteração, bootloader e serviços.
10. **Arquivos e linha de comando** — arquivo/formato/extensão, diretórios, caminhos, metadados, cópia/movimentação/exclusão, sincronização/backup, CMD, redirecionamento, pipes, arquivo `.bat`, Linux/Bash e inspeção prática de permissões. **Checkpoint 3.**

### Ato 3 — Computadores se conectam
11. **Redes locais** — interface de rede, Ethernet, Wi-Fi, protocolo, LAN, endereço MAC, switch, quadro e distinção rede/Wi-Fi/Internet.
12. **Endereçamento e transporte** — IPv4/IPv6, prefixo, DHCP, rede local/remota, gateway, roteador, IP privado/público, NAT, ARP/Neighbor Discovery, pacote, encapsulamento, TCP/UDP, portas, `ipconfig` e `ping`. **Checkpoint 4.**
13. **Internet e Web** — Internet × Web, cliente/servidor, DNS, cache, domínio, URL, HTTP/HTTPS, TLS, códigos de status, largura de banda e latência.
14. **Dados e banco de dados** — arquivo × banco, modelo relacional, tabela/registro/atributo, chaves, relacionamentos, SGBD, SQL, CRUD, transações e integridade.
15. **Nuvem e virtualização** — virtualização, VM, hipervisor, datacenter, definição NIST de nuvem, elasticidade, IaaS/PaaS/SaaS, modelos de implantação, disponibilidade, redundância, backup e contêineres.
16. **Embarcados e IoT** — sistema embarcado, microcontrolador, Arduino/ESP32, sensor, atuador, ADC, firmware, conectividade, definição de dispositivo IoT, RTOS, servidor embarcado, mDNS/túneis como ponte, edge × nuvem. **Checkpoint 5.**

### Ato 4 — Computação no mundo atual
17. **Segurança** — ativo, confidencialidade/integridade/disponibilidade, ameaça/vulnerabilidade/risco, autenticação/autorização, MFA, hash de senha/salt, criptografia, engenharia social/phishing, malware, atualização, firewall, defesa em profundidade, logs e backup.
18. **APIs e integração** — API como contrato, endpoint, HTTP, métodos, parâmetros, cabeçalhos, corpo, JSON, códigos de status, credenciais, validação, rate limit, versionamento e REST como ponte.
19. **Inteligência Artificial** — programação tradicional × ML, dataset, rótulo, treinamento, modelo, inferência, classificação/regressão/agrupamento, generalização/overfitting, métricas, viés, redes neurais, IA generativa, LLM, tokens, alucinação, RAG e uso responsável.
20. **Diagnóstico e manutenção** — sintoma × causa, hipótese, evidência, teste controlado, isolamento, camadas, `ipconfig`/`ping`/`nslookup`, recursos, temperatura, logs, known-good, troca cruzada, segurança da intervenção, preventiva/corretiva e monitoramento.
21. **Tudo conectado** — ação “Comprar” de ponta a ponta integrando hardware, SO, rede local, DNS/IP, TLS/HTTP, API, banco/transação, pagamento, nuvem, cache, IA opcional, embarcados, segurança e diagnóstico. **Checkpoint final 6.**

### Fechamento
99. **Exercícios/Desafios** — quatro níveis progressivos (compreensão, aplicação, diagnóstico e integração), incluindo bases/ASCII, classificação, ficha técnica, DDR, núcleos/threads, NPU, diagnóstico de boot, desafios abertos, observação segura de hardware/Setup e desafio final de explicação/diagnóstico de ponta a ponta.

## Museu da Informática — ideia posterior
Depois do módulo principal, avaliar uma experiência separada em formato de museu ou linha do tempo. Nesse espaço cabem datas, equipamentos, fotografias e explicações curtas sem sobrecarregar a narrativa principal.

A linha PC/XT/AT/286/386/486/Pentium que entrou na Aula 03 é apenas a **ponte mínima necessária para compreender a evolução até o hardware atual**. Um museu futuro pode aprofundar modelos, anúncios, fotografias e datas sem aumentar o peso da aula principal.

## Arquitetura do módulo
Regra central: **cada conteúdo tem uma única fonte de verdade**.
- `index.html`: estrutura e carregamento;
- `conteudo-00.js` a `conteudo-21.js`: conteúdo canônico das aulas conceituais;
- `conteudo-99.js`: exercícios e desafios canônicos do fechamento;
- `interacoes.js`: interações reutilizáveis;
- `core.js`: menu, hash, renderização e navegação;
- `fundamentos-informatica.css`: apresentação e responsividade.

Não criar camadas `ajuste-*`, `correcao-*` ou equivalentes para sobrescrever conteúdo. Corrigir sempre na fonte canônica.

## Estado atual após auditoria circular MbB — atualização 09/2026
Aulas **00–21 e 99** continuam formando a estrutura canônica. A atualização de setembro de 2026 preservou a arquitetura aprovada e alterou apenas aulas diretamente afetadas por lacunas identificadas na auditoria.

A revisão circular verificou contexto, precisão técnica, progressão, pontes, checkpoints, atualidade tecnológica, segurança das práticas e uso de recursos visuais. O módulo continua introdutório, mas agora também permite atualizar um modelo mental formado em gerações anteriores da informática.

Mudanças de consolidação mais relevantes:
- Aula 03 ganhou uma ponte histórica curta do IBM PC/XT/AT e famílias 286/386/486/Pentium até multicore e integração atual, sem virar catálogo;
- Aula 04 passou a ensinar classificação funcional de periféricos e a aceitar dispositivos multifunção sem forçar categorias antigas;
- Aula 05 passou a tratar sistemas numéricos por valor posicional, conversões decimal/binário/hexadecimal, reconhecimento de octal e uso prático de ASCII/Unicode;
- Aula 06 passou a explicar núcleos × threads, CPU/GPU/NPU, SoC e leitura crítica de uma ficha técnica, com observação no Gerenciador de Tarefas;
- Aula 07 passou a organizar DDR3/DDR4/DDR5, capacidade × geração × MT/s, DIMM/SO-DIMM, canais e reconhecimento de LPDDR/GDDR/HBM, preservando a distinção SATA/PCIe/NVMe/M.2;
- Aula 08 passou a organizar software de sistema, aplicativo, desenvolvimento e firmware e a separar linguagem de programação de implementação/ferramentas de software;
- Aula 09 ganhou especial BIOS/UEFI Setup com BIOS histórica, UEFI, CMOS/NVRAM, POST, ordem de boot, Secure Boot × TPM, virtualização e prática apenas de observação;
- Aula 99 passou a exigir que esses conhecimentos novos sejam usados em compreensão, aplicação e diagnóstico, incluindo leitura de ficha técnica e missões práticas seguras;
- não foram criadas aulas paralelas, arquivos `ajuste-*` nem renumeração; a fonte canônica foi preservada.
