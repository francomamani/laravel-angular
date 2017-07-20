import { Component } from '@angular/core';
import { LoginService } from './login/login.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'], 
  providers: [LoginService]
})
export class AppComponent {
  persona = 'Yamil';
  constructor(private login: LoginService){}
  logout(){
  	this.login.logout();
  }
}
