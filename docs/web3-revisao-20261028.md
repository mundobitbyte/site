# Web III — construção e revisão de 28/10/2026

Este documento acompanha a construção em branch isolada. Não certifica equivalência curricular, aplicação em Windows ou execução de serviços de nuvem. O professor autorizou prosseguir usando os documentos disponíveis; a lacuna do plano 1062 não é motivo para paralisar a construção nem autorização para inventar seus conteúdos ausentes.

## Referências e pendências curriculares

O arquivo de 2º/3º DS enviado e confirmado pelo professor é o plano 612 (identificação de 16/10/2021), integrado integral de 3.600 horas. Web III está na p. 160, com 80 horas-aula práticas. É a referência comprovada para o percurso MVC/serviços neste planejamento misto.

O plano 1062 é parcial, 3.300 horas. Seu anexo de 101 páginas é byte a byte idêntico ao PDF oficial consultado em Guaianazes: SHA-256 `bd7433612582398c4793b3446f38d1cfa98c1ff4a8bf1425f9df11f9daadc3d5`. A matriz apresenta Web I/II/III com 120/80/80 h-a; o detalhamento curricular disponível corresponde à primeira série. Não se afirma que o documento integral não ficou pronto: a pesquisa pública não confirmou acesso à revisão integral em acervo central.

Fonte: <https://bkpsitecpsnew.blob.core.windows.net/uploadsitecps/sites/226/2026/02/Desenvolvimento-de-Sistemas-2026-MTec-1062-1a-serie.pdf>.

Continuam pendentes a revisão integral do 1062 aplicável à coorte e o documento do técnico modular aplicável às turmas. SPA e BaaS não recebem atribuição oficial automática com base em uma matriz sem ementas. Os códigos ficam na documentação docente; o aluno escolhe o percurso indicado pelo professor.

## Cobertura comprovável do plano 612

| Requisito | Onde foi trabalhado | Evidência proposta ao aluno |
| --- | --- | --- |
| Requisições assíncronas/AJAX | Capítulo 2 | Atualizar o aviso sem recarregar o documento, incluindo falha e recuperação |
| APIs públicas | MVC 6 | Consultar CEP, validar resposta e distinguir teste controlado de chamada real |
| Criação/exposição de serviços; REST | Capítulo 2; MVC 2 e 5 | Endereços HTTP do atendimento e catálogo, métodos, respostas e acesso público/protegido |
| WSDL/SOAP e XML | MVC 8 | Servidor local separado, cliente real, requisição/resposta XML, indisponibilidade e recuperação |
| JSON | Capítulo 2; MVC 2, 5 e 8 | Comparar estruturas públicas e consumidores |
| MVC | MVC 2–5 | Percorrer rota, controller, model/regra e view |
| ORM | MVC 3 e 5 | Registro persistente, casts, relacionamento produto/categoria |
| URL e roteamento | MVC 2, 4–6 | Endereços nomeados e parâmetros validados |
| Templates | MVC 2–9 | Blade, layout, seções e escape |
| Scaffolding | MVC 2 e 6 | Inspecionar geração Artisan e gerar EnderecoController antes de completá-lo |
| Formulários/validação | MVC 4 e 5 | Entrada inválida preserva valor salvo; vazio/zero têm sentidos distintos |
| Autenticação/autorização | MVC 4 e 5 | Sessão, papel de operador, recusa de leitura/escrita indevida |
| Internacionalização | MVC 9 | Mesma informação em português/inglês em uma tela; API anterior preservada |
| Segurança | Transversal | CSRF, escape, credenciais fora do ZIP, consultas preparadas, acesso mínimo e proteção de dados |
| Recursos móveis | MVC 7 | Consulta e compartilhamento com detecção de suporte e alternativa |

Essa tabela relaciona tópicos, sem declarar a solução REST completa em todas as restrições arquiteturais ou uma auditoria de segurança de produção. SOAP não é intrinsecamente stateful; a aula esclarece o vocabulário em vez de reproduzir essa associação como regra absoluta.

## Carga horária e escolha docente

