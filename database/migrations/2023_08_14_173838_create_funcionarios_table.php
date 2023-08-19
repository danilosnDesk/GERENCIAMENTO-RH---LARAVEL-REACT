<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{

    public function up(): void
    {
        Schema::create('funcionarios', function (Blueprint $table) {

            $table->id();
            $table->string('nome');
            $table->date('data_entrada');
            $table->string('cargo');
            $table->decimal('salario', 10, 2);
            $table->unsignedBigInteger('id_departamento');
            $table->string('telefone')->nullable();
            $table->string('email')->nullable();
            $table->timestamps();
            $table->foreign('id_departamento')
            ->references('id')
            ->on('departamentos')
            ->onDelete('cascade')
            ->onUpdate('cascade');

        });
    }


    public function down(): void
    {
        Schema::dropIfExists('funcionarios');
    }
};
