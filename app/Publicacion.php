<?php

namespace App;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;
//use App\Comentario;
class Publicacion extends Model
{
	use SoftDeletes;	
    protected $table = "publicaciones";
    protected $fillable = [
    	'titulo',
    	'contenido'
    ];
    protected $dates = ["deleted_at"];
    public function comentarios()
    {
    	//return $this->hasMany('Comentario');
    	return $this->hasMany('App\Comentario');
    }
}
