<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;


class Departamento extends Model
{
    use HasFactory;


     protected $fillable = [
        'name',
    ];

    public function responsaveis()
    {
        return $this->belongsToMany(Funcionario::class, 'departamento_responsavels', 'id_departamento', 'id_funcionario');    }

        public function funcionarios()
    {
        return $this->hasMany(Funcionario::class, 'id_departamento', 'id');
    }

}
