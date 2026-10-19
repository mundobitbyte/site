# Ventilador MbB — roteiro para conferir o funcionamento

Faça uma parte de cada vez. Registre o que esperava e o que observou antes de mudar código ou fios. Os testes com componentes deste roteiro usam somente LEDs, sem relés nem ventilador conectados.

## 1. Confira o site no computador e no celular

Abra `https://www.mundobitbyte.com.br/pages/arduino-ventilador-bluetooth.html`.

1. Percorra as oito etapas. Abra e feche o menu, escolha uma etapa e confira se consegue ler o texto sem ficar escondido pelos menus.
2. Abra as quatro aulas de apoio e retorne à etapa de origem. Confira também Voltar/Avançar do navegador e a pesquisa por “HC-05” e “prazoConfirmacao”.
3. Amplie figuras e tabelas que precisem de leitura maior. Confira a legenda e o fechamento. As imagens do editor mostram a construção do app, sem comprovar sua execução no Android.
4. Marque e desmarque um item de estudo. Recarregue e confira se a marcação foi mantida no mesmo navegador.
5. No simulador, conecte e teste 1, 2, 3 e 0. Somente um LED deve acender; 0 apaga todos. Pare os sinais de presença e espere o LED apagar. A simulação não usa Bluetooth nem controla equipamento.
6. Copie os três códigos e compare com os arquivos `.ino` baixados. Baixe o APK e o AIA e confira os nomes dos arquivos.
7. No celular, repita a navegação em pé, deitado e com “site para computador” ativado. A página inteira não deve exigir rolagem horizontal; um bloco de código pode ter sua própria rolagem.

Há testes automatizados de navegação e leitura em larguras de computador e celular. Ainda é necessário conferir o navegador e o aparelho usados na atividade, principalmente paisagem e modo para computador.

## 2. Teste o APK sem circuito: o que é possível verificar

Instale `VentiladorMBB03.apk`, versão 0.3-experimental/código 3. Anote modelo do celular e versão do Android.

1. Abra o app e confira título, textos, rolagem e comandos inicialmente bloqueados.
2. Toque em Conectar com o Bluetooth desligado e registre a mensagem.
3. Se o Android pedir permissão, teste a recusa e registre o comportamento. Para voltar ao teste com permissão, use as configurações do aplicativo no Android ou uma nova tentativa permitida pelo sistema.
4. Se você autorizar o Bluetooth durante a primeira tentativa, toque novamente em Conectar para atualizar a lista, se necessário. A autorização pode interromper aquela primeira abertura.
5. Se o HC-05 não estiver previamente pareado, ele não aparecerá na lista de aparelhos pareados do app.

**Sem o Arduino respondendo, as velocidades 1, 2 e 3 não serão liberadas.** O app envia `0` e espera a confirmação `0`. Sem essa resposta, encerra a tentativa e mantém os comandos bloqueados. Isso é diferente de um botão que não recebeu o toque por defeito. Para testar a seleção sem componentes, use o simulador do site.

Registre separadamente se a lista apenas fechou, se apareceu uma mensagem de desconexão ou se o aplicativo inteiro fechou e voltou à tela inicial do celular. Só o último caso é um fechamento do app.

## 3. Confira Uno e LEDs pelo USB

Antes de montar, retire toda a alimentação. Use os LEDs e resistores conforme `README.md` e peça a conferência do professor.

1. Abra a pasta `01_serial_leds` na IDE Arduino, selecione Uno e grave o programa.
2. Abra o Monitor Serial a 9600 bit/s.
3. Envie 1, 2, 3 e 0 como texto. Confira um LED por vez e todos apagados em 0. Compare com a resposta recebida.
4. Envie X. Os LEDs devem apagar e o programa deve responder 0.
5. Reinicie o Uno: ele deve começar com todos os LEDs apagados.

Se isso falhar, resolva a montagem ou a gravação antes de acrescentar Bluetooth.

## 4. Confira HC-05 e aplicativo juntos

O professor precisa identificar a placa HC-05, conferir alimentação, níveis dos sinais e comunicação serial a 9600 bit/s no modo de dados. Retire a alimentação antes de montar ou mudar fios. Não conecte motor ou relés.

