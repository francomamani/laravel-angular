import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-componente2',
  templateUrl: './componente2.component.html',
  styleUrls: ['./componente2.component.css']
})
export class Componente2Component implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
	this.route.params.subscribe(params => {
		console.log(params['parametro']);
		console.log(params.parametro);
	});  	
  }

}
