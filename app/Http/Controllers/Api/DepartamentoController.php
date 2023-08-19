<?php

namespace App\Http\Controllers\api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Departamento;
use App\Http\Resources\DepartamentoResource;

class DepartamentoController extends Controller
{
    public function index()
    {
        return DepartamentoResource::collection(Departamento::all());

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
