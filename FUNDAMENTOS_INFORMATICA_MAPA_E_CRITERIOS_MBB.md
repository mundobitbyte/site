# Fundamentos da Informática — Mapa e critérios MbB

## Objetivo
Criar um módulo transversal e autossuficiente do Mundo bit Byte que ensine a base que qualquer pessoa com conhecimentos fundamentais de informática deveria compreender, mesmo que nunca estude os módulos especializados.

## Origem curricular
O mapa considera os planos já analisados do Centro Paula Souza (`1 DS.pdf`, `2 e 3 DS.pdf` e `1 INF.pdf`). O antigo componente **Fundamentos da Informática** explicita evolução da informática, representação binária, unidades de dados, hardware, software, redes/Internet, livre/proprietário, virtualização, nuvem, sistemas operacionais e práticas de linha de comando, arquivos, pipes, redirecionamentos, permissões e comandos em lote. Os planos atuais distribuem fundamentos também por manutenção, programação, banco de dados, redes, segurança, nuvem, sistemas embarcados, IoT e IA.

## Regra de fronteira
- **Essencial:** precisa ser aprendido aqui, mesmo que outro módulo o aprofunde.
- **Ponte:** precisa ser compreendido aqui para que o aluno reconheça o conceito depois.
- **Especialização:** pertence ao módulo específico; Fundamentos apenas contextualiza.

Pergunta de controle: **“Uma pessoa com formação básica em informática deveria saber isso mesmo que nunca faça o módulo especializado?”**

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

## Regra visual
**Foto mostra o que existiu; diagrama explica como funciona.**

- Preferir fotografia real para pessoas, máquinas, componentes e acontecimentos reais.
- Usar diagrama quando relações e fluxo forem mais importantes que aparência física.
- Toda reconstrução ou réplica deve ser identificada como tal.
- Imagens devem ter resolução razoável, tamanho moderado e legenda pedagógica.
- Créditos e licença ficam visíveis na legenda; não usar “consulte a licença” quando a autoria/licença puder ser verificada.
- Imagens não devem existir só para decorar.
- Quando a imagem vier de repositório externo, usar versão redimensionada e `srcset` quando disponível para reduzir tráfego no celular.
- Sempre que possível, futuramente consolidar imagens relevantes como arquivos locais otimizados, preservando autoria e licença.

### Auditoria visual consolidada
A revisão completa confirmou que **nem toda aula precisa de fotografia**. Em temas abstratos ou de mecanismo, diagramas são pedagogicamente melhores que imagens decorativas.

Fotografias reais estão concentradas onde aparência/história ajudam: computação humana, máquinas históricas, ENIAC/transistor, microprocessador/PC, componentes físicos, memória/armazenamento, registro do bug, firmware/UEFI, CMD, placa de rede/switch, datacenter, Arduino/ESP32.

Aulas como 04, 05, 12, 13, 14 e 17–21 usam principalmente diagramas, tabelas e fluxos porque o objetivo é compreender relações e mecanismos. Isso é intencional, não ausência de imagem.

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

Perguntas devem avaliar critério e explicação, não apenas datas e nomes.

A Aula 99 deve combinar três famílias:
- **compreensão:** distinguir conceitos que parecem sinônimos;
- **diagnóstico:** receber sintomas e construir hipóteses/evidências;
- **integração:** acompanhar situações reais e identificar as camadas envolvidas.

## Mapa narrativo consolidado
### Ato 1 — Como chegamos aqui
00. **O começo** — computer como pessoa; computar; informática; automação.
01. **Da conta à máquina** — Babbage, Ada Lovelace, programa, algoritmo, dados, Hollerith.
02. **Era eletrônica** — relé, válvula, Z3/Colossus em contexto, ENIAC, programa armazenado, transistor.
03. **O computador encolhe** — gerações, circuitos integrados, microprocessador, CPU, mainframe, supercomputador, minicomputador, microcomputador, PC. **Checkpoint 1.**

### Ato 2 — Como funciona
04. **O que é computador?** — definição funcional, entrada, processamento, memória, saída, propósito geral/especializado, periféricos, microcontrolador, sistema computacional.
05. **Bits e Bytes** — necessidade de transformar grandezas em representações discretas, analógico/digital, binário, bit, byte, dado/informação, ASCII, Unicode/UTF-8, imagem/RGB, áudio, lógica digital em alto nível, unidades, b × B.
06. **Hardware** — placa-mãe, CPU, ciclo buscar–decodificar–executar, clock, núcleos, cache, RAM, armazenamento, GPU, barramentos, interface/conector/protocolo, fonte e refrigeração.
07. **Memória e armazenamento** — registradores, cache, RAM, volatilidade, SSD/HDD, latência, SATA/PCIe/NVMe/M.2 e memória virtual. **Checkpoint 2.**
08. **Software e programação** — problema dos 500 alunos, pensamento computacional, algoritmo, linguagem/código, ISA/código de máquina, compilação/interpretação, processo, firmware, driver, software livre/proprietário/open source e bug/debugging.
09. **Sistema Operacional** — concorrência por recursos, kernel, processos, escalonamento, memória, autenticação/autorização contextualizadas, sistema de arquivos, GUI/CLI, firmware da plataforma, UEFI, bootloader e serviços.
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

99. **Exercícios/Desafios** — consolidação integradora, sem introduzir nova teoria estrutural.

## Museu da Informática — ideia posterior
Depois do módulo principal, avaliar uma experiência separada em formato de museu ou linha do tempo. Nesse espaço cabem datas, equipamentos, fotografias e explicações curtas sem sobrecarregar a narrativa principal.

## Arquitetura do módulo
Regra central: **cada conteúdo tem uma única fonte de verdade**.
- `index.html`: estrutura e carregamento;
- `conteudo-00.js` a `conteudo-21.js`: conteúdo canônico das aulas conceituais;
- `interacoes.js`: interações reutilizáveis;
- futuro `exercicios.js` ou equivalente canônico: Aula 99;
- `core.js`: menu, hash, renderização e navegação;
- `fundamentos-informatica.css`: apresentação e responsividade.

Não criar camadas `ajuste-*`, `correcao-*` ou equivalentes para sobrescrever conteúdo. Corrigir sempre na fonte canônica.

## Estado atual após auditoria circular MbB
Aulas **00–21** estão implementadas como percurso conceitual completo. A revisão circular verificou novamente contexto, precisão técnica, progressão, pontes, checkpoints e uso de imagens.

Mudanças de consolidação mais relevantes:
- Aula 05 ganhou uma necessidade concreta antes de analógico/digital/binário;
- Aula 06 teve créditos visuais completados e verificados;
- Aula 09 ganhou situação real antes de autenticação/autorização e crédito UEFI mais preciso;
- Aula 10 ganhou necessidade concreta antes de pipe/redirecionamento, comando de filtro corrigido, regra 3-2-1 refinada e crédito da captura revisado;
- Aulas 13–21 foram consolidadas já sob a regra MbB atual, evitando sequências de definições sem necessidade e usando diagramas no lugar de imagens decorativas.

A próxima etapa é **99 — Exercícios/Desafios**, construída a partir do percurso agora consolidado.
