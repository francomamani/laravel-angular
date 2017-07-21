import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-componente1',
  templateUrl: './componente1.component.html',
  styleUrls: ['./componente1.component.css']
})
export class Componente1Component implements OnInit {

  personas: any[];
  constructor() { 
  	this.personas = [
  		{nombre: "Franco", edad: 27},
  		{nombre: "Any", edad: 24},
  		{nombre: "Mauro", edad: 17}
  	];
  }

  ngOnInit() {
  }
  deletePanel(persona:any){
  	const index = this.personas.findIndex(p => {
				  		return p.nombre == persona.nombre; 
				  	});
  	this.personas.splice(index, 1);
  }
}
