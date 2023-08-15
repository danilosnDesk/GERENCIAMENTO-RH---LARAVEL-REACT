<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DepartamentoResponsavel extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_funcionario',
        'id_departamento',
    ];

    public function funcionario()
    {
        return $this->belongsTo(Funcionario::class, 'id_funcionario');
    }
    // Relação com o departamento
    public function departamento()
    {
        return $this->belongsTo(Departamento::class, 'id_departamento');
    }
}
