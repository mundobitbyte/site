# Revisão controlada — Tópico 9 Proteção e Segurança em IoT (18/11/2026)

## Estado inicial e preservação
- `main` de referência: `6f24c2899d447acfcd7838a46e7bebc37615444c`.
- Percurso original: preparação, `9.1` proteção de dados pessoais e `9.2` segurança de sistemas e informações.
- Mantidos princípios LGPD, minimização, credenciais, confidencialidade/integridade/disponibilidade, autenticação, autorização, registros, HTTP/HTTPS/TLS e ponte para o projeto final.
- Mantidos os scripts `arduino-seguranca.js` e `arduino-espiral-mbb-7a10-20261026.js`, sem reescrever lógica de navegação, componentes ou exercícios anteriores.

## Auditoria didática circular e em espiral
1. Necessidade: a conectividade dos tópicos 6–8 amplia a superfície de acesso; definições e exemplos já estão contextualizados.
2. Conceitos: o tópico separa dados pessoais de credenciais, autorização de autenticação, e HTTPS de identidade; mantido integralmente.
3. Prática: a antiga auditoria HTTP do tópico 6 já permite raciocinar sobre riscos sem explorar sistemas reais.
4. Evidências: risco e decisão de proteção devem ser separados de comprovação de execução e entrega.
5. Transferência: criado estudo de caso da Granja Inteligente vinculando UID RFID (possível dado pessoal), token Telegram (segredo), `[DEMO]` (não prova de entrega) e continuidade local em falha de Wi-Fi.
6. Exercício autônomo: tabela recurso/risco/decisão/evidência, sem dados reais nem credenciais.
7. Preservação: a única alteração do HTML foi acrescentar um artigo ao painel `b9-2`; não foram alterados códigos Arduino, projetos Wokwi ou demais páginas.
8. Regressão: novo teste `tests/seiot9/validar.mjs` e workflow específica, sem substituir testes globais.

## Limites de verificação
O estudo de caso é conceitual; não houve teste de envio real pelo Telegram, teste de ataque, implantação de autenticador ou avaliação presencial com estudantes. Não apresentar como solução de segurança pronta para produção.

## Pesquisa global
Uma mudança textual na página exige regeneração do índice com proteção de escopo; permitir unicamente `pages/arduino-seguranca.html` e verificar que nenhuma outra unidade nem metadados sejam modificados. Se outra divergência preexistente for detectada, investigá-la antes da atualização.
