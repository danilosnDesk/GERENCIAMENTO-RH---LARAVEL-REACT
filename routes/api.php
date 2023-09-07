<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\AuthController;
use App\http\Controllers\Api\FuncionarioController;
use App\http\Controllers\Api\DepartamentoController;
use App\http\Controllers\Api\PontosController;

// Authentication
Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);

// Authenticated rule 1
Route::middleware('auth:sanctum')->group(function () {
    Route::get('/user', function (Request $request)  {return $request->user();});
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::get('/departamanto_funcionarios', [DepartamentoController::class , 'departamanto_funcionarios']);
    Route::apiResource('/funcionarios', FuncionarioController::class);
    Route::apiResource('/departmentos', DepartamentoController::class);
    Route::apiResource('/pontos', PontosController::class);


});
