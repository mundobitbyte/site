# Bancada de rede — Ambiente MbB

Programas completos das etapas 6.4 e 6.5:
https://www.mundobitbyte.com.br/pages/arduino-conectividade.html

Extraia o ZIP antes de executar. Use Python 3 no computador; nenhum comando vai no Wokwi.
Não use dados pessoais. Estes exemplos não são servidores de produção.

## 6.5 — servidor local (biblioteca padrão, sem pip)

Windows / PowerShell na pasta extraída:

```powershell
py --version
py servidor.py
```

No mesmo computador, abra http://127.0.0.1:8000/ . Você verá somente um aviso fictício.
O programa não publica o diretório nem possui comandos do LED. O servidor escuta
somente na interface local. Ctrl+C encerra. Não substitua pelo servidor de uma pasta.

Para o túnel externo autorizado, baixe cloudflared do fabricante:
https://developers.cloudflare.com/cloudflare-one/networks/connectors/cloudflare-tunnel/downloads/
Windows x64, versão conferida:
https://github.com/cloudflare/cloudflared/releases/download/2026.10.5/cloudflared-windows-amd64.exe

Coloque o executável nesta pasta. No terminal 2:

```powershell
.\cloudflared-windows-amd64.exe --version
.\cloudflared-windows-amd64.exe tunnel --url http://127.0.0.1:8000 --protocol http2
```

Quick Tunnels não pede conta/cartão. A URL HTTPS aleatória fornecida pode ser aberta
por qualquer pessoa que a conheça: publique apenas o aviso fictício. Não use as rotas
/ligar e /desligar da placa. --url indica o destino local; --protocol http2 seleciona
o transporte do cliente até a Cloudflare. O endereço depende do processo e não tem
estabilidade garantida. Siga as políticas da rede; não desative proteções.

Compare local e público. Se autorizado e disponível, teste também por outra rede.
Ctrl+C no terminal 2 deve interromper a entrega pública; a página local continua.
Ctrl+C no terminal 1 encerra também o serviço local. Recarregue: uma aba com conteúdo
antigo não comprova um novo acesso.

## 6.5 — alternativa sem túnel externo

Deixe servidor.py no terminal 1. No terminal 2:

```powershell
py encaminhador_local.py
```

Abra http://127.0.0.1:9000/ e compare com a porta 8000. O encaminhador pede a página
ao servidor e a repassa de verdade. Observe os dois terminais. Encerre só o terminal 2:
a porta 9000 falha; 8000 continua. Isso é encaminhamento HTTP local, não um túnel
público nem criptografado. Erro 502 indica que o servidor de origem não foi alcançado.

## 6.4 — consulta real mDNS entre dois processos (opcional)

A atividade principal no navegador é a investigação do PCAP do Wokwi. Esta extensão
usa multicast UDP real na interface local do computador, sem ESP32. Não prova a
resolução .local nativa do navegador ou acesso entre dois computadores da LAN.

No PowerShell, na pasta extraída, crie ambiente separado e instale a dependência:

```powershell
py -m venv .venv
.\.venv\Scripts\python.exe -m pip install zeroconf==0.151.3
```

-m venv cria o ambiente .venv; -m pip instala nele. Não precisa ativá-lo nem mudar
políticas do PowerShell. Na mesma pasta, abra três terminais:

```powershell
# Terminal 1: servidor do aviso
.\.venv\Scripts\python.exe servidor.py
# Terminal 2: anúncio, deixe aberto até ver "Anúncio ativo"
.\.venv\Scripts\python.exe mdns_local.py anunciar
# Terminal 3: nova consulta
.\.venv\Scripts\python.exe mdns_local.py consultar
```

zeroconf é a biblioteca de mDNS/DNS-SD. ServiceInfo descreve o serviço (nome, IP e
porta); register_service anuncia; get_service_info consulta; unregister_service
retira o anúncio. interfaces=["127.0.0.1"] limita o experimento ao mesmo computador.
A consulta aguarda até 5 segundos. O endereço retornado vem dos registros recebidos;
não é fabricado no ramo de sucesso do cliente.

O esperado é ambiente-mbb.local., IP 127.0.0.1 e porta 8000. Abra a URL retornada.
Pare só o anúncio com Ctrl+C; espere alguns segundos e rode outra consulta: deverá
informar nenhuma resposta. O servidor HTTP continua funcionando pelo IP. Feche-o
também ao terminar. Bloqueios de multicast/UDP 5353 podem impedir a atividade; não
altere firewall sem orientação, retorne ao PCAP. Não inicie dois anúncios com o mesmo nome.

## Linux/macOS

Use python3 no lugar de py. Para o ambiente: python3 -m venv .venv ; nos comandos
seguintes use ./.venv/bin/python no lugar de .\.venv\Scripts\python.exe.
O componente venv pode precisar ser disponibilizado pelo responsável da máquina.

Baixe cloudflared da sua arquitetura no site oficial. Linux: chmod +x no binário
concede permissão de execução. Execute ./cloudflared-linux-amd64 no lugar do nome
Windows. macOS: extraia o arquivo do fabricante e execute ./cloudflared. Não ignore
alertas do sistema nem contorne regras da instituição.

## Evidências e limites

Executados: HTTP local, rotas recusadas, encaminhamento local e interrupção, consulta
mDNS em dois processos e consulta sem anúncio, túnel Quick Tunnel e interrupção em
Linux isolado. Windows nativo, macOS, rede móvel e placa física não foram executados.
A consulta .local do navegador ao Wokwi não é um teste comprovado. O gateway privado
é pago e não faz parte da atividade.

Fontes: https://docs.wokwi.com/guides/esp32-wifi
https://developers.cloudflare.com/tunnel/get-started/quick-tunnels/
https://docs.python.org/3/library/http.server.html
https://python-zeroconf.readthedocs.io/en/stable/
