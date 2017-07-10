import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Publicacion } from './publicacion';
import { Comentario } from '../comentarios/comentario';

import 'rxjs/add/operator/map';

@Injectable()
export class PublicacionesService {

  constructor(private http: Http) { }
  base = "http://localhost:8000/api/";

  index(){
  	return this.http.get(this.base+'publicaciones')
  			   .map(res => res.json().map(publicacion => {
  			   		return new Publicacion(publicacion.id, publicacion.titulo, publicacion.contenido, publicacion.created_at);
  			   }));
  }
  getComentariosByPublicacionId(publicacion_id){
  	return this.http.get(this.base+'publicaciones/'+publicacion_id+'/comentarios')
  					.map(res => res.json().map(comentario => {
  						return new Comentario(comentario.publicacion_id, comentario.contenido);
  					}));
  }
    id: number;
  titulo: string;
  contenido: string;
  created_at: Date;
  listaComentarios: any[];
  contenidoInput: string;

  storePublicacion(publicacion){
    return this.http.post(this.base+'publicaciones', publicacion)
               .map(res => {
                   let publicacionJSON = res.json();
                   return new Publicacion(publicacionJSON.id,
                                           publicacionJSON.titulo,
                                           publicacionJSON.contenido,
                                           publicacionJSON.created_at);
               });
  }
}
