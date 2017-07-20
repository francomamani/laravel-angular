<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
//*URI - uniform resource Identifier - GET POST PUT DELETE
//URL - Uniform Resource Location - GET



Route::post('autenticar', 'AutenticacionController@autenticar');
Route::post('registrar', 'AutenticacionController@registrar');

Route::group(['middleware' => 'jwt-auth'], function(){

	Route::resource('publicaciones', 'PublicacionController');
	Route::get('publicaciones_eliminadas', 'PublicacionController@eliminadosLogicamente');
	Route::get('publicaciones_todo', 'PublicacionController@getAll');
	Route::get('publicaciones_eliminado_logicamente/{id}', 'PublicacionController@eliminadoLogicamente');
	Route::get('publicaciones_restaurar/{id}', 'PublicacionController@restaurar');
	Route::get('publicaciones_paginacion', 'PublicacionController@paginacion');
	Route::get('publicaciones_titulo/{titulo}', 'PublicacionController@porTitulo');
	Route::get('publicaciones_contenido/{contenido}', 'PublicacionController@porContenido');
	Route::get('publicaciones_fechas/{inicio}/{fin}', 'PublicacionController@entreFechas');

	Route::resource('publicaciones.comentarios', 'PublicacionComentarioController');
	Route::resource('comentarios', 'ComentarioController');
	Route::get('num_comentarios/{publicacion_id}', 'PublicacionComentarioController@numComentarios');
	Route::get('suma/{publicacion_id}', 'PublicacionComentarioController@sumPublicacionComentarioId');
	Route::get('promedio/{publicacion_id}', 'PublicacionComentarioController@promedio');


});
//150 X
//15 bien
Route::get('sumar/{a}/{b?}', function($a, $b = 5) {
	return $a + $b;
})->where(['a'=>'\d{1,2}', 'b'=>'\d{1,2}']);
Route::get('es_numero/{cadena}', 'ExpRegularesController@esNumero');
Route::get('es_email/{cadena}', 'ExpRegularesController@esCorreoElectronico');
Route::get('es_decimal/{cadena}', 'ExpRegularesController@esDecimal');
Route::get('es_fecha/{cadena}', 'ExpRegularesController@esFecha');
Route::get('es_hora/{cadena}', 'ExpRegularesController@esHora');


