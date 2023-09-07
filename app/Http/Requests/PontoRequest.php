<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class PontoRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'id_funcionario' => 'required|exists:Funcionarios,id',
            'entrada' => 'required|date',
            'saida' => 'required|date',
        ];
    }
}
