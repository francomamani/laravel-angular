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