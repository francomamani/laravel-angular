<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Publicacion;
class PublicacionController extends Controller
{
    /**
     * Display a listing of the resource.
     * VERBO HTTP: GET
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //recupera la lista de todos los registro de publicacioones
        return response()->json(Publicacion::orderBy('id', 'desc')->get());
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
     * VERBO HTTP: POST
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $publicacion = Publicacion::create($request->all());
        return response()->json($publicacion);
    }

    /**
     * Display the specified resource.
     * VERBO HTTP: GET - UN RECURSO
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return response()->json(Publicacion::find($id));
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
     * VERBO HTTP: PUT
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $publicacion = Publicacion::find($id);
        $publicacion->update($request->all());
        return response()->json($publicacion);
    }

    /**
     * Remove the specified resource from storage.
     * VERBO HTTP: DELETE 
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        $publicacion = Publicacion::find($id);
        $publicacion->delete();
        return response()->json([
            'exito' => 'Publicacion eliminada con id: ' . $publicacion->id
        ]);
    }
    public function eliminadosLogicamente()
    {
        return response()->json(Publicacion::onlyTrashed()->get());
    }
    public function getAll()
    {
        return response()->json(Publicacion::withTrashed()->get());
    }
    public function eliminadoLogicamente($id)
    {
        $publicacion = Publicacion::withTrashed()->find($id);
        if ($publicacion->trashed()) {
            return response()->json([
                'eliminado' => true 
            ]);
        }else{
            return response()->json([
                'eliminado' => false 
            ]);            
        }
    }
    public function restaurar($id)
    {
        $publicacion = Publicacion::onlyTrashed()->find($id);
        $publicacion->restore();
        return response()->json($publicacion);            
    }

    public function paginacion()
    {
        return response()->json(Publicacion::paginate(4));            
    }

    public function porTitulo($titulo)
    {
        return response()->json(Publicacion::where('titulo', $titulo)->get());            
    }
    public function porContenido($contenido)
    {
        $publicaciones = Publicacion::where('contenido', 'like', '%' . $contenido . '%')->get();
        return response()->json($publicaciones);            
    }
    public function entreFechas($inicio, $fin)
    {
        $publicaciones = Publicacion::whereBetween('created_at', [$inicio, $fin])->get();
        return response()->json($publicaciones);
    }
}