| Bloco | MVC/serviços | SPA | BaaS |
| --- | ---: | ---: | ---: |
| Capítulo 1 + TypeScript Essencial + Capítulo 2, já publicados | 42 | 42 | 42 |
| Ponte e escolha do percurso | 2 | 2 | 2 |
| Etapas específicas | 70 | 66 | 80 |
| Entrega, revisão e avaliação | 8 | 8 | 8 |
| Estimativa do material integral | **122 h-a** | **118 h-a** | **132 h-a** |

São estimativas de estudo, construção, testes, revisão e avaliação, ainda sem piloto de duração com turma. Não são cargas oficiais nem três percursos somados para o mesmo estudante. Não se pode declarar que esse material integral cabe em 80 h-a. A matriz do plano 1062 usa aulas de 50 minutos; carga total do curso em horas não equivale diretamente a essa contagem de aulas.

Para ofertar Web III nas 80 h-a do 612, será necessário fechar o recorte docente: conferir os conhecimentos efetivamente trabalhados em Web I/II, usar diagnóstico para evitar retomadas integrais e definir quais preparações/aprofundamentos terão outra alocação real. Não deslocar atividades obrigatórias para uma categoria informal apenas para fazer a soma caber. O TypeScript Essencial é uma escolha pedagógica do módulo; não há comprovação de que suas 24 h-a sejam requisito textual do 612. A definição de carga detalhada e distribuição por turma permanece aberta.

## Continuidade e navegação

- Uma ponte comum parte da entrega final do Capítulo 2. O aluno não refaz Web II.
- Três nomes legíveis: Servidor com Laravel; Interface com React; Serviços com Firebase.
- Cada percurso possui apenas suas aulas no menu, mais ponte e entrega comuns. Menu móvel reutiliza o diálogo existente.
- O objeto de configuração tem nome/situação/minutos. O contrato público tem nome e duas mensagens; não se extrai um prazo de uma frase.
- A classe PHP é AvisoAtendimento, em arquivo próprio: evita a colisão entre Atendimento.php e atendimento.php no Windows.
- Catálogo e imagens anteriores são reutilizados. O endereço antigo do cardápio conduz à apresentação atual nos percursos PHP/React.
- BaaS conserva a aplicação PHP anterior; sua bancada usa arquivos estáticos e emuladores, sem prometer que Hosting execute PHP.
- Rascunho, confirmação de gravação e publicação são ações diferentes. A descrição publicada precisa chegar ao cardápio público.

## Integração mínima com Meu MbB

Os 31 conteúdos novos recebem IDs permanentes: ponte; 9 MVC; 10 SPA; 10 BaaS; entrega. Um conteúdo comum não é duplicado por percurso. Os mecanismos de conta, regras, notas, favoritos, conclusão, pesquisa e retomada continuam os existentes.

Somente catálogo e índice derivado de visitas são ampliados. Os índices pesquisáveis das três páginas anteriores com novos links são atualizados, mantendo IDs, versões e localização. A preferência de percurso usa a chave local `mbb:web3:percurso:v1`; não grava conclusão, não cria visitas artificiais e não sincroniza a escolha como se fosse uma preferência da conta. A retomada da aula efetiva continua no Meu MbB. Acesso direto a outro percurso pela pesquisa não reescreve automaticamente essa preferência.

## Ambientes e custos

| Ambiente | Execução do material | Condição/limite |
| --- | --- | --- |
| VS Code + PHP/Laragon | MVC e servidor de apoio SPA | PHP 8.5; Laragon no Windows ainda requer piloto local. Não exige compra de licença para a prática não comercial permitida |
| Composer + Laravel 13 | MVC | Instalação com lock; dados, credenciais e APP_KEY locais preservados |
| TypeScript + Vite + React | SPA e cliente PHP | Node 24, em continuidade com TypeScript Essencial; build preserva arquivos existentes |
| Firebase CLI/SDK + emuladores | BaaS | Node 22 e Java 21; projeto demo local, sem conta paga ou cloud deploy |
| Storage/Functions em nuvem | Complemento condicionado | Blaze e faturamento vinculado; não presumidos disponíveis aos estudantes |
| FCM/push real | Complemento condicionado | Não emulado nesta bancada; exige inscrição, origem segura e envio/recebimento verificados |
| Notificação local | Experiência opcional de consentimento | Não é FCM; depende do navegador/contexto e não bloqueia consulta |
| IA | Integração controlada executável | Padrão devolve texto controlado explicitamente identificado; Ollama real é opcional e não homologado |

