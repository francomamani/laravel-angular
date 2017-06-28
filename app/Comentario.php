<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
//use App\Publicacion;
class Comentario extends Model
{
	protected $table = "comentarios";
	protected $fillable = [
		'publicacion_id',		
		'contenido'		
	];
	public function publicacion()
	{
		return $this->belongsTo('App\Publicacion');
	}
}