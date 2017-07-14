export class Comentario {
	id: number;
	publicacion_id:number;		
	contenido:string;

	constructor(id, publicacion_id, contenido){
		this.id = id;
		this.publicacion_id = publicacion_id;
		this.contenido = contenido;
	}	

}
