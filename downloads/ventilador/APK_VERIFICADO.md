# Ventilador MbB — identificação do arquivo Android

Arquivo: `VentiladorMBB03.apk` · Nome: Ventilador MbB

- Versão: `0.3-experimental`, código `3`.
- Pacote: `appinventor.ai_mundobitbyte.VentiladorMBB03`.
- Tamanho: 3.769.886 bytes.
- SHA-256: `8c7a2fcb243f30e547fc2cf8fe67f79b87f469237e14dce45f4ea06768323494`.
- Arquivo recebido do professor após compilação no MIT App Inventor, em 19/10/2026.
- Descompressão/CRC das 442 entradas aprovados.
- Assinaturas v1, v2 e v3 verificadas com apksigner; um signatário, chave RSA 2048 bits.
- SHA-256 do certificado: `268ac310ed61cc1bb01909083945bd38db79e1db1b1d0b8c3d434f86c10cfdbd`.
- Manifesto declara Bluetooth, Bluetooth Admin, Bluetooth Connect, Bluetooth Scan e Internet. Não declara câmera, microfone ou localização.
- SDK mínimo declarado: 14; alvo: 36. Esses metadados não comprovam execução em todas essas versões.
- Os dez eventos esperados estão no código compilado; o trecho de Desligar compara o prazo antes do reenvio de 0, coerente com a revisão. Isso não é prova de equivalência completa nem ensaio Android.

**Pendente:** instalação/execução Android, Companion, permissões em aparelho real e comunicação física. Assinatura válida comprova integridade em relação ao signatário; não substitui testes funcionais.

Este app envia um sinal periódico de presença (heartbeat) e exige `03_bancada_supervisionada.ino`, somente LEDs em baixa tensão. Não conecta diretamente um ventilador e não comprova rotação ou abertura de contatos.
