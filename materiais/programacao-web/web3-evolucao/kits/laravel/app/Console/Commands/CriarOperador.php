<?php
namespace App\Console\Commands;
use App\Models\User;
use Illuminate\Console\Command;

class CriarOperador extends Command
{
    protected $signature = 'cafe:operador {email}';
    protected $description = 'Cria o operador fictício local sem incluir credenciais no download';
    public function handle(): int
    {
        $email = $this->argument('email');
        if (!filter_var($email, FILTER_VALIDATE_EMAIL)) { $this->error('Informe um e-mail válido para o exercício.'); return self::FAILURE; }
        if (User::where('email',$email)->exists()) { $this->error('Esse usuário já existe; não alterei sua senha.'); return self::FAILURE; }
        $senha = $this->secret('Escolha uma senha local com pelo menos 12 caracteres');
        if (!is_string($senha) || strlen($senha)<12) { $this->error('Senha curta; usuário não criado.'); return self::FAILURE; }
        User::create(['name'=>'Operador do Café','email'=>$email,'password'=>$senha,'papel'=>'operador']);
        $this->info('Operador criado. A senha não foi impressa nem incluída nos arquivos.');
        return self::SUCCESS;
    }
}
