<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use App\Models\Departamento;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Funcionario>
 */
class FuncionarioFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $nome = $this->faker->name;

        // Transforma o nome em parte do endereço de e-mail
        $email = strtolower(str_replace(' ', '.', $nome)) . '@empresa.co.ao';

        return [
        'nome' => $nome,
        'data_entrada' =>  $this->faker->date('Y_m_d'),
        'cargo' =>  $this->faker->jobTitle(),
        'salario' =>  $this->faker->randomFloat(2, 400000, 2000000),
        'id_departamento' => Departamento::pluck('id')->random(),
        'telefone' =>  $this->faker->phoneNumber(),
        'email' =>  $email,
        ];
    }
}