1. Grave `03_bancada_supervisionada.ino`, o programa 3. O aplicativo envia `?` periodicamente; o programa 2 não serve para esse teste.
2. Pareie o HC-05 nas configurações Bluetooth do Android. Abra o app, toque em Conectar e escolha esse módulo.
3. Confira o início em 0, com LEDs apagados. As velocidades só devem ser liberadas após a resposta inicial 0; enquanto espera, Desligar permanece disponível.
4. Teste os quatro comandos, as 12 trocas entre escolhas diferentes e as quatro repetições. Compare mensagem recebida e LED observado. Um LED por vez; 0 apaga todos.
5. Desligue o Bluetooth do celular e observe a parada dos LEDs após cerca de dois segundos sem mensagens. O app pode reconhecer a perda em outro instante, conforme o Android.
6. Reconecte: comece em 0, sem recuperar automaticamente a velocidade anterior.
7. Faça testes separados com app em segundo plano e tela bloqueada. Observe se o Android interrompeu as mensagens; não presuma que isso ocorreu só porque a tela apagou.

Se aparecer desconexão após a tentativa, confira primeiro qual programa foi gravado, TX/RX, configuração serial e se há resposta inicial 0. Não libere os botões retirando essa confirmação.

## 5. Teste respostas ausentes ou atrasadas com o professor

Esses casos exigem um teste preparado que controle o envio das respostas. Pode ser usado um dispositivo serial Bluetooth de teste que registre os comandos e deixe de responder deliberadamente. Não improvise soltando fios com alimentação ligada.

| Situação criada no teste | O que observar |
| --- | --- |
| A conexão abre, mas a resposta inicial 0 não chega. | Velocidades continuam bloqueadas; o app encerra a conexão no primeiro evento do relógio executado após o prazo. |
| A resposta de uma velocidade não chega. | O app não confirma aquela escolha; mantém a espera até o prazo e depois encerra a conexão. |
| Enquanto espera uma velocidade, o usuário pede Desligar. | O pedido 0 passa a ter prioridade e seu próprio prazo. |
| Já esperando 0, o usuário repete Desligar a cada 400–500 ms. | Reenviar 0 não renova o prazo original dessa espera. |
| Chega uma resposta de velocidade anterior enquanto o app espera 0. | A resposta não libera velocidades nem renova o prazo. |
| A resposta chega depois do prazo. | Não deve liberar os comandos daquela espera vencida. |
| Ocorre um erro de envio. | Comandos ficam bloqueados e a explicação da falha deve permanecer. |
| Pelo cliente de teste, os sinais ? param e depois retornam sozinhos. | O programa 3 apaga os LEDs; receber somente ? novamente não os reacende. |

O prazo do app depende do evento Timer e do relógio do Android. Anote o atraso observado; não exija que a tela reaja em exatamente dois segundos.

O protocolo não identifica cada pedido individualmente: uma resposta antiga igual pode parecer atual. Cliques rápidos em Desligar podem acumular respostas, pois o app lê um caractere por ciclo. O sinal ? não recebe eco; sem comando esperando confirmação, ele não detecta sozinho uma falha exclusiva do retorno Arduino → celular. Não interprete esses recursos como proteção de um motor.

## 6. Se for estudar ou modificar os blocos

Importe `VentiladorMBB.aia` em um projeto separado. Confira dez componentes, dez eventos, cinco variáveis globais e cinco procedimentos. Siga a aula do site para entender seus nomes e funções. Preserve o projeto original.

O Companion permite testar durante a construção. Registre esse resultado separadamente do APK instalado. Se modificar o projeto, compile seu novo APK pelo menu Build e repita os testes relevantes. Não é necessário recompilar o APK fornecido apenas para testá-lo.

## 7. Anote o resultado sem misturar os ambientes

Para cada teste, registre data, arquivos usados, placa, programa, HC-05, alimentação, celular, Android, passos, resultado esperado e observado. Marque aprovado, falhou ou não realizado. Capturas e mensagens devem omitir senhas e dados privados.

A identificação, a integridade e as assinaturas do APK disponibilizado já foram conferidas. A conexão física e o funcionamento completo precisam de resultados com o Android e os componentes reais. A etapa do ventilador de 220 V continua dependendo de projeto, inspeções e testes profissionais específicos.
