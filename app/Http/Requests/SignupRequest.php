<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rules\Password;

class SignupRequest extends FormRequest
{

    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array|string>
     */
    public function rules(): array
    {
        return [
            'firstName' => 'required|string|',
            'lastName' => 'required|string',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                 Password::min(8)
                    ->letters()
                    ->symbols()
            ]
        ];
    }
}
