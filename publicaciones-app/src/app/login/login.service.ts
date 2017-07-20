import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Http } from "@angular/http";
import { User }  from "../user";
@Injectable()
export class LoginService {

  base:string = "http://localhost:8000/api/";
  constructor(private http: Http, 
              private router: Router) { }

  //autentica y devuelve token
  autenticar(credenciales){
  	return  this.http.post(this.base + 'autenticar', credenciales)
		  			 .map(res => {
		  			 	return res.json();
		  			 });
  }
  //registra y devuelve token
  registrar(usuario:User){
  	return this.http.post(this.base + 'registrar', usuario)
		  			 .map(res => {
		  			 	return res.json();
		  			 });  					
  }
  logout(){
  	localStorage.removeItem('token');
    this.router.navigate(['/']);
  }

}
