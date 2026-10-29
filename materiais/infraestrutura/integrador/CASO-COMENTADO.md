# Exemplo de raciocínio, sem execução declarada

“Nome resolve e página não abre” reduz a suspeita de ausência total de DNS, mas
pode haver resposta apontando para IP errado. Primeiro compare IP com o registro.
Se correto, compare HTTP local no servidor e cliente autorizado; ss -ltn,
configuração Nginx, rota e UFW ajudam a separar escuta e caminho. Altere uma variável.

“Leitura funciona e escrita não” pode ser espaço, identidade ou permissão.
Não conclua que o servidor inteiro está indisponível. Peça a mensagem exata e
verifique filesystem/caminho e identidade. Sem essas evidências, a decisão
correta pode ser continuar observando, não fazer uma alteração.

Passagem adequada: informa o que se sabe, a fonte, o que falta, o próximo teste
e seu responsável. A análise de exemplo não substitui um teste no ambiente recebido.
