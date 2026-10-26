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
