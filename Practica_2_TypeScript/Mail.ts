export class Mail {

    tipo: string;
    direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;

    
    }
    settipo (tipo:string){
        this.tipo=tipo;
    }
    setdireccion (direccion:string){
        this.direccion=direccion;
    }
    gettipo (){
        return this._tipo;
    }
    getdirecciones (){
        return this._direcciones;
    }
}
