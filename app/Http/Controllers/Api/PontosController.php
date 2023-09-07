<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Pontos;
use App\Models\Funcionario;
use App\Http\Resources\PontosResource;
use App\Http\Resources\FuncionarioResource;



class PontosController extends Controller
{


   public function index(Request $request)
    {

        $ano = $request->query('ano'); // Ano desejado
        $mes = $request->query('mes'); // Mês desejado
        $funcionarioId = $request->query('funcionario_id'); // ID do funcionário
        $active = $request->query('active'); // entrada
        $off = $request->query('off'); // saida
        $done = $request->query('done'); // off

        $query = Pontos::query();

        if ($ano) {
            $query->whereYear('created_at', $ano);
        }

        if ($mes) {
            $query->whereMonth('created_at', $mes);
        }

        if ($funcionarioId) {
            $query->where('id_funcionario', $funcionarioId);
        }

        if ($active) {
           $query->whereNotNull('entrada')->whereNull('saida');
        }

        if ($done) {
           $query->whereNotNull('entrada')->whereNotNull('saida');
        }

        if ($off) {

            $funcionariosComPontosHoje = Pontos::whereDate('created_at', now()->format('Y-m-d'))
            ->pluck('id_funcionario')
            ->toArray();


            $funcionariosSemPontosHoje = Funcionario::whereNotIn('id', $funcionariosComPontosHoje)->get();

            return FuncionarioResource::collection($funcionariosSemPontosHoje);
        }


        if (!$ano && !$mes && !$off) {
            $query->whereDate('created_at', now()->format('Y-m-d'));
        }


        $query->orderBy('created_at', 'asc');
        $pontos = $query->get();

        return PontosResource::collection($pontos);
    }

    public function store(Request $request)
    {
        $validated = $request->valudated($request);
        require response($validated);
    }


    public function show(string $id)
    {
        //
    }


    public function update(Request $request, string $id)
    {
        //
    }


    public function destroy(string $id)
    {
        //
    }
}
