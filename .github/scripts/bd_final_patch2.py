from pathlib import Path
import re, subprocess

path = Path('pages/bancodedados.html')
s = path.read_text(encoding='utf-8')
assert subprocess.check_output(['git','hash-object',str(path)], text=True).strip() == 'a2f6860f695d32e55fe376f52a70094ed4587eb2'


def once(old,new,label):
    global s
    assert s.count(old) == 1, f'{label}: {s.count(old)}'
    s = s.replace(old,new,1)


def sub_once(pattern,repl,label):
    global s
    s2,n = re.subn(pattern,repl,s,count=1,flags=re.S)
    assert n == 1, f'{label}: {n}'
    s = s2

once(
'<div class="card note"><div class="card-body"><h3>Regra dos laboratórios: preserve a base de referência</h3><p>O banco <code>comercio</code> será reutilizado nos próximos capítulos. Por isso, exemplos que alteram dados reais devem terminar deixando a base novamente em um estado conhecido. Neste módulo faremos isso de três formas: <strong>ROLLBACK</strong> quando a alteração for apenas teste, <strong>registro temporário + limpeza</strong> quando for necessário praticar INSERT/DELETE, ou um <strong>banco/tabela de laboratório separado</strong> quando a experiência precisar permanecer.</p></div></div>',
'<div class="card note"><div class="card-body"><h3>Regra dos laboratórios: preserve a base de referência</h3><p>O banco <code>comercio</code> será reutilizado nos próximos capítulos. Por isso, exemplos que alteram dados devem terminar deixando a base novamente em um estado conhecido. Enquanto ainda estamos aprendendo SQL básico, usaremos principalmente <strong>registros temporários + limpeza</strong> ou <strong>tabelas de laboratório separadas</strong>. No Capítulo 7, depois de aprender transações, também usaremos <strong>ROLLBACK</strong> para desfazer testes com segurança.</p></div></div>',
'política gradual')

once('<div class="card warning"><div class="card-body"><h3>DDL não é um Ctrl+Z</h3><p>ALTER TABLE, DROP TABLE e outros comandos de definição podem causar <strong>commit implícito</strong> no MySQL. Por isso o laboratório usa uma tabela descartável: não conte com ROLLBACK para desfazer mudanças de estrutura.</p></div></div>',
'<div class="card warning"><div class="card-body"><h3>Mudança de estrutura não é um Ctrl+Z</h3><p>ALTER TABLE, DROP TABLE e outros comandos que mudam a estrutura podem causar <strong>commit implícito</strong> no MySQL. Por isso o laboratório usa uma tabela descartável. Mais adiante, quando estudarmos transações, veremos por que não devemos contar com ROLLBACK para recuperar uma estrutura removida.</p></div></div>',
'sem sigla DDL')

sub_once(
r'<h2>BLOCO 12 — UPDATE: alterando registros</h2>.*?(?=<h2>BLOCO 13 — DELETE: removendo registros</h2>)',
'''<h2>BLOCO 12 — UPDATE: alterando registros</h2>
<p>UPDATE modifica dados existentes. O uso do WHERE é essencial. Para praticar sem alterar um produto real da base, criaremos um registro temporário apenas para este teste.</p>
<div class="codebox"><button class="copy-btn" type="button">Copiar UPDATE seguro</button><pre><code>INSERT INTO produto
(id_produto, descricao, preco, qtde, id_categoria, estoque_minimo)
VALUES
(1001, 'PRODUTO TEMPORARIO UPDATE', 5, 1, 3, 0);

SELECT *
FROM produto
WHERE id_produto = 1001;

UPDATE produto
SET preco = 6
WHERE id_produto = 1001;

SELECT *
FROM produto
WHERE id_produto = 1001;

-- limpeza do laboratório
DELETE FROM produto
WHERE id_produto = 1001;</code></pre></div>
<div class="card problem"><div class="card-body"><h3>Cuidado</h3><p>UPDATE sem WHERE altera todos os registros da tabela. Em um banco real, isso pode causar grande impacto.</p></div></div>
<div class="card note"><div class="card-body"><h3>Por que usamos um produto temporário?</h3><p>O objetivo é aprender UPDATE sem modificar a base que será usada nos capítulos seguintes. O comando DELETE usado apenas para limpeza será explicado detalhadamente no próximo bloco.</p></div></div>
''',
'UPDATE temporário')

sub_once(
r'<h2>BLOCO 14 — FOREIGN KEY: integridade referencial real</h2>.*?(?=<h2>BLOCO 15 — JOIN: unindo tabelas relacionadas</h2>)',
'''<h2>BLOCO 14 — FOREIGN KEY: integridade referencial real</h2>
<p>A FOREIGN KEY é a implementação física do relacionamento entre tabelas. Ela impede referências para registros que não existem. Usaremos um produto temporário e o removeremos ao final.</p>
<div class="codebox"><button class="copy-btn" type="button">Copiar teste de integridade</button><pre><code>-- deve funcionar: categoria 3 existe
INSERT INTO produto
(id_produto, descricao, preco, qtde, id_categoria, estoque_minimo)
VALUES
(900001, 'PRODUTO TESTE', 5, 10, 3, 5);

-- deve falhar: categoria 999 não existe
INSERT INTO produto
(id_produto, descricao, preco, qtde, id_categoria, estoque_minimo)
VALUES
(900002, 'PRODUTO INVALIDO', 5, 10, 999, 5);

-- deve funcionar: produto e fornecedor existem
INSERT INTO produto_fornecedor (id_produto, id_fornecedor)
VALUES (900001, 4);

-- deve falhar: fornecedor 999 não existe
INSERT INTO produto_fornecedor (id_produto, id_fornecedor)
VALUES (900001, 999);

-- limpeza dos testes válidos
DELETE FROM produto_fornecedor
WHERE id_produto = 900001;

DELETE FROM produto
WHERE id_produto = 900001;</code></pre></div>
<p>Os comandos inválidos são rejeitados pelas restrições. Os dois DELETEs finais removem somente os registros de laboratório que foram aceitos, preservando a base <code>comercio</code>.</p>
<div class="card solution"><div class="card-body"><h3>O erro é parte do laboratório</h3><p>Quando a FK ou o CHECK bloqueia um dado inválido, o banco está fazendo exatamente o que foi modelado: protegendo integridade.</p></div></div>
''',
'integridade temporária')

sub_once(
r'<details class="exercise-item"><summary>4G — UPDATE seguro</summary>.*?</details>',
'''<details class="exercise-item"><summary>4G — UPDATE seguro</summary><div class="exercise-content"><ol><li>Crie um produto temporário reservado para o exercício.</li><li>Consulte o registro e anote seu preço.</li><li>Atualize somente esse produto com UPDATE + WHERE.</li><li>Consulte novamente para confirmar a mudança.</li><li>Remova o registro temporário ao terminar.</li><li>Explique por que praticar em um registro temporário é mais seguro que alterar um produto real da base.</li><li>Explique o risco de UPDATE sem WHERE.</li></ol></div></details>''',
'exercício 4G gradual')

path.write_text(s, encoding='utf-8')

s = path.read_text(encoding='utf-8')
assert 'START TRANSACTION;' not in re.search(r'<section class="module" id="mod-sql">.*?</section>\s*<section class="module" id="mod-joins">', s, flags=re.S).group(0)
assert 'DDL não é um Ctrl+Z' not in s
assert 'PRODUTO TEMPORARIO UPDATE' in s
assert 'limpeza dos testes válidos' in s
print('AUTocrítica final OK')
