# Caso representativo — web ativo, banco indisponível

H1: banco ainda inicializando. H2: credencial/caminho divergente.
Leia `docker compose ps` e logs do db no mesmo horário. Não entregue logs com
segredos. Se houver erro de autenticação persistente, compare caminho do secret,
usuário e banco com a configuração inicial. Gerar outro arquivo de senha não
altera automaticamente uma senha em banco já criado.

Primeiro resultado aceitável: investigação que distingue prontidão de credencial.
Não use down -v nem exponha o banco. Com dado único sem cópia, pare. Esse exemplo
não atesta execução do Compose nem oferece uma senha para reutilizar.
