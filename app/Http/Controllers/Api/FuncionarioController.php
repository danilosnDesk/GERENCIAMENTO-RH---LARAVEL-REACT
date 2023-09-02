<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Funcionario;
use App\Http\Resources\FuncionarioResource;
use App\Http\Requests\StoreFuncionarioRequest;

class FuncionarioController extends Controller
{

    public function index()
    {
        return FuncionarioResource::collection(Funcionario::query()->orderBy('id','desc')->paginate(2));
    }


    public function store(StoreFuncionarioRequest $request)
    {
        $dados = $request->validated();

        Funcionario::create($dados);

        return response([], 201);

    }


    public function show(string $id)
    {
         return new FuncionarioResource(Funcionario::where('id',$id)->first());
    }


    public function update(Request $request, string $id)
    {
         return response([
            "mensagem" => 'update'
        ], 200);
    }


    public function destroy($id)
    {

        $funcionario= Funcionario::find($id);
        $funcionario->delete($funcionario);

         return response([
            "mensagem" => 'destroid',
            "ID" => $id
        ], 200);
    }
}
