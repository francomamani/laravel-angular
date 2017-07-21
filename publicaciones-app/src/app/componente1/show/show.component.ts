import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  @Input() persona:any;
  @Output() eliminarPersona = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }
  delete(persona:any):void{
  	this.eliminarPersona.emit(persona);
  }
}
