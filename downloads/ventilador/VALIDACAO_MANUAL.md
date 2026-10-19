# Validação manual — aplicativo de bancada 0.3-experimental/code 3

Importação, reexportação e compilação MIT concluídas. APK posteriormente recebido do professor e inspecionado: integridade e assinaturas v1/v2/v3 válidas; título/versão conferidos. Detalhes em `APK_VERIFICADO.md`. Instalação Android, Companion e ensaios físicos continuam pendentes.

## 1. Importar no MIT — procedimento reproduzível, sem hardware

1. Acesse https://ai2.appinventor.mit.edu/ no seu navegador e entre na sua conta. Não envie senha ou códigos de acesso na conversa.
2. Use Projects → Import project (.aia) from my computer e selecione `VentiladorMBB.aia` desta revisão. Se já existir um projeto com o mesmo nome, preserve-o: faça uma cópia local do novo arquivo com outro nome, por exemplo VentiladorMBB03.aia, e importe essa cópia como um projeto novo. Não sobrescreva o único original.
3. No Designer, confira dez componentes: Titulo, Conectar, Estado, Velocidade1, Velocidade2, Velocidade3, Desligar, Aviso, BluetoothClient1 e Clock1. Screen1 é a tela, contada à parte.
4. Em Blocks, confira dez eventos: Initialize, BeforePicking, AfterPicking, quatro Click, Timer, PermissionDenied e ErrorOccurred. Confira cinco globais: recebido, conectadoAntes, aguardando, esperado e prazoConfirmacao. Confira os cinco procedimentos DefinirComandos, LimparEspera, EncerrarEnlace, EnviarComando e ProcessarResposta. Examine blocos desconhecidos, desabilitados, avisos e conexões soltas. Confira “Ventilador MbB” no título da tela, AppName e legenda Titulo.
5. Exporte uma cópia `.aia` pelo próprio editor e capturas reais de Designer/Blocks. Registre data e versão do editor. **Importar não significa compilar nem testar Android.**

## 2. Companion e APK — Android, inicialmente sem circuito

O APK `VentiladorMBB03.apk` está disponível ao lado do AIA. Sua inspeção está em `APK_VERIFICADO.md`. Para gerar outro, use Compilar → Android App (.apk) no MIT. Não é necessário repetir a compilação para testar o arquivo recebido. A compilação e as assinaturas válidas não comprovam a execução no Android.

1. No Companion, observe tela, rolagem, textos e comandos inicialmente desabilitados. A visualização da tela não comprova Bluetooth nem o comportamento do APK.
2. Pelo menu Build, gere um APK. Registre sucesso ou a mensagem exata de erro. Uma compilação concluída não comprova instalação nem comunicação.
3. Instale o APK no Android de teste e registre modelo, versão Android e versão do Companion quando usado. Teste Bluetooth desligado e permissão negada. A lista não deve manter dispositivos de uma tentativa anterior quando o Bluetooth ficar indisponível. Registre o comportamento observado ao cancelar a seleção.

## 3. Bancada — somente baixa tensão identificada e aprovada

Não conecte ventilador, relés ou rede elétrica. Antes de usar o HC-05, identifique variante, documentação, alimentação, adaptação de níveis, pareamento e baud rate. Use os três LEDs com resistores conforme README; docente confere a montagem desenergizada. **O app com heartbeat exige o checkpoint 3. No checkpoint 2, `?` é inválido e apaga os LEDs.** Não modifique o programa 2 para usá-lo com este app.

1. Grave `03_bancada_supervisionada` no Uno e conecte ao HC-05 aprovado. Ao conectar o app, ele envia texto `0`. As velocidades devem aguardar a resposta `0`; “Desligar” permanece disponível. Reconectar nunca restaura a velocidade anterior.
2. Teste 1, 2, 3 e 0; depois as 12 trocas entre estados diferentes e repetições. Um LED por vez; 0 apaga todos. Durante cada espera de confirmação, velocidades ficam bloqueadas. “Desligar” pode interromper a espera e aguardar `0`. Sem responder, repita Desligar a cada 400–500 ms: o prazo da primeira espera por `0` não deve ser renovado. Simule resposta atrasada da velocidade anterior: ela não deve liberar os botões nem renovar o prazo. Teste também erro durante reenvio de `0`.
3. Em uma bancada de teste preparada pelo docente, simule ausência da resposta inicial e de uma resposta de velocidade. Não solte ou mova fios com alimentação ligada: desligue a bancada antes de reconfigurar. Outra opção é um dispositivo SPP de teste que registre os comandos e suprima deliberadamente a resposta. O app deve encerrar o enlace no primeiro Timer executado após o prazo; não deve exibir confirmação de um byte tardio. Registre o atraso observado, sem presumir exatamente 2 s no Android.
4. No checkpoint 3, interrompa o envio de `?` por um cliente SPP de teste. Os LEDs devem apagar após o prazo local de bancada; retomar apenas `?` não os religa. Fechar o app/mandá-lo ao fundo é um teste distinto: observe se o Android realmente interrompeu a supervisão.
5. Teste reset do Uno, perda de alimentação do módulo, resposta inválida e reconexão. A alimentação deve ser removida antes de modificar o circuito. Registre mensagens, LEDs observados e necessidade de novo comando.

