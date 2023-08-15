<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Funcionario extends Model
{
    use HasFactory;

    protected $fillable = [
        'nome',
        'data_entrada',
        'cargo',
        'salario',
        'id_departamento',
        'telefone',
        'email',
    ];

    // Relação com o departamento
    public function departamento()
    {
        return $this->belongsTo(Departamento::class, 'id_departamento');
    }
}
