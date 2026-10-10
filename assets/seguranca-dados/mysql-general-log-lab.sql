-- MBB: exercício de log (APENAS MySQL de laboratório isolado).
-- Altera variáveis globais e requer permissão; NÃO execute em produção.
-- Execute na mesma conexão; em caso de erro, rode a restauração final.

-- Salve o estado inicial no MySQL ISOLADO de laboratório (mesma conexão).
SET @mbb_general_original = @@GLOBAL.general_log;
SET @mbb_saida_original = @@GLOBAL.log_output;
SELECT @mbb_general_original AS log_anterior,
       @mbb_saida_original AS saida_anterior;

-- Somente em laboratório isolado e com autorização:
SET GLOBAL general_log = 'OFF';
SET GLOBAL log_output = 'TABLE';
SET GLOBAL general_log = 'ON';

SELECT NOW();
SELECT 'Mundo bit Byte' AS origem;

SELECT event_time, user_host, command_type, argument
FROM mysql.general_log
ORDER BY event_time DESC
LIMIT 20;

-- RESTAURAÇÃO OBRIGATÓRIA: execute na mesma conexão,
-- inclusive se algum comando de observação falhar.
SET GLOBAL general_log = 'OFF';
SET GLOBAL log_output = @mbb_saida_original;
SET GLOBAL general_log = @mbb_general_original;

-- Confira os valores com os do primeiro SELECT.
SHOW VARIABLES LIKE 'general_log';
SHOW VARIABLES LIKE 'log_output';
