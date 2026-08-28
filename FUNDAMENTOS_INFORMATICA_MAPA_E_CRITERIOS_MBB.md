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

### Regra editorial: texto publicado fala com o aluno
Todo texto exibido na aula deve fazer parte da experiência de aprendizagem do estudante.

- Não expor decisões de bastidor, critérios editoriais ou justificativas de autoria.
- Evitar frases como “o Mundo bit Byte vai...”, “não precisamos ensinar...”, “por isso aparece aqui...” ou referências ao aluno em terceira pessoa.
- Se uma ressalva metodológica for importante, convertê-la em conhecimento útil para o estudante.
- Regras de construção do material pertencem a este documento interno, não ao conteúdo publicado.

Pergunta de controle antes de publicar: **“Esta frase ensina algo ao aluno ou explica para o autor por que o material foi escrito assim?”** Se for a segunda opção, retirar ou reescrever.

### Rigor histórico
- Não repetir “lendas de informática” como fatos.
- Expressões como “primeiro computador”, “primeiro programador” ou “inventou sozinho” devem receber qualificação quando houver disputa de critérios.
- ENIAC é marco obrigatório.
- A história do termo **bug** deve registrar que o uso técnico antecede a mariposa do Harvard Mark II; o episódio de 1947 é uma brincadeira histórica memorável, não a origem do termo.
- Personagens e datas só entram quando ajudam a fazer nascer um conceito necessário.

## Regra visual
**Foto mostra o que existiu; diagrama explica como funciona.**

- Preferir fotografia real para pessoas, máquinas, componentes e acontecimentos reais.
- Usar diagrama quando relações e fluxo forem mais importantes que aparência física.
- Toda reconstrução ou réplica deve ser identificada como tal.
- Imagens devem ter resolução razoável, tamanho moderado e legenda pedagógica.
- Créditos/licença ficam visíveis na legenda e fontes detalhadas podem ficar em bloco recolhível.
- Imagens não devem existir só para decorar.
- Quando a imagem vier de repositório externo, usar versão redimensionada e `srcset` quando disponível para reduzir tráfego no celular.
- Sempre que possível, futuramente consolidar imagens relevantes como arquivos locais otimizados, preservando autoria e licença.

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
- futura **Aula 99** com exercícios e desafios integradores.

Perguntas devem avaliar critério e explicação, não apenas datas e nomes.

## Mapa narrativo atual
### Ato 1 — Como chegamos aqui
00. **O começo** — computer como pessoa; computar; informática; automação.
01. **Da conta à máquina** — Babbage, Ada Lovelace, programa, algoritmo, dados, Hollerith.
02. **Era eletrônica** — relé, válvula, Z3/Colossus em contexto, ENIAC, programa armazenado, transistor.
03. **O computador encolhe** — gerações, circuitos integrados, microprocessador, CPU, mainframe, supercomputador, minicomputador, microcomputador, PC. Checkpoint 1.

### Ato 2 — Como funciona
04. **O que é computador?** — definição, entrada, processamento, memória, saída, propósito geral/especializado, periféricos, microcontrolador, sistema computacional.
05. **Bits e Bytes** — analógico/digital, sistema binário e conversão simples de base 2, bit, byte, dado/informação, ASCII, Unicode/UTF-8, imagem/RGB, áudio com amostragem e quantização, lógica digital em alto nível, unidades de dados, b × B.
06. **Hardware** — placa-mãe, CPU, ciclo buscar–decodificar–executar, clock, núcleos, cache, RAM, armazenamento, GPU, barramentos, interface/conector/protocolo, fonte e refrigeração.
07. **Memória e armazenamento** — registradores, cache, RAM, volatilidade, SSD/HDD, latência, SATA/PCIe/NVMe/M.2 e memória virtual. Checkpoint 2.
08. **Software e programação** — problema contextualizado, pensamento computacional, algoritmo, linguagem/código, ISA/código de máquina, compilação/interpretação, processo, firmware, driver, software livre/proprietário/open source e bug/debugging.
09. **Sistema Operacional** — kernel, processos, escalonamento, memória, usuários, autenticação/autorização, sistema de arquivos, GUI/CLI, firmware da plataforma, UEFI, bootloader e serviços.
10. **Arquivos e linha de comando** — arquivo/formato/extensão, diretórios, caminhos, metadados, cópia/movimentação/exclusão, sincronização/backup, CMD, redirecionamento, pipes, arquivo `.bat`, Linux/Bash e inspeção prática de permissões. Checkpoint 3.

### Ato 3 — Computadores se conectam
11. **Redes locais** — interface de rede, Ethernet, Wi-Fi, protocolo, LAN, endereço MAC, switch, quadro e distinção rede/Wi-Fi/Internet.
12. **Endereçamento e transporte** — IPv4/IPv6, prefixo, DHCP, rede local/remota, gateway, roteador, IP privado/público, NAT, ARP/Neighbor Discovery, pacote, encapsulamento, TCP/UDP, portas, `ipconfig` e `ping`. Checkpoint 4.
13. **Internet e Web** — Internet × Web, cliente/servidor, DNS, domínio, URL, HTTP/HTTPS e requisição/resposta.
14. **Dados e banco de dados** — arquivo × banco, SGBD, tabelas, chaves, relacionamentos, SQL como ponte.
15. **Nuvem e virtualização** — servidor, datacenter, VM, virtualização, contêiner como ponte, serviços de nuvem.
16. **Embarcados e IoT** — microcontrolador, sensor, atuador, firmware e conectividade.

### Ato 4 — Computação no mundo atual
17. **Segurança** — ameaça, vulnerabilidade, autenticação/autorização, MFA, criptografia, hash, malware, atualização, backup.
18. **APIs e integração** — por que sistemas precisam trocar dados; requisição/resposta e formatos em alto nível.
19. **Inteligência Artificial** — dados, modelo, treinamento, inferência, IA generativa, limites e responsabilidade.
20. **Diagnóstico e manutenção** — sintoma × causa, isolamento, camadas hardware/software/rede, ferramentas e procedimento.
21. **Tudo conectado** — seguir uma ação moderna de ponta a ponta, integrando hardware, SO, rede, servidor, dados e interface.
99. **Exercícios/Desafios** — consolidação integradora.

## Museu da Informática — ideia posterior
Depois do módulo principal, avaliar um capítulo/experiência separada em formato de museu ou linha do tempo. Nesse espaço cabem datas, equipamentos, fotografias e explicações curtas sem sobrecarregar a narrativa principal.

## Arquitetura do módulo
Regra central: **cada conteúdo tem uma única fonte de verdade**.
- `index.html`: estrutura e carregamento;
- `conteudo-00.js` a `conteudo-12.js`: conteúdo canônico das aulas já publicadas;
- `interacoes.js`: interações reutilizáveis;
- futuro `exercicios.js`: Aula 99;
- `core.js`: menu, hash, renderização e navegação;
- `fundamentos-informatica.css`: apresentação e responsividade.

Não criar camadas `ajuste-*`, `correcao-*` ou equivalentes para sobrescrever conteúdo. Corrigir sempre na fonte canônica.

## Estado atual
Aulas 00–12 implementadas como base pedagógica publicada. A revisão circular MbB consolidou o bloco 06–10 e dividiu a antiga ideia de uma única aula de Redes em duas etapas: **rede local primeiro; endereçamento/roteamento/transporte depois**. O próximo passo narrativo é a Aula 13 — Internet e Web.
