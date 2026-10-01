# Cantina Horizonte — QTS v1

Protótipo isolado que servirá como sistema-fio-condutor do módulo **QTS — Qualidade e Teste de Software** do Mundo bit Byte.

A aplicação foi mantida pequena de propósito: produtos, pedido, cupom, estoque e total. Assim, o foco do aluno permanece em qualidade e testes, e não na construção de um sistema grande.

## Caminho mais simples no Windows

1. Dê dois cliques em `iniciar_windows.bat`.
2. Aguarde a preparação do ambiente na primeira execução.
3. Abra `http://127.0.0.1:8000` no navegador.

Para encerrar, volte à janela do servidor e pressione `Ctrl+C`.

## Execução manual

Na pasta do projeto, crie um ambiente virtual do Python:

```bash
python -m venv .venv
```

Ative o ambiente virtual e instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie o servidor local:

```bash
python -m uvicorn backend.app:app --reload
```

Abra no navegador:

```text
http://127.0.0.1:8000
```

O banco de dados SQLite `cantina.db` é criado automaticamente.

## Restaurar os dados iniciais

Durante as atividades, os pedidos alteram o estoque. Para recomeçar a experiência com os dados originais, encerre o servidor e execute:

```bash
python resetar_dados.py
```

No Windows também é possível dar dois cliques em `resetar_dados_windows.bat`.

## Teste rápido do projeto

```bash
pytest
```

Os testes atuais verificam apenas o fluxo básico necessário para manter o protótipo utilizável. A suíte será ampliada gradualmente ao longo do próprio módulo de QTS.
