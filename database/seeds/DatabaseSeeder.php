<?php

use Illuminate\Database\Seeder;
use App\Publicacion;
use App\Comentario;
class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
    	Publicacion::create([
    	'titulo' => 'Publicacion 1',
    	'contenido' => "Esto es un contenido 1"    		
    	]);
    	Publicacion::create([
    	'titulo' => 'Publicacion 2',
    	'contenido' => "Esto es un contenido 2"    		
    	]);
    	Publicacion::create([
    	'titulo' => 'Publicacion 3',
    	'contenido' => "Esto es un contenido 3"    		
    	]);
    	Publicacion::create([
	    	'titulo' => 'Publicacion 4',
    		'contenido' => "Esto es un contenido 4"    		
    	]);    	    	
		$publicacion = Publicacion::create([
		    	'titulo' => 'Publicacion 5',
		    	'contenido' => "Esto es un contenido 5"    		
		    	]);    	    	

    	Comentario::create([
    		'publicacion_id' => $publicacion->id, 
    		'contenido' => 'Soy un comentarios'
    	]);
    	Comentario::create([
    		'publicacion_id' => $publicacion->id, 
    		'contenido' => 'Soy un comentario 2'
    	]);
    	Comentario::create([
    		'publicacion_id' => $publicacion->id, 
    		'contenido' => 'Soy un comentario 3'
    	]);
        // $this->call(UsersTableSeeder::class);
    }
}
