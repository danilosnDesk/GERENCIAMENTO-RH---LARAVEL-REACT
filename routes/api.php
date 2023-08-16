<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\AuthController;
use App\http\Controllers\Api\FuncionarioController;

Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request)  {return $request->user();});
    Route::post('/logout', [AuthController::class, 'logout']);
    Route::apiResource('funcionarios', FuncionarioController::class);

});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);



