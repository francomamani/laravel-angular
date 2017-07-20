import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Publicacion } from './publicacion';
import { Comentario } from '../comentarios/comentario';

import 'rxjs/add/operator/map';

@Injectable()
export class PublicacionesService {


  base = "http://localhost:8000/api/";
  headers = new Headers();
  constructor(private http: Http) { 
    this.headers.append("Content-Type",  "application/json");
    this.headers.append("Authorization",  "Bearer " + localStorage.getItem('token'));
  }

  index(){
  	return this.http.get(this.base+'publicaciones', {headers: this.headers })
  			   .map(res => res.json().map(publicacion => {
  			   		return new Publicacion(publicacion.id, publicacion.titulo, publicacion.contenido, publicacion.created_at);
  			   }));
  }
  getComentariosByPublicacionId(publicacion_id){
  	return this.http.get(this.base+'publicaciones/'+publicacion_id+'/comentarios', { headers : this.headers})
  					.map(res => res.json().map(comentario => {
  						return new Comentario(comentario.id, comentario.publicacion_id, comentario.contenido);
  					}));
  }
/*  id: number;
  titulo: string;
  contenido: string;
  created_at: Date;
  listaComentarios: any[];
  contenidoInput: string;*/

  storePublicacion(publicacion){
    return this.http.post(this.base+'publicaciones', JSON.stringify(publicacion), { headers : this.headers })
               .map(res => {
                   let publicacionJSON = res.json();
                   return new Publicacion(publicacionJSON.id,
                                           publicacionJSON.titulo,
                                           publicacionJSON.contenido,
                                           publicacionJSON.created_at);
               });
  }
}