Fontes oficiais verificadas em 28/10/2026:

- <https://laragon.org/pricing>: modalidade não comercial sem licença paga, com lembrete e sem atualização automática; não confundir com licença comercial.
- <https://laravel.com/docs/13.x/deployment>: ambiente e extensões; a exigência PHP ^8.5 também está no lock/kit do curso.
- <https://vite.dev/guide/build.html>: geração do cliente; configurações do kit usam emptyOutDir false.
- <https://firebase.google.com/docs/storage/faqs-storage-changes-announced-sept-2024>: exigência Blaze para Cloud Storage em vigor a partir de 03/02/2026.
- <https://firebase.google.com/docs/functions/get-started>: emulação e implantação com requisitos diferentes; implantação exige Blaze.
- <https://firebase.google.com/docs/emulator-suite>: escopo da suíte local.
- <https://viacep.com.br/>: formato, retorno, entrada inválida e uso não massivo.
- <https://docs.ollama.com/api/generate>: contrato opcional do provedor; consulta documental não comprova execução do modelo.

## Evidências executadas e revisão ainda necessária

Checkpoint técnico remoto 1b805e9d: workflow de percursos 40679361221 aprovado, incluindo PHP 8.5.12, Laravel, 5 testes React, regras em emuladores, Functions/integrações e 29 reconstruções. Essa evidência precede as últimas correções de nomes portáveis, descrição do catálogo, notificação local e integração editorial; elas exigem nova execução de CI.

Executado localmente nesta revisão: 29 builds/reconstruções; auditoria das 31 páginas/29 ZIPs; comparação dos arquivos exibidos com os distribuídos; 2 testes do contrato TypeScript real do Capítulo 2; 2 testes DOM para chegada da descrição publicada e tratamento da foto; testes existentes de estudo/conteúdo (nova execução após atualização dos índices); menu móvel com foco e Escape, largura útil 375 px sem overflow global na página observada. A primeira invocação isolada do teste de contrato faltou o argumento do módulo compilado: preparação corrigida e os dois testes passaram. Uma fixture temporária de prévia foi removida da varredura pública de produção; não representa falha do portal.

Não executados como se fossem provas equivalentes: Windows/Laragon, aparelho físico, leitor de tela, conta real do Meu MbB, aplicação BaaS completa em navegador com os emuladores remotos, cloud deploy, push FCM real, modelo Ollama real e piloto de duração/aprendizagem com alunos. A aplicação PHP não foi servida por esta hospedagem estática.

Antes de integração/publicação: repetir o CI no commit editorial final; conferir a ligação do Capítulo 2; concluir revisão visual das páginas representativas e a leitura crítica do encadeamento. Falha material precisa ser corrigida, sem exigir novamente aprovação para os ajustes já autorizados.


## Atualização após o primeiro CI editorial

O commit remoto 95f1d11b preservou os 31 conteúdos e 29 ZIPs. A primeira validação editorial encontrou duas falhas materiais: índice derivado da nova preparação BaaS desatualizado e cliente SOAP sem conexão com o endereço do servidor. O endereço do contrato era 127.0.0.1 e o comando usava localhost, que pode resolver para IPv6. A instrução e o teste foram alinhados para 127.0.0.1. A validação passa também a compilar views e abrir as páginas Laravel/API por HTTP nas etapas iniciais, além de executar o cliente SOAP de verdade.

A principal estava em 946ac0838eaa617669fc8a895d4e72e0391c01cb, com atualizações de Banco de Dados, React Native e Arduino. Elas foram incorporadas à branch, sem reescrita desses módulos. A comparação de preservação do catálogo passa a usar essa base mais recente. A divergência do índice novo não foi atribuída às alterações de outros autores; o índice foi regenerado a partir do conteúdo integrado.

