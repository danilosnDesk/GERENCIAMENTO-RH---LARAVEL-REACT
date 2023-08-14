<?php

namespace App\Http\Controllers\Api;

use Illuminate\Hashing\BcryptHasher;
use App\Http\Controllers\Controller;
use App\Http\Requests\LoginRequest;
use App\Http\Requests\SignupRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class AuthController extends Controller
{

    public function signup (SignupRequest $request){

        $data = $request->validated();

        $user = User::create([

            'firstName' => $data['firstName'],
            'lastName' => $data['lastName'],
            'email' => $data['email'],
            'password' => bcrypt($data['password']),

        ]);

        $token = $user->createToken('main')->plainTextToken;

        return response(compact('token','user'));


    }

    public function login (LoginRequest $request){

        $credentials = $request->validated();

        if (Auth::attempt($credentials)) {

        $user = Auth::user();
        $token = $user->createToken('main')->plainTextToken;

        return response(compact('user', 'token'));

        }else{
            return response([
                'mensagem' => 'Dados irreconhecíves',
            ], 422);
        }
    }

    public function logout (Request $request){
        $user = $request->user();

        $user->currentAccessToken->delete;
        return response('', 204);

    }
}
