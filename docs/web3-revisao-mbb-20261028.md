# Revisão circular, em espiral e por triangulação do Web III — 28/10/2026

Base: d5d0f0e497b01a86b6223241d3f29cf096cce28e. Revisão em branch isolada, autorizada pelo professor para corrigir, testar e publicar sem exigir que ele domine Laravel.

## Parecer pedagógico

A primeira versão tinha continuidade narrativa e código executável, mas ainda não era suficiente para orientar com segurança um iniciante no início do Laravel. Instruções genéricas sobre acrescentar arquivos, termos introduzidos depressa e preparo implícito podiam deixar a pessoa sem uma próxima ação clara. A exportação ausente dos emuladores também quebrava a continuidade entre imagem e publicação.

A revisão confronta três evidências: o que a aula pede, o que o pacote contém e o que os ensaios executam. A espiral retorna ao contrato de três campos, à mesma origem dos dados, à distinção entre alteração visual e persistência e aos caminhos anteriores do Café. Não reinicia Web II nem obriga o aluno a construir os três percursos.

Os textos dos 31 conteúdos foram lidos e comparados com os arquivos. As mudanças abaixo tratam das lacunas encontradas; o que já estava coerente foi preservado. Esse parecer é uma avaliação técnica e editorial, não uma observação de aprendizagem com turma real nem medição de tempo.

## Conferência do conjunto

| Etapa | Aula | Decisão da revisão |
| --- | --- | --- |
| ponte | O botão consulta. Quem informa o aviso? | Preservada a escolha de um único percurso após o Capítulo 2. |
| m1 | O aviso ganha um objeto | Preservada a construção pequena da classe e a concordância entre as duas telas; preparo de arquivos tornou-se explícito. |
| m2 | As mesmas telas, outra organização | Reescrita a entrada no Laravel: ambiente conferível, primeiro resultado, experimento Blade/JSON, depois rota/controller/view e leitura dos símbolos. |
| m3 | O prazo precisa permanecer | Explicitados caminho SQLite, correspondência dos nomes, model/casts e recusa esperada no script local. |
| m4 | Quem pode mudar o aviso? | Explicitada incorporação dos arquivos de autorização; min/max corrigidos para corresponder ao FormRequest; diferenciadas recusas HTML e servidor. |
| m5 | O cardápio tem relações | Preservados importação idempotente, preço em centavos, relacionamento e atualização pública; comparação de arquivos acessível antes da prática. |
| m6 | Uma consulta atravessa serviços | Corrigida a ordem: gerar/completar controller e acrescentar rota antes de abrir o endereço; explicada a dependência fornecida pelo Laravel. |
| m7 | O Café cabe na rotina do celular | Preservadas consulta e alternativa ao compartilhamento; não equivale a teste em aparelho físico. |
| m8 | Outro programa pede o mesmo aviso | Preservado contrato SOAP; ensaio nativo ampliado para indisponibilidade e recuperação, além da consulta bem-sucedida. |
| m9 | O aviso muda de idioma | Preservados idioma por tela, contrato público e revisão do conjunto. |
| s1 | Uma área do balcão ganha componentes | Explicitadas desestruturação das props, preservação/retirada do main.ts e entrada main.tsx; removidos deixam de ficar ocultos na passagem. |
| s2 | Abrir uma orientação muda o estado | Preservada a conquista de abrir/fechar orientação antes de consumir serviço. |
| s3 | O componente consulta o atendimento | Preservados contrato do Capítulo 2, espera, falha e recuperação; sem refazer a aula de fetch. |
| s4 | Os produtos chegam à interface | Explicitada troca de origem para SQLite; orientada leitura somente das funções necessárias do apoio. |
| s5 | Encontrar sem perder a lista | Preservados filtro combinado, recuperação da lista e limite quanto a acentos. |
| s6 | O balcão ganha caminhos | Preservados hash, histórico e foco sem exigir biblioteca nova. |
| s7 | Entrar não basta para alterar | Preservadas identidade local, confirmação no servidor e distinção de Meu MbB. |
| s8 | A equipe informa o prazo | Preservados formulário controlado, vazio/zero, confirmação de escrita e validação no servidor. |
| s9 | Rascunho não é publicação | Preservados rascunho/publicação, cancelamento e estabilidade do editor. |
| s10 | Outra pasta também precisa funcionar | Repetidos explicitamente os comandos necessários à reconstrução limpa, sem depender de adivinhar a aula anterior. |
| b1 | A mesma informação em outro serviço | Acrescentado início/exportação/retomada e distinção entre dados iniciais e sessão guardada. |
| b2 | Uma identidade para a equipe | Entrada mantém a identidade retomada, sem exigir recriação a cada aula. |
| b3 | A regra fica no serviço | Testes isolados e retorno à bancada guardada ficam distintos. |
| b4 | A gravação precisa ser confirmada | Corrigida a explicação de setDoc para updateDoc, conforme o arquivo realmente utilizado. |
| b5 | O balcão acompanha a mudança | Explicada recuperação da sessão exportada e limitação de interrupção forçada. |
| b6 | A foto tem um lugar e uma referência | Storage entra preservando a sessão anterior; foto e descrição são conferidas no cardápio. |
| b7 | Os arquivos não levam os serviços junto | Separadas cópia limpa de conferência e pasta de trabalho a retomar para Functions. |
| b8 | Uma operação no ambiente confiável | Functions parte do aviso, identidade e produto retomados; build e runtime preservados. |
| b9 | Aviso local não é push remoto | Mantida distinção entre notificação local e push real; ensaio real continua condicionado. |
| b10 | Um rascunho ainda pede revisão | Conferência explícita do produto e imagem antes de publicar; alternativa para cópia limpa sem exportação. |
| entrega | O Café pode ser conferido por outra pessoa | Acrescentada alternativa de conferência individual quando não houver colega. |

