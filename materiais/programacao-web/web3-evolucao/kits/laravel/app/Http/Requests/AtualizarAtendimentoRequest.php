<?php
namespace App\Http\Requests;
use Illuminate\Foundation\Http\FormRequest;

class AtualizarAtendimentoRequest extends FormRequest
{
    public function authorize(): bool { return $this->user()?->can('alterar-atendimento') === true; }
    public function rules(): array
    {
        return ['nome' => ['required','string','max:100'], 'aberto' => ['required','boolean'],
            'minutos' => ['nullable','integer','min:0','max:240']];
    }
    public function messages(): array
    {
        return ['nome.required' => 'Informe o nome do Café.', 'minutos.integer' => 'Informe minutos inteiros.',
            'minutos.max' => 'O limite combinado para este formulário é 240 minutos.'];
    }
}
