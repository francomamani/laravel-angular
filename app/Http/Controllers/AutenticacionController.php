<?php

namespace App\Http\Controllers;

use JWTAuth;
use Tymon\JWTAuth\Exceptions\JWTException;
use Illuminate\Http\Request;
use App\User;
class AutenticacionController extends Controller
{
	public function autenticar(Request $request)
	{
		$credenciales = $request->only('email', 'password');
		try{
			if (!$token = JWTAuth::attempt($credenciales)) {
				return response()->json(['error'=>'credenciales_invalidas'], 401);
			}
		}catch(JWTException $e){
			return response()->json(['error'=> 'no_se_creo_el_token', 500]);
		}
		return response()->json(['token'=>$token], 201);
	}

	public function registrar(Request $request)
	{
		$usuario = User::create([
					'name' => $request->input('name'),
					'email' => $request->input('email'),
					'password' => bcrypt($request->input('password'))
				]);
		$token  = JWTAuth::fromUser($usuario);
		return response()->json(['token'=>$token], 201);

	}
}
