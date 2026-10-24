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

## Tópicos 1 a 8

A pasta src é o lugar da sua edição. Ela começa com o exemplo do tópico 1.
Cada tópico fornece um exemplo completo para substituir somente src/main.ts.
Salve sua tentativa antes de trocar de tópico. Os arquivos exemplares em
exemplos/01.ts a exemplos/08.ts são referências para comparar ou recuperar,
não nove versões completas do Café.

A saída usa document.body.textContent para mostrar texto sem reconstruir a
interface do projeto PHP. O Vite transforma TypeScript para o navegador, mas
não confere os tipos. Sempre execute `npm run verificar` no segundo terminal.

## Tópico 9

Copie exemplos/09/atendimento.ts para src/atendimento.ts e substitua src/main.ts
pelo conteúdo de exemplos/09/main.ts. Esses dois arquivos passam a trabalhar
juntos. O caminho .js do import se refere ao JavaScript gerado; a ferramenta
localiza o arquivo TypeScript correspondente durante o desenvolvimento.

Depois de alterar um arquivo, salve, observe a página e repita a verificação.
Para gerar uma versão estática, execute `npm run build`. O comando verifica
os tipos antes do build. A pasta dist não executa PHP e não altera o MbB.

## Respostas e limites

O exemplo 8 usa uma Promise e um texto JSON locais. Ele não consulta o PHP,
não simula uma integração como se fosse real e não exige conta. Teste JSON
inválido e valores inadequados: unknown obriga conferir o dado antes do uso.
Uma anotação de tipo não valida automaticamente uma resposta externa.

Nos exemplos de preço, toFixed(2) usa ponto e serve para observar os valores.
A formatação monetária completa pode ser retomada na integração com a interface.

## Exercícios

Use os desafios do tópico 99. Guarde sua solução em uma cópia da bancada ou
salve seus arquivos antes de substituir main.ts. Para cada desafio, confira
o caso normal e uma entrada inadequada. A verificação precisa passar depois
de corrigir o erro provocado intencionalmente.

© 2026 Mundo bit Byte — Ronaldo Lavestein. Uso conforme os direitos do site.
