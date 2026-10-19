# Publicação do percurso de bancada — 19/10/2026

O professor autorizou a continuidade até a publicação no site oficial em 19/10/2026. Essa autorização substitui os limites anteriores de trabalho exclusivamente local para a integração deste conteúdo. Não autoriza montagem de potência nem alterações no Firebase, domínio ou configurações. O histórico abaixo descreve fases anteriores e permanece como registro.

A publicação usa a fonte validada, nunca a prévia sanitizada. APK recebido do professor, inspecionado e incluído nos downloads; execução Android e hardware pendentes. Veja `downloads/ventilador/APK_VERIFICADO.md` e `PUBLICACAO.md` neste diretório.

---

# Desenvolvimento local — ventilador MbB

Base oficial: `mundobitbyte/site`, main `f4334477517699db0ecbdbda370af1a833cfbf0e`.

Branch local atual: `feature/ventilador-revisao-031`, criada a partir da revisão 0.3 preservada. A branch anterior da revisão era `feature/ventilador-revisao-03`. A branch `feature/ventilador-bluetooth` e seu HEAD `f3ebc91700a9cce2596aeab1794485915135211e` permanecem preservados. Nenhuma criação remota, push, PR, merge ou publicação integra esta autorização. O push local foi direcionado a `no-push://somente-leitura`.

## Linha de base

- Os 29 testes `node --test meu-mbb/*.test.cjs` passaram antes da implementação.
- `node meu-mbb/atualizar-pesquisa.cjs --check` já falhava por uma unidade: `mod-pages-reactnative`. A regeneração do catálogo sincroniza esse texto, sem editar o módulo React Native.
- O conteúdo de `<main>` do Ambiente Inteligente MbB e seu JavaScript são comparados à base nos testes do projeto.
- Não foram alterados domínio, workflows, regras, configurações Firebase ou dados persistentes do site.

## Fontes e geração

```sh
python tools/ventilador/gerar-visuais.py
python tools/ventilador/gerar-app.py
python tools/ventilador/gerar-paginas.py
node meu-mbb/atualizar-pesquisa.cjs
node meu-mbb/gerar-visitas.cjs
```

Os `.ino` são a fonte única dos blocos de código. Os SVG são esquemas funcionais autorais, sem presumir pinagem física de módulos. O gerador do `.aia` usa XML de blocos e configuração do Designer; a revisão foi importada e reexportada no MIT; a execução Android e os testes físicos continuam pendentes.

## Verificação local

```sh
node meu-mbb/atualizar-pesquisa.cjs --check
node meu-mbb/gerar-visitas.cjs --check
node --test meu-mbb/*.test.cjs
node --test tools/ventilador/validacao.test.cjs
python tools/ventilador/validar-arquivos.py
```

Os testes DOM requerem jsdom 30.1.3. Instale em uma pasta de ferramentas ou use `MBB_JSDOM` com o caminho do pacote. Sem a dependência, os testes DOM ficam explicitamente ignorados; isso não é aprovação. Eles usam respostas locais interceptadas e não acessam Firebase. Emulação DOM não comprova layout no navegador.

O verificador de arquivos e os exportadores usam Python com lxml. Para o teste nativo do firmware, compile `tools/ventilador/firmware-teste.cpp` com g++ C++17 e o include `-Itools/ventilador`. Esse teste usa entradas/saídas modeladas e não substitui a compilação Uno nem o ensaio físico.

## Prévia sem produção

`python tools/ventilador/preparar-preview.py` cria `dist/ventilador-preview` ignorado pelo Git. O diretório não contém `.git`. As configurações Firebase são removidas da cópia e o cliente de conta é substituído por um stub sem usuário. Todas as páginas recebem CSP com `connect-src 'self'`; scripts externos, frames e formulários ficam bloqueados. Pesquisa e recursos locais continuam disponíveis. Serviços da Academia podem ficar indisponíveis nessa prévia isolada.

Abra a página `pages/arduino-ventilador-bluetooth.html` da cópia gerada. Para testar pesquisa e recursos que usam fetch, sirva a pasta gerada em um servidor estático local. Não sirva a raiz original para testes autenticados.

O ambiente desta execução não disponibilizou a habilidade de controle de navegador exigida pelo fluxo de Sites. Não foi iniciado servidor de prévia e não foram declarados testes visuais reais de desktop/celular.

Uma exportação portátil para avaliação pode ser gerada com `python tools/ventilador/exportar-portatil.py CAMINHO_DE_SAIDA.html`. Ela incorpora CSS, JavaScript, figuras e downloads e reúne as quatro aulas de apoio ao final. Não faz requisições de rede e não substitui a organização canônica do site integrado. Não publique esse arquivo como uma segunda cópia das aulas.

## Reversão futura

Antes de uma eventual publicação, conferir novamente a main, os serviços externos, a configuração de Pages e a integração Vercel; registrar o SHA imediatamente anterior à integração. Identificar o(s) commit(s) exclusivos do projeto. Preparar uma branch de retirada e usar `git revert` revisado, preservando melhorias posteriores. Corrigir seletivamente conflitos; não fazer reset destrutivo da main.

Retirar acessos e recursos exclusivos, atualizar o catálogo e o índice de visitas e preservar a identidade/histórico de estudo. Se houver registros novos, aposentar a unidade no catálogo conforme o esquema existente em vez de apagar dados. Rodar regressão e republicar pelo mecanismo confirmado, com autorização específica. Revert não desfaz dados externos nem a intervenção física no ventilador.

## Limites

