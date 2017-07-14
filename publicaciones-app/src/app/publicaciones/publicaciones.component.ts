import { Component, OnInit } from '@angular/core';
import { PublicacionesService } from './publicaciones.service';
import { ComentariosService } from '../comentarios/comentarios.service';

import { Publicacion } from './publicacion';
import { Comentario } from '../comentarios/comentario';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css'],
  providers: [PublicacionesService, ComentariosService]
})

export class PublicacionesComponent implements OnInit {

  publicacion1 : Publicacion = {
    id: 0,
  	titulo: "",
  	contenido: "",
    created_at: new Date(),
    listaComentarios: [], 
    contenidoInput: ""
  }

  publicacion_id: number = 0;
  selectedComentario: Comentario = {
    id: 0,
    publicacion_id: 0,    
    contenido: ""
  };
  editando:boolean = false;
/*  publicaciones : Publicacion[] = [
  	{ titulo: "t1", contenido: "contenido1"},
  	{ titulo: "t2", contenido: "contenido2"},
  	{ titulo: "t3", contenido: "contenido3"}
  ];  */

  publicaciones: Publicacion[];
  constructor(private publicacionesService: PublicacionesService,
              private comentariosService: ComentariosService) { }

  ngOnInit() {	
    this.publicacionesService.index()
                             .subscribe(data => this.publicaciones = data);
  }

  guardarPublicacion(){
    this.publicacionesService
        .storePublicacion(this.publicacion1)
        .subscribe(res=>{
          this.publicaciones.unshift(res);
          console.log(res);
        });
  }
  guardar(publicacion_id, contenido, listaComentarios){
    let id:number = 0;
    let comentario = new Comentario(id, publicacion_id, contenido);
    this.comentariosService
        .storeComentario(publicacion_id, comentario)
        .subscribe(
          (res:Comentario) => {
           listaComentarios.push(res);
        });
  }
  getComentariosByPublicacionId(publicacion:Publicacion){
    this.publicacionesService
        .getComentariosByPublicacionId(publicacion.id)
        .subscribe(comentarios => {
          publicacion.listaComentarios = comentarios;
        });        
  }

  deleteComentarioByPublicacionId( publicacion_id: number,
                                   comentario_id: number,
                                   listaComentarios){
    this.comentariosService
        .deleteComentario(publicacion_id, comentario_id)
        .subscribe(res => {
          const posicion  = listaComentarios.findIndex( item => {
                                              console.log("comentarioID: "+ item.id);
                                              console.log("comentarioParam: "+ comentario_id);
                                              return item.id == comentario_id; 
                                            });
          console.log(posicion);
          listaComentarios.splice(posicion, 1);
          console.log(res);
        });
  }






}
