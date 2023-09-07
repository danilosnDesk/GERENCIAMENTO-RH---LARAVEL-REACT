<?php

namespace Database\Seeders;

use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use App\Models\Pontos;

class Pontos extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Pontos::factory(11)->create();

    }
}
