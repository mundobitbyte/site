# Web III — construção integral em branch isolada

Base publicada: b00328b53434e3e01bea568792c5ecd60b50ae5b.
Branch: feat/web3-construcao-completa-20261026.

Em 26/10/2026, o professor aprovou a continuação após o Capítulo 2 e combinou construir o restante do módulo em entregas maiores, com revisão circular e em espiral do conjunto e validações técnicas durante a construção. O pedido posterior “Pode fazer” autoriza executar esse fluxo. Não se reutiliza o limite antigo ao Capítulo 2 como bloqueio ao trabalho novo.

A publicação continua condicionada à validação; capítulos, projetos ou integrações incompletos não são apresentados como concluídos. As atribuições curriculares dependem do plano efetivamente aplicável à turma. Nenhuma contratação ou uso de serviço pago pelos alunos é presumida.

Escopo: ponte comum; percursos MVC/serviços com PHP/Laravel e Laragon no Windows, SPA com React/TypeScript, BaaS com TypeScript e ambiente didático isolado; navegação por percurso; integração preservando as identidades dos conteúdos e os mecanismos de estudo.

Referências: MODO_MBB.md, planejamento detalhado de 23/10, sequência de 25/10 e encaminhamento aprovado de 26/10. As decisões posteriores do professor prevalecem sobre estados de autorização antigos nos documentos.

## Andamento

- [x] Base e autorização conferidas; worktree isolada criada.
- [ ] Kits progressivos e ambientes homologados.
- [ ] Material integral dos percursos escrito e reconstruído.
- [ ] Navegação e registros de estudo conferidos.
- [ ] Revisão pedagógica do conjunto e navegador.
- [ ] Integração e publicação das partes validadas.

## Evidências e limites

PHP nativo mínimo e Node 24 disponíveis. A ampliação do runtime e os emuladores são verificados antes de definir comandos de aluno. Windows/Laragon, leitor de tela, contas reais de aluno e implantação em nuvem não serão declarados testados por equivalência com Linux, emulação ou respostas controladas.

Primeiro checkpoint local 5f82e1d: classe de atendimento, persistência/API protegida, catálogo com rascunho/publicação e SPA React/TypeScript. Sintaxe de 12 arquivos PHP e build real React/TypeScript aprovados. Testes de HTTP/persistência em preparação; conteúdo didático e BaaS ainda não concluídos.

## Segundo checkpoint técnico (sem publicação)

- PHP 8.5.12 nativo, com PDO/SQLite, mbstring, XML, SOAP, cURL e OpenSSL; Composer 2.10.3; Java 21 e Node 22.23.4 preparados em diretório isolado.
- Backend: quatro grupos de testes HTTP/SQLite aprovados, incluindo sessão/CSRF, prazo ausente/zero/encerramento, importação repetida e rascunho/publicação.
- Laravel: 13 testes / 53+ asserções (execução final: 57) aprovados; consulta, autorização, validação, importação/relacionamento, CEP com respostas controladas e falha, idioma e preservação do contrato. Não equivale a piloto Windows/Laragon ou teste manual de toda a aplicação.
- BaaS: quatro testes de regras Firestore/Storage aprovados em emuladores reais. A primeira tentativa encontrou uma sobrescrita indevida; regra corrigida com verificação explícita de inexistência do objeto e suíte repetida com sucesso.
- Build TypeScript/Vite do cliente BaaS e service worker aprovado; dois testes de regras puras de Functions aprovados. Integração Auth/Functions/gatilho ainda em execução.
- Compatibilidade de SDK: Firebase 12.10.0, testes de regras 5.0.2 e CLI 15.0.0, com núcleo Firebase fixado para evitar resolução de peer dependencies incompatível com Node 22. Travas distribuídas; não usar force/legacy-peer-deps.
- A persistência do nome exigiu escape nas telas PHP do kit novo. Não foram reescritos os capítulos publicados.
- Push real, provedor IA real, hospedagem cloud e faturamento não foram executados/contratados. O rascunho controlado é identificado como exercício, sem chamada de IA nem publicação automática.

Os kits continuam sendo fontes de construção. Não representam capítulos completos nem cobertura curricular homologada. Material, progressão, navegação, testes React e revisão transversal permanecem em trabalho.


## Conferência curricular — 28/10/2026

O professor informou que sua referência pedagógica combina os dois documentos enviados e confirmou o arquivo de 2ª/3ª séries. Essa declaração identifica a referência de trabalho dessas séries; não comprova equivalência oficial entre planos ou vinculação de todas as turmas ao mesmo código.

