# Mapa de segurança — arquivos internos no repositório público

> Documento de trabalho da branch `seguranca-passiva-mbb`. Não é conteúdo do site e não deve permanecer na publicação final.

## Objetivo

Identificar documentação de bastidores que pode sair da árvore pública sem afetar HTML, CSS, JavaScript, Firebase, navegação, pesquisa, GitHub Pages ou testes automatizados.

## Grupo A — candidatos a retirada sem dependência técnica encontrada

Nas buscas por referência nominal não foi encontrada dependência de execução, build ou CI para os arquivos abaixo. Alguns se citam entre si, mas não são carregados pelo site.

- `ANALISE_SISTEMAS_AUDITORIA_VISUAL_MBB.md`
- `FUNDAMENTOS_INFORMATICA_MAPA_E_CRITERIOS_MBB.md`
- `IA_AUDITORIA_MBB_SET_2026.md`
- `IA_REVISAO_PEDAGOGICA_MBB_4_6.md`
- `IA_REVISAO_VISUAL_MBB_SET_2026.md`
- `INFORMATICA_PRODUTIVIDADE_MAPA_E_CRITERIOS_MBB.md`
- `INFRAESTRUTURA_MBB_MAPA_E_CRITERIOS.md`
- `MEU_MBB_ARQUITETURA_E_REGRAS.md`
- `PROGRAMACAO_MBB_MAPA_E_AUDITORIA.md`
- `PYTHON_MBB_MAPA_E_CRITERIOS.md`
- `RELATORIO_OTIMIZACAO_WEBP.md`

**Proposta:** arquivar fora do repositório público e depois retirar da árvore atual.

## Grupo B — documentação interna que forma um conjunto com referências cruzadas

- `ADMINISTRACAO_ACADEMIA_MBB.md`
- `MAPA_REAPROVEITAMENTO_SISTEMAS_EMBARCADOS_MBB.md`
- `RELATORIO_FINAL_ACADEMIA_SISTEMAS_EMBARCADOS_MBB.md`
- `RELATORIO_AUDITORIA_PRE_MERGE_ACADEMIA_SISTEMAS_EMBARCADOS_MBB.md`

Dependências documentais encontradas:

- `academia/README.md` aponta para `ADMINISTRACAO_ACADEMIA_MBB.md`;
- o relatório final cita o arquivo de Administração e o mapa de reaproveitamento;
- o relatório pré-merge cita o relatório final.

Não foi encontrada dependência de runtime do site, mas retirar apenas um desses arquivos deixaria documentação quebrada.

**Proposta:** retirar o conjunto de forma coordenada e ajustar `academia/README.md` para não apontar para documentação que deixará de existir na árvore pública.

## Grupo C — não retirar ainda: dependência explícita de validação/CI

- `ANALISE_SISTEMAS_MBB_MAPA_E_CRITERIOS.md`
- `ANALISE_SISTEMAS_MEU_MBB_CONTRATO.md`

Dependências técnicas encontradas:

- `tools/analise-sistemas-validacao/smoke.mjs` verifica explicitamente que os dois arquivos existem;
- `.github/workflows/analise-sistemas-validacao.yml` inclui os dois arquivos nos gatilhos de validação.

Apagá-los agora não quebraria a renderização do site no navegador, mas quebraria o contrato da validação automatizada.

**Proposta:** primeiro desacoplar o teste e o workflow da documentação interna; só depois retirar esses dois arquivos.

## Arquivos que devem permanecer públicos

Não fazem parte da limpeza de bastidores:

- `README.md` — apresentação básica do repositório;
- `CNAME` — necessário ao domínio personalizado no GitHub Pages;
- `.firebaserc`, `firebase.json` e regras Firestore — arquivos operacionais; devem permanecer enquanto fizerem parte do fluxo de publicação/testes, sem conter segredos;
- arquivos HTML, CSS, JavaScript, imagens e catálogos consumidos pelo navegador;
- workflows e ferramentas de teste necessários ao CI.

## Observação crítica sobre histórico Git

Remover um arquivo da branch atual **não o apaga do histórico Git**. Em um repositório público, versões antigas ainda podem ser recuperadas por commits anteriores.

Portanto há dois objetivos diferentes:

1. **limpeza da árvore pública atual:** segura e reversível; é o objetivo desta branch;
2. **eliminação do histórico público:** exige reescrita de histórico ou tornar o repositório privado. É uma operação de maior risco e não deve ser feita nesta etapa sem autorização específica, backup e plano de reversão.

## Regra de execução

Nenhuma exclusão deve ser levada à `main` antes de:

1. arquivar os documentos que precisam ser preservados fora da árvore pública;
2. remover/ajustar referências documentais quebradas;
3. atualizar testes/workflows quando houver dependência explícita;
4. executar validações automáticas;
5. revisar o diff final;
6. obter autorização explícita para merge.

## Situação desta branch

Até este ponto, **nenhum arquivo interno foi excluído**. Este mapa é apenas a proposta técnica para a próxima etapa segura.
