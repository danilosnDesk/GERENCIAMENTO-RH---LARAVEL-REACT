<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Departamento;
use DB;
use App\Http\Resources\DepartamentoResource;

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



    public function store(Request $request)
    {
        //
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
