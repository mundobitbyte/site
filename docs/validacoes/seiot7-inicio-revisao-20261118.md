# Revisão controlada — Tópico 7, Internet das Coisas e Granja Inteligente

## Referência preservada
- **Base:** `main` no commit `c050002d96c16ec2731310f0930ce0ede864ff10` (inclui a revisão já publicada do tópico 6, PR #267).
- **Histórico:** PR #259, Granja Inteligente, integrado; PR #258 ainda aberto, mas sua origem ficou desatualizada. Parte dos aprimoramentos didáticos que ele propôs já se encontra na `main`; não integrar esse PR antigo automaticamente nem reintroduzir projetos substituídos.
- **Escopo atual:** `pages/arduino-iot.html` e proteção em `tests/seiot-granja/validar.mjs`. Nenhum código Arduino, JSON, biblioteca, rota ou projeto anterior foi alterado.

## Inventário de trabalho
- Tópico 7: `pages/arduino-iot.html`, `js/arduino-iot.js`, `js/arduino-espiral-mbb-7a10-20261026.js`.
- Prática 7.5: `pages/arduino-granja-inteligente.html` e `wokwi/granja-inteligente/` (`sketch.ino`, `diagram.json`, `libraries.txt`, `secrets.example.h`, `TESTES.md`).
- Testes existentes: `tests/seiot-granja/`, workflow `.github/workflows/seiot-granja-validacao.yml`.
- Encadeamento atual: 7.1 Fundamentos; 7.2 Histórico; 7.3 Conceitos; 7.4 Aplicações; 7.5 Granja Inteligente; próxima etapa 8.

## Primeira melhoria, exclusivamente aditiva
Inserido, em 7.5 antes do link para o laboratório, um exercício de **previsão → revelação comentada → verificação** para uma falha de Wi-Fi simultânea a eventos de temperatura e nível da água. Ele separa decisões locais, registros do Monitor Serial, simulação `[DEMO]`, tentativa HTTPS e entrega comprovada do Telegram. O exercício reforça o vínculo pedagógico com a conectividade do tópico 6.

## Validações e próximos passos
- A comparação de texto confirma a inserção apenas de um bloco HTML, sem excluir texto original.
- Foram incluídos três invariantes de conteúdo em `tests/seiot-granja/validar.mjs`.
- Pendente: execução da CI desta branch, avaliação dos scripts que alteram o DOM, verificação dos cartões RFID/sensores, credenciais e testes de cópia/navegação responsiva.
- Não houve montagem física, disparo real no Telegram ou experimento com estudantes nesta etapa; o material existente já possui evidências anteriores detalhadas em `wokwi/granja-inteligente/TESTES.md`.
- **Proibido:** merge ou publicação antes de auditoria/validação e autorização específicas da próxima tarefa. A autorização anterior para publicar o tópico 6 não se confunde com autorização de integração para o tópico 7.
