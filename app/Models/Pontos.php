<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Pontos extends Model
{
    use HasFactory;

    protected $fillable = [
        'id_funcionario',
        'entrada',
        'saida',
    ];

    protected $dates = [
        'entrada',
        'saida'
    ];

    public function funcionario() {
        return $this->belongsTo(Funcionario::class, 'id_funcionario');
    }
}
