<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('departamento_responsavels', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('id_funcionario');
            $table->unsignedBigInteger('id_departamento');
            $table->timestamps();
            $table->foreign('id_funcionario')->references('id')->on('funcionarios');
            $table->foreign('id_departamento')->references('id')->on('departamentos');
        });
    }


    public function down(): void
    {
        Schema::dropIfExists('departamento_responsaveis');
    }
};
