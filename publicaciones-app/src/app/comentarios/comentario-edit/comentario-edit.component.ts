import { Router, ActivatedRoute, Params} from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Comentario } from '../comentario';
import { ComentariosService } from '../comentarios.service';
@Component({
  selector: 'app-comentario-edit',
  templateUrl: './comentario-edit.component.html',
  styleUrls: ['./comentario-edit.component.css']
})
export class ComentarioEditComponent implements OnInit {

  constructor(	private router: Router,
  				private activatedRoute: ActivatedRoute, 
  				private comentariosService: ComentariosService) {}
  id: number;
  publicacion_id: number;
  contenido: string;
  ngOnInit() {
    // subscribe to router event
    this.activatedRoute.params.subscribe((params: Params) => {
        this.publicacion_id = params['publicacion_id'];
        this.id = params['id'];
        this.contenido = params['contenido'];
      });
  }
  updateComentarioByPublicacionId(publicacion_id:number, comentario:Comentario){
    this.comentariosService
        .updateComentario(publicacion_id, comentario)
        .subscribe(comentario => {
          console.log(comentario);
        });
  }
  editComentario(f){
  	console.log(f);
  	let comentario = new Comentario(this.id,this.publicacion_id, f.value.contenido);
  	this.updateComentarioByPublicacionId(this.publicacion_id, comentario);
  	this.router.navigate(["/publicaciones"]);
  }
}
