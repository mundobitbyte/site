# Fundamentos da Informática — Mapa e critérios MbB

## Objetivo
Criar um módulo transversal e autossuficiente do Mundo bit Byte que ensine a base que qualquer pessoa com conhecimentos fundamentais de informática deveria compreender, mesmo que nunca estude os módulos especializados.

## Origem curricular
O mapa considera os planos já analisados do Centro Paula Souza (`1 DS.pdf`, `2 e 3 DS.pdf` e `1 INF.pdf`). O antigo componente **Fundamentos da Informática** explicita evolução da informática, representação binária, unidades de dados, hardware, software, redes/Internet, livre/proprietário, virtualização, nuvem, sistemas operacionais e práticas de linha de comando, arquivos, pipes, redirecionamentos e permissões. Os planos atuais distribuem fundamentos também por manutenção, programação, banco de dados, redes, segurança, nuvem, sistemas embarcados, IoT e IA.

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

### Rigor histórico
- Não repetir “lendas de informática” como fatos.
- Expressões como “primeiro computador”, “primeiro programador” ou “inventou sozinho” devem receber qualificação quando houver disputa de critérios.
- ENIAC é marco obrigatório.
- A história do termo **bug** deve ser usada futuramente com a correção: o uso técnico antecede a mariposa do Harvard Mark II; o episódio de 1947 é uma brincadeira histórica memorável, não a origem do termo.
- Personagens e datas só entram quando ajudam a fazer nascer um conceito necessário.

## Regra visual
**Foto mostra o que existiu; diagrama explica como funciona.**

- Preferir fotografia histórica real para pessoas, máquinas e acontecimentos reais.
- Usar ilustração própria apenas quando não houver boa foto ou quando um esquema explicar melhor.
- Toda reconstrução ou réplica deve ser identificada como tal.
- Imagens devem ter resolução razoável, tamanho moderado e legenda pedagógica.
- Créditos/licença ficam visíveis na legenda e fontes detalhadas podem ficar em bloco recolhível.
- Imagens não devem existir só para decorar.

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
05. **Bits e Bytes** — analógico/digital, binário, bit, byte, dado/informação, ASCII, Unicode/UTF-8, imagem/áudio, lógica digital em alto nível, unidades de dados, b × B.
06. **Hardware** — CPU, núcleos, cache, RAM, armazenamento, GPU, placa-mãe, barramentos, fonte, interfaces.
07. **Memória e armazenamento** — hierarquia cache–RAM–SSD/HDD, volatilidade, capacidade, velocidade.
08. **Software e programação** — software, firmware, driver, programa, código, pensamento computacional, compilação/interpretação, bug/debugging.
09. **Sistema Operacional** — boot, BIOS/UEFI, processos, memória, arquivos, usuários, permissões, serviços, GUI/terminal.
10. **Arquivos e linha de comando** — caminhos, extensão/formato, sistema de arquivos, cópia/sincronização/backup, comandos, redirecionamento e pipes.

### Ato 3 — Computadores se conectam
11. **Redes** — LAN, interface, MAC, IP, switch, roteador, TCP/UDP e portas.
12. **Internet e Web** — Internet × Web, cliente/servidor, DNS, URL, HTTP/HTTPS.
13. **Dados e banco de dados** — arquivo × banco, SGBD, tabelas, chaves, relacionamentos, SQL como ponte.
14. **Nuvem e virtualização** — servidor, datacenter, VM, virtualização, contêiner como ponte, serviços de nuvem.
15. **Embarcados e IoT** — microcontrolador, sensor, atuador, firmware e conectividade.

### Ato 4 — Computação no mundo atual
16. **Segurança** — ameaça, vulnerabilidade, autenticação/autorização, MFA, criptografia, hash, malware, atualização, backup.
17. **APIs e integração** — por que sistemas precisam trocar dados; requisição/resposta e formatos em alto nível.
18. **Inteligência Artificial** — dados, modelo, treinamento, inferência, IA generativa, limites e responsabilidade.
19. **Diagnóstico e manutenção** — sintoma × causa, isolamento, camadas hardware/software/rede, ferramentas e procedimento.
20. **Tudo conectado** — seguir uma ação moderna de ponta a ponta, integrando hardware, SO, rede, servidor, dados e interface.
99. **Exercícios/Desafios** — consolidação integradora.

## Museu da Informática — ideia posterior
Depois do módulo principal, avaliar um capítulo/experiência separada em formato de museu ou linha do tempo. Nesse espaço cabem datas, equipamentos, fotografias e explicações curtas sem sobrecarregar a narrativa principal.

## Arquitetura do módulo
Regra central: **cada conteúdo tem uma única fonte de verdade**.
- `index.html`: estrutura e carregamento;
- `conteudo-00.js` a `conteudo-05.js`: conteúdo canônico das aulas já publicadas; a partir da Aula 06, novos blocos podem ser agrupados quando isso mantiver os arquivos manejáveis sem criar camadas corretivas;
- `interacoes.js`: interações reutilizáveis;
- futuro `exercicios.js`: Aula 99;
- `core.js`: menu, hash, renderização e navegação;
- `fundamentos-informatica.css`: apresentação e responsividade.

Não criar camadas `ajuste-*`, `correcao-*` ou equivalentes para sobrescrever conteúdo. Corrigir sempre na fonte canônica.

## Estado atual
Primeiro bloco 00–05 implementado como nova base pedagógica. O diagnóstico de entrada foi removido: Fundamentos começa efetivamente do zero. O primeiro checkpoint ocorre ao fim da Aula 03. A validação prática desse bloco orientará o desenvolvimento da Aula 06 em diante.