### Plano 1062

- Anexo `1 DS(4).pdf`: 101 páginas; Ensino Médio com habilitação em Desenvolvimento de Sistemas, eixo Informação e Comunicação, área Desenvolvimento de Sistemas, período parcial matutino/vespertino, 3.300 horas.
- Fonte oficial consultada: <https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/226/2026/02/Desenvolvimento-de-Sistemas-2026-MTec-1062-1a-serie.pdf>, vinculada em <https://etecguaianazes.cps.sp.gov.br/plano-pedagogico/>.
- Comparação local efetiva: anexo e PDF oficial têm SHA-256 idêntico `bd7433612582398c4793b3446f38d1cfa98c1ff4a8bf1425f9df11f9daadc3d5`; texto normalizado idêntico nas 101 páginas. Não é evidência de truncamento do envio do professor.
- Sumário, p. 2: a seção 5.5 detalha apenas a 1ª série. Matrizes nas pp. 20–23 abrangem as três séries; na matriz presencial sem espanhol, Web I/II/III têm 120/80/80 horas-aula de 50 minutos. Matriz não substitui competências, habilidades e bases tecnológicas detalhadas.
- Histórico da capa: versão original, sem atualizações registradas. Não foi localizada, na pesquisa pública realizada nesta data, versão do MESMO plano 1062 com detalhamento curricular das três séries. Isso não demonstra inexistência de outra versão em acervo interno.
- Corroboração: publicações de São Mateus, Ribeirão Preto e Jaraguá também disponibilizam o documento identificado como primeira série. Links de outras séries remetem a outros planos, que não devem ser apresentados como continuação comprovada do 1062.
- Pendente: obter da coordenação/Cfac a revisão integral aplicável à coorte, com competências, habilidades e bases da 2ª e 3ª séries e histórico de revisões. Nenhum contato enviado.

### Plano 612 — referência de 2º/3º DS confirmada pelo professor

- Anexo `2 e 3 DS(2).pdf`: 323 páginas, plano 612, identificação datada de 16/10/2021, Ensino Médio integrado em período integral, 3.600 horas.
- Página 160, III.11 Programação Web III: 80 horas-aula práticas; frameworks multicamadas e recursos móveis; requisições assíncronas/AJAX; consumo de APIs e exposição de serviços; REST, WSDL/SOAP, XML/JSON; MVC; ORM; URLs/roteamento; templates; scaffolding; formulários/validação; autenticação/autorização; internacionalização e segurança.
- A classificação curricular de SOAP/WSDL como manutenção de estado não autoriza ensinar que SOAP é intrinsecamente stateful. Preservar o tópico obrigatório e explicar tecnicamente a distinção.
- Esse documento fundamenta o percurso MVC/serviços. Não comprova obrigatoriedade de React/SPA, Firebase/BaaS ou TypeScript em Web III; tecnologias e complementos devem ter justificativa pedagógica separada.

### Consequências para a construção

Manter história e arquivos contínuos do Café Aurora; mapear cada requisito comprovado do 612 no percurso MVC/serviços. Não somar todas as trilhas como obrigação do mesmo aluno. As estimativas de estudo do material não equivalem à carga oficial de 80 horas-aula; retomar conhecimentos por diagnóstico e separar recuperação/aprofundamento sem comprimir requisitos. Não declarar o planejamento homologado para o Web III do 1062 enquanto faltarem as ementas dessas séries, nem para o técnico modular sem seu documento aplicável. Não publicar atribuições curriculares definitivas baseadas nessa lacuna.

### Estado da recuperação técnica

A cópia temporária anterior foi removida pela manutenção do ambiente. O checkpoint do GitHub foi restaurado. Ajustes recuperados no commit local 442dfee: templates de aplicações como fontes `.html.txt`, preservação da lista SPA durante edição, modo de build/teste Vite, chave estrangeira Laravel explícita, confirmação de gravações BaaS e limite de rascunho controlado. Nova verificação executada neste ambiente: suíte Meu MbB, 29 testes aprovados, zero falhas. Isso não revalida os ambientes PHP/emuladores; PHP e Composer não estão disponíveis no ambiente restaurado. O gerador progressivo `scripts/web3_etapas.py` foi parcialmente recuperado e continua interno, sem homologação ou geração de material publicado. As páginas didáticas mais recentes ainda precisam ser reconstruídas; não são apresentadas como disponíveis.
