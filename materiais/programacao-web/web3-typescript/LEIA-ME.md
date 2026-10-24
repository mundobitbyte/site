# Café Aurora — TypeScript Essencial

Esta é uma bancada de estudos do mesmo Café. Ela não substitui a aplicação PHP
nem contém banco, painel, credenciais ou serviços de nuvem. Guarde-a em outra
pasta; a entrega do Web II continua intacta.

## Preparar uma vez

Use Node.js 24 e npm. No terminal da pasta que contém package.json:

```sh
node --version
npm --version
npm ci
npm run dev
```

Abra o endereço local mostrado pelo Vite no terminal. Mantenha esse terminal
aberto. Abra outro terminal na mesma pasta para executar `npm run verificar`.
O kit foi travado em TypeScript 7.0.2 e Vite 8.3.5; use package-lock.json com
`npm ci`, sem atualizar dependências durante a prática.

## Tópicos 1 a 11

A pasta src é o lugar da sua edição. Ela começa com o exemplo do tópico 1.
Cada tópico fornece um exemplo completo para substituir somente src/main.ts.
Salve sua tentativa antes de trocar de tópico. Os arquivos exemplares em
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