## Mudanças transversais mínimas

- O preparo de cada etapa fica em um detalhe fechado antes da prática, com download, ponto de partida e lista concreta de arquivos modificados e retirados. A narrativa continua aberta e não é substituída por uma lista de bastidores.
- As âncoras publicadas foram transferidas para os fontes com IDs explícitos. Acrescentar um subtítulo não renumera os destinos anteriores. IDs, versões e localização das unidades Meu MbB permanecem os mesmos; somente o texto pesquisável das aulas revisadas pode mudar.
- O início BaaS exporta dados em encerramento regular; retomar importa a pasta. O .gitignore exclui dados-emuladores, dependências, saídas geradas e configurações locais. A exportação não faz parte dos ZIPs.
- A referência em pasta limpa e a solução do aluno têm papéis diferentes. Bancos, credenciais, APP_KEY e personalizações não são substituídos pelo download.

## Ensaios e limites

Os testes locais de catálogo, navegação, conteúdo e preservação são executados antes do push. Uma tentativa de executar indistintamente todos os arquivos de teste locais encontrou suites que exigem emuladores ou compilação/variáveis específicas; isso foi tratado como preparo incorreto do comando, não como regressão aprovada. Essas suites têm seus contextos no CI.

O CI inclui reconstrução das 29 etapas, auditorias Composer/npm, PHPUnit, integração HTTP e Blade, SOAP com falha e recuperação, React e regras/integrações Firebase. A nova experiência de mudar a view mantendo a API é conferida em m2. Um ensaio adicional faz b3 → b6 → b10 em sessões reais dos emuladores, exportando e importando o prazo, a identidade/claim, a descrição e os bytes de uma imagem. Ele usa a variante emulators:exec com as mesmas flags dos comandos ensinados; não equivale a executar manualmente Ctrl+C no Windows.

Os resultados finais e a publicação são registrados no PR desta revisão. Não atribuir aprovação ao novo head com base apenas nos testes da entrega anterior.

Continuam sem execução nesta revisão: instalação gráfica Windows/Laragon, leitor de tela, aparelho físico, conta real do Meu MbB, FCM/nuvem e modelo IA real. A revisão da navegação e legibilidade em navegador é distinta de uma aplicação presencial com estudantes. A obrigatoriedade de serviços pagos não foi acrescentada.

## Currículo e carga

Não há base nova para declarar equivalência oficial. O plano 612 confirmado pelo professor continua a referência comprovada; integral do 1062 e plano modular aplicável continuam pendentes. As estimativas 122/118/132 h-a descrevem o material e não foram reduzidas artificialmente para 80 h-a. A revisão editorial não valida duração de aula. O fechamento por turma dependerá das ementas aplicáveis e dos conhecimentos realmente trabalhados, sem exigir que o professor conheça Laravel para avaliar a redação técnica.

## Fontes primárias conferidas

- https://laravel.com/docs/13.x/installation
- https://laravel.com/docs/13.x/routing
- https://laragon.org/docs/operations
- https://laragon.org/docs/multi-version
- https://laragon.org/docs/quick-add
- https://firebase.google.com/docs/emulator-suite/install_and_configure
- https://firebase.google.com/docs/emulator-suite/connect_firestore

A base para publicação é uma sequência revisada e tecnicamente testada. O rótulo em desenvolvimento permanece: não significa que o aluno deva adivinhar preparos ausentes, nem certifica equivalência curricular ou implantação de serviços em nuvem.
