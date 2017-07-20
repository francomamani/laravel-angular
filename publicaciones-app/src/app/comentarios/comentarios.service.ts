import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Comentario } from './comentario';
@Injectable()
export class ComentariosService {

  base = "http://localhost:8000/api/";
  headers = new Headers();
  constructor(private http: Http) { 
    this.headers.append("Content-Type", "application/json");
    this.headers.append("Authorization", "bearer "+ localStorage.getItem('token'));
  }


  getComentarios(){
  	return this.http.get(this.base + "comentarios", {headers: this.headers})
  					.map(res => res.json().map(comentario => {
  						return new Comentario(comentario.id, comentario.publicacion_id, comentario.contenido);
  					}));
  }
  /*api/publicaciones/{id}/comentarios*/
  storeComentario(publicacion_id:number, comentario:Comentario){
  	return this.http.post(this.base + "publicaciones/"+publicacion_id+"/comentarios", 
                          JSON.stringify(comentario), { headers: this.headers})
  					.map(res => {
  						let comentarioJSON = res.json();
  						return new Comentario(comentario.id, comentarioJSON.publicacion_id, comentarioJSON.contenido);
  					});
  }
  /*api/publicaciones/{id}/comentarios/{id}*/

  updateComentario(publicacion_id:number, comentario:Comentario){
    return this.http.put(this.base + "publicaciones/"+publicacion_id+"/comentarios/"+comentario.id, 
                        JSON.stringify(comentario), {headers: this.headers})
                    .map(res => {
                        let comentarioJSON = res.json();
                        return new Comentario(comentario.id, comentarioJSON.publicacion_id, comentarioJSON.contenido);                        
                    });
  }
  /*api/publicaciones/{id}/comentarios/{id}*/
  deleteComentario(publicacion_id:number, comentario_id:number){
    return this.http.delete(this.base + "publicaciones/"+publicacion_id+"/comentarios/"+comentario_id, 
                    {headers: this.headers})
                    .map( res =>{
                      return res.json();
                    });
  }
}
