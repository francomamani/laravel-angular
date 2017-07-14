import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { PublicacionesComponent } from './publicaciones/publicaciones.component';
import { ComentariosComponent } from './comentarios/comentarios.component';
import { ComentarioEditComponent } from './comentarios/comentario-edit/comentario-edit.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ComentariosService } from './comentarios/comentarios.service'; 
const appRoutes: Routes = [
  {
    path: 'inicio', 
    component: AppComponent
  },
  {  path: 'comentario',
     component: ComentarioEditComponent, 
     data: { datos: 'estas en comentario' } 
  },
  {
    path: 'comentario-edicion/:publicacion_id/:id/:contenido', 
    component: ComentarioEditComponent
  },
  {  path: 'publicaciones',
     component: PublicacionesComponent
  },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicacionesComponent,
    ComentariosComponent,
    ComentarioEditComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
