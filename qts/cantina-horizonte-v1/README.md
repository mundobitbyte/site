# Cantina Horizonte — QTS v1

Protótipo isolado que servirá como sistema-fio-condutor do módulo **QTS — Qualidade e Teste de Software** do Mundo bit Byte.

Esta primeira versão foi preparada para a etapa inicial do curso: ela deve parecer utilizável em um fluxo normal, mas ainda conter comportamentos que os estudantes poderão investigar ao longo do módulo.

## Objetivo desta versão

- oferecer um sistema real e pequeno, com código completo;
- permitir uso pelo navegador;
- possuir backend em Python com FastAPI;
- persistir dados em SQLite;
- manter frontend simples em HTML, CSS e JavaScript;
- permanecer isolado do site público até a validação pedagógica e técnica.

## Executar localmente

Na pasta do projeto:

```bash
python -m venv .venv
```

Ative o ambiente virtual e instale as dependências:

```bash
pip install -r requirements.txt
```

Inicie o servidor:

```bash
uvicorn backend.app:app --reload
```

Abra no navegador:

```text
http://127.0.0.1:8000
```

O banco `cantina.db` é criado automaticamente na primeira execução.

## Teste rápido do projeto

```bash
pytest
```

Os testes atuais verificam apenas o funcionamento básico necessário para o protótipo. A suíte crescerá junto com o próprio módulo de QTS.
