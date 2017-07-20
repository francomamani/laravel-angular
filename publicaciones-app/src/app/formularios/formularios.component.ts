import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {

  personas: any[];
  personasBK: any[];
  constructor() {
  	this.personas = [];
  	this.personasBK = [];
  }

  ngOnInit() {
  }

  agregar(form){
  	let persona = {
  		"nombre": form.value.nombre, 
  		"edad": form.value.edad 
  	};
  	this.personas.unshift(persona);
  	this.personasBK = this.personas;
  	form.reset();
  }

  filtrarNombre(busqueda:string){
  	this.personas = this.personasBK;
  		
	let resultado = this.personas.filter(persona => {
				  		return persona.nombre.toLowerCase().indexOf(busqueda) == 0;
				  	});
	this.personas = resultado;
  }
}