As estimativas de horas das etapas novas ficam no planejamento docente, sem apresentá-las no cabeçalho do aluno como carga aprovada. A matriz de cada turma continua pendente de fechamento.


## Dependências e progressão dos serviços

A auditoria inicial do kit BaaS sinalizou 17 pacotes na cadeia de dependências (11 de severidade alta e 6 moderada). O SDK foi atualizado para 12.19.0 e a CLI para 15.34.1, mantendo a API didática. Foram removidas as antigas substituições de núcleo Firebase; as travas agora aplicam versões corrigidas de @grpc/grpc-js 1.14.6, @opentelemetry/core 2.8.0 e uuid 11.1.1 (as duas últimas no ferramental CLI). Não foi usado audit fix --force nem downgrade automático sugerido pelo relatório.

Instalações limpas e verificação da CLI foram executadas com Node 22.23.4. A compatibilidade dos caminhos utilizados será validada novamente nos emuladores do CI; o escopo é a bancada ensinada, não toda funcionalidade da CLI em produção. Os quatro relatórios npm (SPA, Functions, raiz BaaS e cliente BaaS) retornaram zero alertas nesta execução; contagens e hashes em docs/validacoes/web3-20261028/dependencias.json. Avisos de pacote descontinuado não foram apresentados como vulnerabilidades comprovadas quando a auditoria não os apontou.

As configurações e regras também passaram a acompanhar a progressão: atendimento inicialmente, Storage/produtos na etapa 6 e inscrições na etapa 9. Testes das regras intermediárias foram acrescentados para as etapas 3 e 6. A descrição pública exige de 10 a 400 caracteres e texto não vazio no serviço, além da validação do formulário.

Na prévia, a abertura do código e a leitura em quadro de largura útil 375 px foram observadas sem overflow global. A ferramenta de navegador não confirmou os bytes do clipboard nem a conclusão do download pelo controle de evento; esses dois ensaios não são declarados aprovados por equivalência. Os ZIPs foram auditados no sistema de arquivos e a disponibilidade HTTPS precisa ser conferida na publicação. Nenhuma conta real foi acessada para contornar esses limites.


A auditoria Composer acrescentada ao CI identificou o alerta moderado CVE-2026-45070 em symfony/mime 8.1.7, divulgado em 28/10/2026. A trava foi atualizada pontualmente para 8.1.10 com metadados oficiais de distribuição do Packagist, sem mudanças de requisitos ou conflitos. A instalação, a auditoria e os testes nativos serão repetidos antes da publicação. O alerta não foi ignorado nem silenciado.


## Integração final e limites da validação

A main foi atualizada novamente para ec9d3fb1074b30071be4e95ea067912a9d00dc05 (Banco de Dados e conectividade). As alterações foram incorporadas sem conflito; catálogo e índice de visitas foram regenerados a partir do conjunto. A auditoria de preservação compara os mecanismos e registros anteriores com essa base. O material do Web III contém 31 páginas (ponte, 29 etapas específicas e entrega) e 29 ZIPs; não são 31 capítulos ou três percursos obrigatórios para o mesmo aluno.

O CI do commit 096c433e61d4dd8aaf5b4b2d4acafc19ebccd869 confirmou instalação, auditoria sem alertas e testes do Laravel depois da correção do Mime. A integração completa com a main atualizada requer sua própria execução; seu resultado ficará registrado no PR 195, com links dos checks e commit efetivamente integrado. Não se usa um resultado anterior como prova do novo conjunto.

Na prévia foram observadas as entradas React/Firebase e o resultado da pesquisa pública que abre a aula React em seu título. Continuam fora do escopo executado: piloto presencial de duração, Windows/Laragon, leitor de tela, aparelho físico, sincronização com conta real do Meu MbB, notificações do sistema, FCM em nuvem, deploy Firebase e modelo Ollama real. Os testes de conta são automatizados e não equivalem a entrar em uma conta real. A primeira versão integral permanece identificada como em desenvolvimento.
