<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Departamento extends Model
{
    use HasFactory;


     protected $fillable = [
        'nome',
    ];

    public function responsaveis()
    {
        return $this->hasMany(DepartamentoResponsavel::class, 'id_departamento', 'id');
    }
    public function funcionarios()
    {
        return $this->hasMany(Funcionario::class, 'id_departamento', 'id');
    }

}
