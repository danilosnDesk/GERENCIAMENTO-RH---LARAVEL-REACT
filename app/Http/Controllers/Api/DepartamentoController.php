<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Departamento;
use DB;
use App\Http\Resources\DepartamentoResource;
use App\Http\Requests\DepartamentoRequest;

class DepartamentoController extends Controller
{
    public function index()
    {
        return DepartamentoResource::collection(Departamento::all());
    }

    public function departamanto_funcionarios()
    {
        $data =Departamento::with('funcionarios')->get();
        foreach ($data as $dep) {
            if ($dep->funcionarios->count()) {
                $det_names[] = $dep->name;
                $det_total_func[] = $dep->funcionarios->count();
            }
        }
        return response(compact('det_names','det_total_func'),200);
    }



    public function store(DepartamentoRequest $request)
    {
         $dados = $request->validated();

         Departamento::create($dados);

         return response([
            "mensagem" => "Criado",
         ], 201);

    }


    public function show($id)
    {
         return new DepartamentoResource(Departamento::where('id',$id)->first());
    }


    public function update(DepartamentoRequest $request, string $id)
    {
         $dados = $request->validated();
         $departamento = Departamento::find($id);
         $departamento->update($dados);
         return response([
            "mensagem" => "updated",
         ], 200);
    }


    public function destroy(string $id)
    {
        //
    }
}
