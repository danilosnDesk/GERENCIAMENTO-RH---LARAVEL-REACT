<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class FuncionarioRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'nome' => 'required',
            'email' => 'required|unique:funcionarios,email',
            'cargo' => 'required',
            'salario' => 'numeric',
            'telefone' => 'max:12',
            'data_entrada' => 'date',
        ];
    }
}
