import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Comentario } from './comentario';

@Injectable()
export class ComentariosService {

  constructor(private http: Http) { }

  base = "http://localhost:8000/api/";

  getComentarios(){
  	return this.http.get(this.base + "comentarios")
  					.map(res => res.json().map(comentario => {
  						return new Comentario(comentario.id, comentario.publicacion_id, comentario.contenido);
  					}));
  }
  /*api/publicaciones/{id}/comentarios*/
  storeComentario(publicacion_id:number, comentario:Comentario){
  	return this.http.post(this.base + "publicaciones/"+publicacion_id+"/comentarios", comentario)
  					.map(res => {
  						let comentarioJSON = res.json();
  						return new Comentario(comentario.id, comentarioJSON.publicacion_id, comentarioJSON.contenido);
  					});
  }
  /*api/publicaciones/{id}/comentarios/{id}*/

  updateComentario(publicacion_id:number, comentario:Comentario){
    return this.http.put(this.base + "publicaciones/"+publicacion_id+"/comentarios/"+comentario.id, comentario)
                    .map(res => {
                        let comentarioJSON = res.json();
                        return new Comentario(comentario.id, comentarioJSON.publicacion_id, comentarioJSON.contenido);                        
                    });
  }
  /*api/publicaciones/{id}/comentarios/{id}*/
  deleteComentario(publicacion_id:number, comentario_id:number){
    return this.http.delete(this.base + "publicaciones/"+publicacion_id+"/comentarios/"+comentario_id)
                    .map( res =>{
                      return res.json();
                    });
  }
}
