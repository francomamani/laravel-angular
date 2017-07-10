import { Component, OnInit } from '@angular/core';
import { ComentariosService } from './comentarios.service';
import { Comentario } from './comentario';
@Component({
  selector: 'app-comentarios',
  templateUrl: './comentarios.component.html',
  styleUrls: ['./comentarios.component.css'],
  providers: [ComentariosService]
})
export class ComentariosComponent implements OnInit {

  constructor(private comentariosService: ComentariosService) { }
  lista: Comentario[];
  ngOnInit() {
  	this.comentariosService
  		.getComentarios()
  		.subscribe(comentarios => {
  			this.lista = comentarios;
  		});
  }

}
