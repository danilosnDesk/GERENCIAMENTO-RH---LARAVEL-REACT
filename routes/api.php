<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\http\Controllers\Api\AuthController;

Route::middleware('auth:sanctum')->get('/user',  function (Request $request) {
    return $request->user();

});
Route::middleware('auth:sanctum')->group(function () {

    Route::get('/user', function (Request $request)  {
        return $request->user();
    });
    Route::post('/logout', [AuthController::class, 'logout']);

});

Route::post('/signup', [AuthController::class, 'signup']);
Route::post('/login', [AuthController::class, 'login']);



