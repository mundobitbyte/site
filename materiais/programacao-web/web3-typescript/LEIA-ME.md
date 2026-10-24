# Café Aurora — TypeScript Essencial

Continue no VS Code. Este projeto permite estudar TypeScript com os dados do
Café Aurora e observar os resultados no navegador. Guarde-o em uma pasta de
estudos; a aplicação PHP continua na própria pasta.

TypeScript acrescenta ao JavaScript recursos para descrever e verificar os
tipos durante o desenvolvimento. Essa conferência ajuda quando o programa
passa a compartilhar dados entre variáveis, funções e arquivos. Não elimina
testes de comportamento nem comprova o formato de dados recebidos de fora.

O prazo inicial é de 35 minutos, retomando o aviso da experiência da aba aberta
no Capítulo 1. É uma estimativa informada pela equipe, representada no código;
o exemplo não calcula uma previsão nem consulta a aplicação PHP. Se sua cópia
anterior tem outro prazo, pode guardá-la como está. Este kit adota 35 como
referência para compararmos os resultados.

## Preparar uma vez

1. Extraia o ZIP. No VS Code, use Arquivo → Abrir Pasta e selecione a pasta
   cafe-aurora-typescript, que contém package.json.
2. No explorador lateral, localize src/main.ts: é o arquivo que vamos editar.
3. Use Terminal → Novo Terminal e confira se o caminho é o da pasta do projeto.
4. Confira Node.js 24 e npm, executando um comando por vez:

```sh
node --version
npm --version
```

O primeiro deve começar com v24.; o segundo mostra uma versão do npm. Se algum
não for reconhecido, prepare Node.js 24 com npm e reabra o VS Code. No Windows,
se o PowerShell bloquear npm.ps1, escolha o perfil Prompt de Comando no terminal
integrado. Não é necessário alterar políticas do computador.

Node.js executa as ferramentas deste projeto; npm gerencia a instalação e os
comandos definidos em package.json. Se já estiverem disponíveis no terminal do
Laragon, confira as versões antes de instalar outra cópia.

Instale as dependências com acesso à internet e aguarde terminar:

```sh
npm ci
```

O comando usa as versões registradas em package-lock.json. O kit foi travado em
TypeScript 7.0.2 e Vite 8.3.5. A pasta node_modules contém as ferramentas; seus
arquivos continuam em src. Não é preciso repetir a instalação a cada aula.

Agora inicie a página:

```sh
npm run dev
```

Vite prepara o TypeScript para o navegador e serve a página local. Você escreve
no VS Code e abre o endereço mostrado no terminal, em vez de iniciar Live
Preview neste projeto. Geralmente será http://127.0.0.1:5173/, mas a porta pode
mudar. Use o endereço informado. Ele aponta para o próprio computador; não
publica o exercício na internet. Mantenha esse terminal aberto.

## Primeira alteração: o novo aviso da cozinha

A página começa mostrando o atendimento aberto e o prazo de 35 minutos. true
significa verdadeiro: o atendimento está aberto.

A equipe informa que entraram novos pedidos e o prazo agora é de 45 minutos.
Em src/main.ts, localize `let tempoEstimado: number = 35;` e troque somente 35
por 45. Salve com Ctrl + S e confira os 45 minutos no navegador.

Abra outro terminal na mesma pasta para executar `npm run verificar`. O comando
confere os tipos; terminar sem erros complementa a observação da página. No
tópico 1, mantenha a alteração e experimente escrever "45" entre aspas: o tipo
esperado é number, e a verificação precisa recusar esse texto. Retire as aspas,
salve e verifique novamente. A página pode mostrar os algarismos mesmo quando
há incompatibilidade de tipos: Vite não realiza essa conferência sozinho.

## Retomar ou encerrar

Ao voltar, abra a mesma pasta no VS Code, execute `npm run dev` e abra o endereço
informado. As dependências já instaladas continuam disponíveis. Para parar o
servidor, selecione seu terminal e pressione Ctrl + C. Seus arquivos salvos
permanecem na pasta.

## Tópicos 1 a 11

A pasta src é o lugar da sua edição. Ela começa com o exemplo do tópico 1.
O tópico 1 permite continuar na primeira alteração, sem recolocar o prazo
inicial. Depois, cada tópico fornece um exemplo completo para a situação
narrada, substituindo somente src/main.ts. Salve sua tentativa antes de trocar.
Os arquivos exemplares em
exemplos/01.ts a exemplos/11.ts são referências para comparar ou recuperar,
não doze versões completas do Café.

A saída usa document.body.textContent para mostrar texto sem reconstruir a
interface do projeto PHP. O Vite transforma TypeScript para o navegador, mas
não confere os tipos. Sempre execute `npm run verificar` no segundo terminal.

## Tópico 12

Copie exemplos/12/atendimento.ts para src/atendimento.ts e substitua src/main.ts
pelo conteúdo de exemplos/12/main.ts. Esses dois arquivos passam a trabalhar
juntos. O caminho .js do import se refere ao JavaScript gerado; a ferramenta
localiza o arquivo TypeScript correspondente durante o desenvolvimento.

Depois de alterar um arquivo, salve, observe a página e repita a verificação.
Para gerar uma versão estática, execute `npm run build`. O comando verifica
os tipos antes do build. A pasta dist não executa PHP e não altera o MbB.

## Limites da bancada

Os dados são preparados localmente; ainda não há consulta ao PHP nem conta de
nuvem. Uma anotação de tipo não valida automaticamente uma resposta externa.
Essa validação será trabalhada quando o cliente começar a receber dados.

Nos exemplos de preço, toFixed(2) usa ponto e serve para observar os valores.
A formatação monetária completa pode ser retomada na integração com a interface.

## Exercícios

Use os desafios do tópico 99. Guarde sua solução em uma cópia da bancada ou
salve seus arquivos antes de substituir main.ts. Para cada desafio, confira
o caso normal e uma entrada inadequada. A verificação precisa passar depois
de corrigir o erro provocado intencionalmente.

© 2026 Mundo bit Byte — Ronaldo Lavestein. Uso conforme os direitos do site.
