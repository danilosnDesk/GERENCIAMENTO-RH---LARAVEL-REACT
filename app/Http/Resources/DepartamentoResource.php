<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class DepartamentoResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'nome' => $this->name,
           // 'criacao' => $this->created_at->format('Y-m'),
            'chefia' => FuncionarioResource::collection($this->responsaveis),
            'funcionarios' => FuncionarioResource::collection($this->funcionarios),
        ];
    }
}
