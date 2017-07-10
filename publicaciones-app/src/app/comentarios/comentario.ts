export class Comentario {
	publicacion_id:number;		
	contenido:string;

	constructor(publicacion_id, contenido){
		this.publicacion_id = publicacion_id;
		this.contenido = contenido;
	}	

}
