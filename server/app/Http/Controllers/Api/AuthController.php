<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Responses\ApiResponse;
use Illuminate\Http\JsonResponse;
use Illuminate\Http\Request;

class AuthController extends Controller
{
    public function register(Request $request): JsonResponse
    {
        return ApiResponse::message('Register endpoint placeholder.', 501);
    }

    public function login(Request $request): JsonResponse
    {
        return ApiResponse::message('Login endpoint placeholder.', 501);
    }

    public function logout(Request $request): JsonResponse
    {
        return ApiResponse::message('Logout endpoint placeholder.', 501);
    }
}
