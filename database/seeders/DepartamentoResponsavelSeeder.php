<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\DepartamentoResponsavel;


class DepartamentoResponsavelSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {

        DepartamentoResponsavel::factory(20)->create();

    }
}
