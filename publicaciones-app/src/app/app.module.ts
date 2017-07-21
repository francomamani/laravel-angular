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
import { LoginComponent } from './login/login.component'; 
import { AuthGuard } from './auth.guard';
import { FormulariosComponent } from './formularios/formularios.component';
import { Componente1Component } from './formularios/componente1/componente1.component';
import { Componente2Component } from './formularios/componente2/componente2.component';
import { CrearComponent } from './formularios/componente2/crear/crear.component';
import { ListarComponent } from './formularios/componente2/listar/listar.component';
import { ShowComponent } from './componente1/show/show.component';
const appRoutes: Routes = [
  {
    path: '', 
    component: LoginComponent
  },
  {
    path: 'inicio', 
    component: AppComponent
  },
  {  path: 'comentario',
     component: ComentarioEditComponent, 
     data: { datos: 'estas en comentario' },
     canActivate: [AuthGuard] 
  },
  {
    path: 'comentario-edicion/:publicacion_id/:id/:contenido', 
    component: ComentarioEditComponent, 
    canActivate: [AuthGuard]
  },
  {  path: 'publicaciones',
     component: PublicacionesComponent, 
     canActivate: [AuthGuard]
  },  
  {  path: 'formularios',
     component: FormulariosComponent, 
     children: [
       { path: '', component: Componente1Component },
       { 
         path: 'componente2/:parametro', component: Componente2Component,
         children: [
           { path: 'crear', component: CrearComponent},
           { path: 'listar', component: ListarComponent },
         ] 
       }
     ]
  },  
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PublicacionesComponent,
    ComentariosComponent,
    ComentarioEditComponent,
    PageNotFoundComponent,
    LoginComponent,
    FormulariosComponent,
    Componente1Component,
    Componente2Component,
    CrearComponent,
    ListarComponent,
    ShowComponent
  ],
  imports: [
    BrowserModule,
    HttpModule, 
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [AuthGuard, ComentariosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
