<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FuncionarioResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $salario = $this->salario;
        $salario= number_format($salario, 2,',','.');

        return [
            'id' => $this->id,
            'nome' => $this->nome,
            'data_entrada' => $this->data_entrada,
            'cargo' => $this->cargo,
            'salario' => $salario,
            'email' => $this->email,
            'departamento' => [
               'nome' => $this->departamento->name,
            ] ,
        ];
    }
}
