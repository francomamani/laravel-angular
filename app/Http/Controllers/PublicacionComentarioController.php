<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publicacion;
use App\Comentario;
class PublicacionComentarioController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($publicacion_id)
    {
        $comentarios = Publicacion::find($publicacion_id)->comentarios()->get();
        return response()->json($comentarios);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, $publicacion_id)
    {
        $comentario = Comentario::create([
                            'publicacion_id' => $publicacion_id, 
                            'contenido' => $request->input('contenido')
                        ]);
        //Comentario::create($request->all());
        return response()->json($comentario);
    }   

    /**
     * Display the specified resource.
     * api/publicaciones/{publicacion_id}/comentarios/{comentario_id}
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($publicacion_id, $comentario_id)
    {
        $comentario = Publicacion::find($publicacion_id)->comentarios()->where('id', $comentario_id)->first();
        return response()->json($comentario);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     * api/publicaciones/{publicacion_id}/comentarios/{comentario_id}
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $publicacion_id, $comentario_id)
    {
        $comentario=Comentario::where('id', $comentario_id)
                              ->where('publicacion_id', $publicacion_id)->first();
        $comentario->update([
            'publicacion_id' => $publicacion_id, 
            'contenido' => $request->input('contenido')
        ]);
        return response()->json($comentario);
    }

    /**
     * Remove the specified resource from storage.
     * api/publicaciones/{publicacion_id}/comentarios/{comentario_id}
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($publicacion_id, $comentario_id)
    {
        $comentario = Publicacion::find($publicacion_id)->comentarios()->where('id', $comentario_id)->first();
        $comentario->delete();
        return response()->json([
            'exito' => 'Comentario eliminado con id:' . $comentario->id
        ]);
    }
    public function numComentarios($publicacion_id)
    {
        $num_comentarios = Publicacion::find($publicacion_id)->comentarios()->count();
        return response()->json([
            'num_comentarios' => $num_comentarios
        ]);
    }
    public function sumPublicacionComentarioId($publicacion_id)
    {
        $suma_comentario_id = Publicacion::find($publicacion_id)->comentarios()->sum('id');
        return response()->json([
            'suma_comentario_id' => $suma_comentario_id
        ]);
    }
    public function promedio($publicacion_id)
    {
        $promedio = Publicacion::find($publicacion_id)->comentarios()->avg('id');
        return response()->json([
            'promedio' => round($promedio, 2)
        ]);
    }    
}
