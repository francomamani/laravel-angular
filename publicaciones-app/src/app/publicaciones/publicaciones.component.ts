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

/*  publicaciones : Publicacion[] = [
  	{ titulo: "t1", contenido: "contenido1"},
  	{ titulo: "t2", contenido: "contenido2"},
  	{ titulo: "t3", contenido: "contenido3"}
  ];  */

  publicaciones: Publicacion[];
  constructor(private publicacionesService: PublicacionesService,
              private comentariosService: ComentariosService) { }

  ngOnInit() {	
   this.publicacionesService.index().subscribe(data => this.publicaciones = data);
  }

  guardarPublicacion(){
    this.publicacionesService
        .storePublicacion(this.publicacion1)
        .subscribe(res=>{
          this.publicaciones.unshift(res);
          console.log(res);
        });
  }
  guardar(publicacion_id, contenido){
    let comentario = new Comentario(publicacion_id, contenido);
    this.comentariosService
        .storeComentario(publicacion_id, comentario)
        .subscribe(res => console.log(res));
  }
  getComentariosByPublicacionId(publicacion:Publicacion){
    this.publicacionesService
        .getComentariosByPublicacionId(publicacion.id)
        .subscribe(comentarios => {
          publicacion.listaComentarios = comentarios;
        });        
  }
}
