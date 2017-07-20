import { Component, OnInit } from '@angular/core';
import { LoginService } from './login.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'], 
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  credenciales = {
  	email: "", 
  	password: ""
  }
  returnURL: string;
  loading: boolean = false;
  constructor(private login: LoginService, 
              private route: ActivatedRoute, 
              private router: Router) { }


  ngOnInit() {
    this.login.logout();
    this.returnURL = this.route.snapshot.queryParams['returnUrl'] || '/';
    console.log(this.returnURL);
  }

  autenticar(credenciales){
    this.loading = true;
  	this.login.autenticar(credenciales)
  			  .subscribe(res => {
  			  	let token = res.token;
  			  	localStorage.setItem('token', token);
            this.loading = false;
            this.router.navigate(['publicaciones']);
  			  }, error => {
            this.loading = false;
          });
  }

}
