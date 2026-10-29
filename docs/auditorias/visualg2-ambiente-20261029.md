# VisuAlg 2 — atualização localizada do ambiente

Data: 29/10/2026. Base: `1935067b4e9d41f9d43ac6c2e6f7c0a4bf2a2c0a`, estado de main consultado antes das alterações.

## Alteração

O tópico 1 adota o ZIP fornecido para a turma, identifica a versão real e explica baixar, extrair, abrir `Visualg2/visualg.exe`, criar, salvar e executar um primeiro teste. A orientação de download do VisuAlg 3/SourceForge foi removida do módulo ativo. A escolha da versão 2 foi apresentada como padronização do ambiente da turma, não superioridade técnica ou recomendação de segurança.

Os demais conteúdos, códigos, exercícios, menu e trabalhos anteriores foram preservados. Foi comparado o JavaScript antes/depois excluindo somente `s1.content`: o restante é idêntico à base. A referência histórica ao ambiente anterior no relatório da auditoria geral não foi reescrita como se esse trabalho tivesse ocorrido com a versão 2.

## Anexos e redistribuição

| Item | Evidência | Decisão |
|---|---|---|
| Programa | Ajuda original dentro do ZIP, `Visualg2/Help/objetivos.htm`, declara domínio público e versão freeware | Publicar ZIP original, sem recompor nem modificar |
| PDF | Capa confirma *Introdução aos Algoritmos*, Bruno Tonet e Cristian Koliver, NAPRO/UCS; 54 páginas. Não foi encontrada autorização expressa de redistribuição no documento ou nas fontes consultadas | Não publicar o PDF; registrar pendência de permissão dos titulares |

A declaração do criador sobre domínio público também consta em documentação hospedada no IMPA: https://w3.impa.br/~zang/uerj/ipd/software/visualg.pdf . A referência institucional que cita a obra de apoio está em https://materialpublic.imd.ufrn.br/curso/disciplina/3/13/13/17 . A licença da aula da UFRN não foi atribuída ao PDF citado em sua bibliografia.

O link bibliográfico externo é claramente identificado como referência, e não como download do PDF. Não foi criado botão desabilitado, link quebrado, cópia alternativa não autorizada nem arquivo substituto sob o nome do manual solicitado.

## Identificação real e integridade

- Arquivo de programa: `Visualg2/visualg.exe`.
- FileVersion: **2.0.0.12**; ProductVersion: **2.0.0.0**.
- Formato PE32, máquina `0x14c` / Intel 386, 32 bits.
- Metadados da empresa: Apoio Informática Ltda.; copyright interno de 2003.
- Sem assinatura Authenticode. Metadados e hash não autenticam a procedência do arquivo nem provam ausência de malware.
- ZIP: 57 entradas, 1.003.639 bytes. Teste CRC de todas as entradas sem erro; cópia publicada idêntica ao anexo.
- SHA-256 ZIP: `3c0aabe0d16d38123ccc9d3d9c18a8bfc293d9180d727c997cab025d24303468`.
- PDF original preservado, não publicado: 455.792 bytes; 54 páginas; sem criptografia; texto extraído e primeira/última páginas renderizadas e inspecionadas.
- SHA-256 PDF: `80d971cfc3a79bd8048754d315dab2ef3d8c561353e723b4feef1170305c2be4`.

O ZIP inclui Help, Exemplos e um desinstalador Inno Setup. A orientação é abrir visualg.exe, manter as pastas juntas e não usar unins000.exe como se fosse o programa da aula. Não foi inventado um instalador para o pacote fornecido.

## Compatibilidade: evidência documental, não execução nativa

A ajuda que acompanha exatamente o executável foi usada para conferir as construções já apresentadas. Não se presumiu que o suporte na versão 3 bastaria para a 2.

| Construções / recursos do módulo | Arquivo de ajuda incluído no ZIP |
| estrutura, variáveis, leia, escreva/escreval, operadores | `Visualg2/Help/linguagem.htm` |
| se/senao e escolha/caso | `Visualg2/Help/linguagem2.htm` |
| para, enquanto, repita e interrompa | `Visualg2/Help/linguagem3.htm` |
| procedimentos, funções, parâmetros e retorno | `Visualg2/Help/linguagem4.htm` |
| pausa, debug, F8/F9 e Ctrl-F2 | `Visualg2/Help/linguagem5.htm` |
| abs, raizq, exp, Compr, Copia, Maiusc, Minusc e Pos | `Visualg2/Help/funcoes.htm` |
| Arquivo/Novo, Salvar e Salvar como | `Visualg2/Help/menu.htm` |

Vetores/matrizes, rotinas sem parâmetros e passagem por referência também estão descritos na ajuda e nos exemplos do pacote. Os algoritmos existentes não foram modificados: não foi identificada uma incompatibilidade documental que justificasse alterá-los nesta atualização de ambiente.

**Limitação explícita:** não houve execução do executável original no Windows. A correspondência com a documentação não comprova execução de todos os programas, precisão/formatação de saídas ou comportamento em Windows 10/11. A validação nativa permanece pendente. A ajuda histórica mencionar Windows 95 ou posterior não foi transformada em garantia para sistemas atuais. Não foi realizada varredura de antivírus e não foi declarado que o ZIP está livre de malware. A aula orienta análise com proteção atualizada e contato com o professor em caso de bloqueio, sem desativar proteções.

O pequeno teste novo `Teste_do_ambiente` executou em `@designliquido/visualg 0.9.20` e produziu `Meu primeiro algoritmo funcionou.`. Isso foi registrado como execução alternativa, não no VisuAlg 2 original.

## Validação

- Chromium 153 / Playwright: 19 destinos em cada largura 1440, 1050, 768, 390 e 320 px, sem exceções JavaScript e sem overflow horizontal global nos testes.
- No tópico 1, em cada largura: versão 2.0.0.12 presente, orientação antiga ausente, créditos e pendência do PDF presentes.
- Download acionado no navegador nas cinco larguras; nome `Visualg2.zip` e SHA-256 comparados ao anexo.
- Cópia do primeiro algoritmo comparada literalmente ao clipboard nas cinco larguras.
- Capturas desktop e celular examinadas. Link compacto sem largura fixa e sem caixa decorativa adicional.
- `node --check` do JavaScript modificado passou.
- Índice atualizado pelo gerador oficial; verificações de índice de pesquisa e visitas diretas passaram.
- 29 testes de `meu-mbb/*.test.cjs` passaram.
- Créditos do software e do PDF separados. O PDF não foi descrito como manual oficial do desenvolvedor.

## Arquivos

Adicionados:

- `downloads/visualg/Visualg2.zip` — arquivo original.
- `downloads/visualg/README.md` — identificação, hashes, evidência de permissão e limites.
- Este relatório.

Modificados:

- `js/visualg-mbb-20260912.js` — somente o conteúdo do tópico 1.
- `pages/visualg.html` — versões dos recursos modificados, para renovação do cache.
- `css/visualg-explicacoes-20260913.css` — estilo localizado do link de download.
- `meu-mbb/catalogo.json` — atualização gerada somente da unidade VisuAlg, preservando IDs e progresso.

## Entrega e pendências

Download previsto: https://www.mundobitbyte.com.br/downloads/visualg/Visualg2.zip . O link público será conferido após a publicação, incluindo comparação de hash.

Página: https://www.mundobitbyte.com.br/pages/visualg.html . Commit/PR são apresentados na entrega após criação efetiva. Permanecem pendentes a autorização para hospedar o PDF, execução no VisuAlg 2 original e validação em Windows atual. A ausência dessas verificações não foi ocultada nem apresentada como sucesso.
