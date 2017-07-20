export class Publicacion {
	id: number;
	titulo: string;
	contenido: string;
	created_at: Date;
	listaComentarios: any[];
	contenidoInput: string;
	constructor(id, titulo, contenido, created_at, listaComentarios = [], contenidoInput = ""){
		this.id = id;
		this.titulo = titulo;
		this.contenido = contenido;
		this.created_at = created_at;
		this.listaComentarios = listaComentarios;
		this.contenidoInput = contenidoInput;
	}
}
