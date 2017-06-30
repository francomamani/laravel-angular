import { Component, OnInit } from '@angular/core';

class Publicacion {
	titulo: string;
	contenido: string;	
}

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

  publicacion1 : Publicacion = {
  	titulo: "titulo1",
  	contenido: "Esta es una publicacion nueva"
  }

  publicaciones : Publicacion[] = [
  	{ titulo: "t1", contenido: "contenido1"},
  	{ titulo: "t2", contenido: "contenido2"},
  	{ titulo: "t3", contenido: "contenido3"}
  ];  

  constructor() { }

  ngOnInit() {	
  }

}
