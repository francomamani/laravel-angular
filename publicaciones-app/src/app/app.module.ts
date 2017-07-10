import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
@NgModule({
  declarations: [
    AppComponent,
    PublicacionesComponent,
    ComentariosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