**Limites:** `?` não gera eco nos sketches atuais. Sem comando pendente, o app não detecta por si só uma falha exclusiva no retorno Arduino → Android. O protocolo de um caractere não tem autenticação ou identificador de transação; uma resposta antiga igual pode parecer atual. O prazo do app usa SystemTime (relógio ajustável) e depende do agendamento do Timer. Esses recursos não são proteções de potência.

## 4. Prévia — computador e celular

Abra o percurso no site em `pages/arduino-ventilador-bluetooth.html`. A exportação portátil, quando fornecida separadamente, reúne as aulas de apoio ao final. Faça os testes visuais tanto no computador como no celular.

1. Confira em computador (por exemplo, 1366 × 768), celular em retrato (360 e 390 px de largura), paisagem e “site para computador” no celular. Registre navegador, sistema, dimensões e zoom; as dimensões sugeridas são alvos, não resultados já obtidos.
2. Percorra as oito etapas. Abra/feche o menu por botão, fundo e Escape; selecione etapas e confira foco, rolagem, legibilidade e ausência de conteúdo sob os menus. Verifique eventual rolagem lateral: blocos de código podem rolar internamente, a página inteira não deve precisar disso.
3. Abra cada aula de apoio e retorne à etapa de origem. No portátil, as aulas estão ao final; na prévia integrada, pertencem aos módulos. Na integrada, teste também voltar/avançar e pesquisa pública por “HC-05” e “prazoConfirmacao”. Conta/Firebase não fazem parte da prévia.
4. Amplie as figuras pelo visualizador; confira legenda, legibilidade e fechamento. Distinga os seis SVG conceituais das duas capturas reais do MIT (Designer e recorte do evento Velocidade1). Nenhuma captura é execução Android.
5. Marque/desmarque checklists e recarregue. Confira o estado salvo; em arquivo local, a persistência pode variar conforme o navegador. Os checklists não autorizam potência.
6. No simulador, conecte, teste 0–3 e interrompa a supervisão: LEDs simulados devem apagar. Confira o feedback das perguntas e do modelo de relé.
7. Copie os três códigos e cole em editor de texto; compare com cada `.ino`. Baixe `.ino`, `.aia`, `.bky` e `.scm` e confira nomes/conteúdo. Se a cópia ou download falhar no celular, registre a falha e use os arquivos extraídos do ZIP.

## Registro mínimo

Para cada teste: data; revisão/arquivo; ambiente; passos; resultado esperado; resultado observado; aprovado/falhou/não realizado; evidência e observação. Envie erros e capturas sem credenciais ou dados privados. Mantenha separados importação, geração de APK, instalação, Companion, comunicação física e inspeção profissional.

## 5. Encerrar as pendências desta entrega

| Verificação | Estado nesta entrega | Evidência necessária para concluir |
|---|---|---|
| APK | Recebido do professor; integridade, versão e assinaturas verificadas | Concluído para o arquivo de hash indicado em APK_VERIFICADO.md |
| Android/Companion | Não realizado | Modelo, Android, permissões, mensagens e resultados dos casos das seções 2 e 3 |
| HC-05 e LEDs | Não realizado fisicamente | Identificação da variante/interface, conferência desenergizada e resultados de bancada |
| Site em desktop/celular | Não realizado em navegador real | Resultados dos sete itens da seção 4, incluindo ampliação e downloads |
| Potência 220 V | Etapa não liberada | Dossiê do equipamento e análise/execução profissional específica |

No teste de Desligar repetido, registre também cliques rápidos: cada reenvio pode produzir outro retorno “0”. Como o app lê um byte por ciclo, respostas podem se acumular e uma resposta antiga igual não é distinguida de uma atual. Não interprete a confirmação lógica como prova de um contato aberto ou do motor parado. Não altere o protocolo ou os sketches por tentativa para ocultar esse limite.
