#!/usr/bin/env bash
# Apenas arquivos fictícios em diretório novo; não usa sudo nem remove arquivos.
set -euo pipefail
umask 077
task_dir=$(mktemp -d "${TMPDIR:-/tmp}/mbb-backup.XXXXXXXX")
mkdir "$task_dir/origem" "$task_dir/restaurado"
printf 'Amostra ficticia da secretaria\n' > "$task_dir/origem/amostra.txt"
tar -czf "$task_dir/amostra.tgz" -C "$task_dir/origem" amostra.txt
tar -xzf "$task_dir/amostra.tgz" -C "$task_dir/restaurado"
cmp "$task_dir/origem/amostra.txt" "$task_dir/restaurado/amostra.txt"
printf 'Comparacao concluida. Evidencias em: %s\n' "$task_dir"
printf 'Limite: mesmo armazenamento; nao valida backup independente nem servidor.\n'
