import { environment } from '../../environments/environment';

const base_url = environment.base_url;

export class Usuario {
  
    constructor(
        public nombre:   string,
        public email:    string,
        public img?:     string,
        public pasword?: string,
        public google?:  boolean,
        public role?:    string,
        public uid?:     string,
    ) {}

    inprimirUsuario(){
        console.log(this.nombre);
    }

    get imageUrl(){
        // /upload/usuarios/no-image
        if(this.img?.includes('https')) {
          return this.img;   
        }
        if(this.img){
            return `${base_url}/upload/usuarios/${this.img}`;
        }else {
            return `${base_url}/upload/usuarios/no-image`;
        }
    }
}