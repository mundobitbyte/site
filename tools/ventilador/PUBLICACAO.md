# Publicação do percurso Ventilador Bluetooth MbB

Autorização do professor em 19/10/2026: continuar o site até a publicação e conferir o funcionamento para ajustar o necessário.

## Escopo

Oito etapas do projeto; complementos de relés, HC-05, segurança e App Inventor; navegação contextual, menus, pesquisa, catálogo/retomada, simulador, checklists, ilustrações, AIA, três sketches e APK de bancada. O app/firmware não foi alterado na preparação da publicação. As etapas de Android/hardware permanecem explicitamente pendentes.

Base oficial conferida antes da integração: `f4334477517699db0ecbdbda370af1a833cfbf0e`. O repositório da reforma e outros PRs não integram esta entrega. Configurações/regras Firebase e serviços de produção são preservados.

## Verificação

Executar pesquisa/visitas `--check`, testes Meu MbB e ventilador, comparação do AIA, casos dirigidos e inspeção de links/código/downloads. O APK tem SHA-256 e resultado de assinaturas em `downloads/ventilador/APK_VERIFICADO.md`. Antes da integração, conferir os checks aplicáveis do PR. A avaliação local de layout está limitada pela indisponibilidade de control-browser no ambiente gerenciado; a validação visual existente de CI usa Chromium real. Testes autenticados de dados de produção não integram os ensaios.

## Conferir no site

Abrir bloco 11 do Arduino; percorrer etapas; testar ida/retorno aos quatro conceitos; usar menu, voltar/avançar, pesquisa, ampliação, cópia, downloads e checklist. Conferir computador, celular e modo desktop do celular. O simulador não controla hardware. Registrar falhas observadas antes de corrigir.

## Reversão

Registrar o commit de integração. Se necessário, criar branch a partir da main corrente e usar `git revert -m 1 SHA_DO_MERGE` para retirar somente a integração, revisando conflitos; se o método de integração não tiver commit de merge, reverter o commit equivalente sem `-m`. Preservar alterações posteriores e IDs/históricos de estudo. Regenerar catálogo/visitas e executar regressão antes de republicar. Não usar reset ou push forçado. O registro do merge e a publicação podem ser consultados no PR e no histórico Pages.
