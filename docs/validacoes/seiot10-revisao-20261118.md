# Revisão controlada — Tópico 10, Projeto IoT (18/11/2026)

## Base protegida
- `main` no início da auditoria: `743f0a89157613aafc906e5ecdb766c5b0d3fd90`.
- Etapas inspecionadas e preservadas: 10.1 problema e requisitos; 10.2 arquitetura; 10.3 teste local; 10.4 aplicação Web; 10.5 integração; 10.6 segurança; 10.7 testes e entrega.
- Os dois códigos Arduino (`b10-local` e `b10-final`), rotas HTTP, direção de leitura de LDR em Wokwi e na placa física, explicações elétricas, provas de falha de rede e requisitos de entrega foram mantidos sem edição.
- Não foram modificadas aulas 1–9, diagramas existentes de outros tópicos nem arquivos de módulos externos.

## Oito perspectivas da revisão circular e em espiral
1. **Problema:** controlar luz desnecessária e disponibilizar um painel local, sem afirmar que o LED representa carga elétrica real.
2. **Conceitos:** LDR como divisor físico ou módulo fotoresistor do Wokwi, ADC1 no GPIO 34, LED no GPIO 23, limiar calibrado, modo manual/automático e servidor HTTP.
3. **Prática:** identificada lacuna de autonomia na montagem Wokwi, pois o roteiro anterior não fornecia o diagrama inteiro copiável. Criado `wokwi/ambiente-inteligente/diagram.json` com quatro partes e oito ligações.
4. **Roteiro:** acrescentado quadro 10.2 com passo a passo para selecionar a aba `diagram.json`, colar o circuito e manter o programa Arduino exclusivamente em `sketch.ino`.
5. **Leitura:** disponibilizado `diagram.json` completo em bloco `pre` e botão **Copiar**, além de link para o arquivo original no repositório.
6. **Evidência:** a montagem do circuito é distinta da execução. O aluno precisa verificar sensor, LED e Serial antes de tentar acesso Web; o gateway público do Wokwi não recebe conexões de entrada ao ESP32.
7. **Regressão:** `tests/seiot10/validar.mjs` garante que o JSON da página é exatamente o mesmo do arquivo original, verifica peças e pinos e preserva os códigos; `tests/seiot10/navegador.cjs` verifica cópia e layout móvel/desktop.
8. **Integração:** workflow de CI específica executa testes de conteúdo, a lógica C++ com hardware simulado e navegador Chromium. A pesquisa global deve ser sincronizada de forma controlada e validada antes de publicar.

## Limites
A inspeção estática do diagrama valida estrutura, IDs, referências e pinagem pretendida. **Ela não substitui abrir a simulação Wokwi e ver a atuação real.** O teste C++ existente utiliza interfaces simuladas no computador, não uma placa física. Nenhuma avaliação com alunos ou teste com rede/hardware real foi realizada nesta etapa.
