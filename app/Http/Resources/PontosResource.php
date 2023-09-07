<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Carbon\Carbon;


class PontosResource extends JsonResource
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
            'ano_Ponto' => $this->created_at->format('Y'),
            'mes_Ponto' => $this->created_at->format('m'),
            'dia_Ponto' => $this->created_at->format('d'),
            'entrada' => $this->entrada ? Carbon::createFromFormat('Y-m-d H:i:s', $this->entrada)->format('H:i:s') : null,
            'saida' => $this->saida ? Carbon::createFromFormat('Y-m-d H:i:s', $this->saida)->format('H:i:s') : null,
            'funcionario' => new FuncionarioResource($this->funcionario),

        ];

    }
}
