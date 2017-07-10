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
  						return new Comentario(comentario.publicacion_id, comentario.contenido);
  					}));
  }
  /*api/publicaciones/{id}/comentarios*/
  storeComentario(publicacion_id:number, comentario:Comentario){
  	return this.http.post(this.base + "publicaciones/"+publicacion_id+"/comentarios", comentario)
  					.map(res => {
  						let comentarioJSON = res.json();
  						return new Comentario(comentarioJSON.publicacion_id, comentarioJSON.contenido);
  					});
  }
}
