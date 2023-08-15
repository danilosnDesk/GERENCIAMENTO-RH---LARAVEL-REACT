<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Funcionario;
use App\Models\Departamento;
;


/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\DepartamentoResponsavel>
 */
class DepartamentoResponsavelFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
        'id_funcionario'=> Funcionario::pluck('id')->random(),
        'id_departamento' => Departamento::pluck('id')->random(),
        ];
    }
}
