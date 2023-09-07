<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Funcionario;
use Carbon\Carbon;

class PontosFactory extends Factory
{
    public function definition(): array
    {
         $anoCorrente = date('Y'); // Obtém o ano corrente
        $startDate = Carbon::parse($anoCorrente . '-01-01'); // Primeiro dia do ano corrente
        $endDate = Carbon::parse($anoCorrente . '-12-31'); // Último dia do ano corrente

        $entrada = $this->faker->dateTimeBetween($startDate->format('Y-m-d H:i:s'), $endDate->format('Y-m-d H:i:s'));
        $saida = $this->faker->dateTimeBetween($entrada->format('Y-m-d H:i:s'), $endDate->format('Y-m-d H:i:s'));

        return [
            'id_funcionario' => Funcionario::pluck('id')->random(),
            'entrada' => $entrada,
            'saida' => $saida,
        ];
    }
}
