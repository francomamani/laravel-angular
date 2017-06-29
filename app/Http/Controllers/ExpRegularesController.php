<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class ExpRegularesController extends Controller
{
	public function esNumero($cadena)
	{
		if (preg_match('/^\d+$/', $cadena)) {
			return response()->json(['numero'=>true]);
		}else{
			return response()->json(['numero'=>false]);			
		}
/*		preg_match('/\d+/', $cadena, $coincidencias, PREG_OFFSET_CAPTURE);
		return response()->json($coincidencias);*/
	}
	public function esCorreoElectronico($cadena)
	{
		if (preg_match('/^[a-z]{3,}@[a-z]{3,}\.(com|org|net)$/', $cadena)) {
			return response()->json(['email'=>true]);
		}else{
			return response()->json(['email'=>false]);			
		}

		//hola@gmail.com
/*		preg_match('/[a-z]{3,}@[a-z]{3,}\.(com|org|net)/', $cadena, $coincidencias, PREG_OFFSET_CAPTURE);
		return response()->json($coincidencias);*/
	}
	/*
		0.10
		156.00
		148.56
	*/
	public function esDecimal($cadena)
	{
		if (preg_match('/^\d+\.\d{2}$/', $cadena)) {
			return response()->json(['decimal'=>true]);
		}else{
			return response()->json(['decimal'=>false]);			
		}
	}
	/*
		dd-mm-aaaa
		16-05-1990
	*/
	public function esFecha($cadena)
	{
		if (preg_match('/^(0[1-9]|[12]\d|3[01])-(0[1-9]|1[0-2])-(1989|2000|199\d)$/', $cadena)) {
			return response()->json(['fecha'=>true]);
		}else{
			return response()->json(['fecha'=>false]);			
		}
	}
	public function esHora($cadena)
	{
		if (preg_match('/^([01]\d|2[0-3]):[0-5]\d:[0-5]\d$/', $cadena)) {
			return response()->json(['hora'=>true]);
		}else{
			return response()->json(['hora'=>false]);			
		}
	}
}