- Nenhuma aprovação de 220 V.
- HC-05 e relés ainda dependem de identificação e documentação.
- Nenhum teste físico executado.
- `.aia` importado no MIT em 19/10/2026; compilação APK concluída no editor, mas download do binário e execução Android pendentes. A exportação real está preservada em `evidencias-mit/`.
- Sem regressão visual real em navegador; somente inspeção vetorial, análise estática e testes DOM.
- Isolamento de publicação de branches remotas continua pendente.

## Continuação de 19/10/2026 — revisão 0.2

O pacote recebido foi recuperado pelo bundle no commit `4e307174ebff649bfa6daa85508e03c76467a0b0`, sem aplicar patch. O aplicativo passou a esperar o handshake `0`, limitar a espera por confirmação e manter Desligar prioritário. Veja o relatório atualizado e `downloads/ventilador/VALIDACAO_MANUAL.md`.

Há agora dez componentes, dez eventos e cinco globais no aplicativo. Os `.ino` não foram alterados. Além dos sete testes do projeto, execute `node --test tools/ventilador/previa.test.cjs` com jsdom 30.1.3: testa a exportação em DOM, sem comprovar layout. Após autenticação, a importação MIT e a conclusão da compilação APK foram verificadas. O download APK foi cancelado/expirou, e a instalação/execução Android continua pendente.

Nesta revisão, não foi iniciado servidor local: o ambiente gerenciado está sem a habilidade control-browser exigida pelo fluxo Sites. Não considerar o teste DOM uma avaliação visual. O relatório separa explicitamente essas evidências.

## Conferir a exportação real do MIT

`python tools/ventilador/validar-exportacao-mit.py --historico-02` compara a referência 0.2 com a exportação anterior: 572 blocos/IDs e Designer preservados. Sem a opção, compara a nova exportação 0.3 com a nova fonte: 224 blocos/IDs, cinco procedimentos e Designer preservados. O MIT regrava metadados de namespace/projeto. A exportação histórica 0.2 registra Android 1.0/code 1; a exportação atual 0.3 confere como 0.3-experimental/code 3. A compilação concluída no editor não comprova o download ou funcionamento Android.

## Revisão 0.3 — correção validada antes da simplificação

Clone local isolado, sem sincronização remota. O commit `6133cb8` corrige somente Desligar: o reenvio de 0 mantém o prazo original e verifica expiração antes de enviar. Depois, a refatoração extrai cinco procedimentos e reduz 572 para 224 blocos; dez eventos, cinco globais, componentes/UUIDs e proteções permanecem. Os 20.000 passos de comparação são simulados, não Android.

```sh
python tools/ventilador/validar-arquivos.py
python tools/ventilador/comparar-modelos.py
python tools/ventilador/validar-exportacao-mit.py
python tools/ventilador/validar-exportacao-mit.py --historico-02
node --test tools/ventilador/pacote.test.cjs
```

A importação no novo projeto VentiladorMBB03, reexportação e compilação APK ocorreram no MIT. Metadados 0.3-experimental/code 3 e título Ventilador MbB conferidos. Download APK falhou; nenhum Android/hardware executado. Capturas reais separadas dos diagramas conceituais. O app exige checkpoint 3; sketches preservados.

### Reversão seletiva local

Antes de editar, foram registrados os hashes iniciais e preservados clone/entrega 0.2. Para reavaliar o estado antigo, use outra cópia na baseline `f3ebc917…`. Para desfazer um grupo de mudanças 0.3, use `git revert SHA_DO_COMMIT` em branch de avaliação limpa e revise conflitos. Não faça reset, força, exclusão de commits nem restauração ampla sobre mudanças do professor. O inventário da entrega registra cada arquivo alterado e seus hashes anteriores/posteriores.

### Empacotamento e conferência após disponibilização

Monte uma pasta nova, preserve a 0.2 e nunca use a prévia sanitizada como fonte de produção. `python tools/ventilador/empacotar-validar.py criar PASTA NOVO.zip --entrega` gera manifesto, ZIP provisório, verifica todas as entradas/CRC/SHA e só então finaliza. Não sobrescreve ZIP existente. `validar NOVO.zip --entrega` permite conferir o arquivo novamente sem editar seu conteúdo. Use também `unzip -t` em outro processo. Depois de disponibilizar, obtenha novamente os bytes e repita tamanho, SHA, abertura, descompressão e manifesto. Guarde o comprovante externo, pois inseri-lo no próprio ZIP alteraria seu hash.

A pasta `referencias/revisao-02` do pacote preserva integralmente os 1.044 conteúdos e manifesto da entrega anterior, sem corrigir textos históricos. O ZIP anterior recebido era truncado; não é a fonte de recuperação. A revisão 0.3 usa a pasta íntegra comprovada.

## Revisão editorial 0.3.1

Continuação isolada a partir de `80b5c2154f0a7936c82c28c15ef8cf00e9d7bf53`, branch local `feature/ventilador-revisao-031`. A versão do aplicativo continua 0.3-experimental/code 3: AIA, XML, Designer e sketches foram preservados byte a byte. A aula agora ensina variáveis e procedimentos antes dos eventos, explicita a limpeza da lista de aparelhos, a exceção do reenvio de 0 e as verificações de conexão no Timer. O relatório atual da entrega distingue a nova tentativa MIT das evidências históricas.

Execute os testes na fonte recuperada pelo bundle, e não em `previa-local/`: a prévia tem conta e Firebase substituídos deliberadamente e não contém o histórico Git. Para regenerar o portátil, use também a fonte recuperada; exportar a partir de uma página já sanitizada acrescentaria uma segunda política CSP.
