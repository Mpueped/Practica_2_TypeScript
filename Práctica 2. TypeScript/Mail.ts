export class Mail {

    tipo: string;
    direccion: string;

    constructor(tipo: string, direccion: string) {
        this.tipo = tipo;
        this.direccion = direccion;

    
    }
    set _tipo (tipo:string){
        this.tipo=tipo;
    }
    set _direccion (direccion:string){
        this.direccion=direccion;
    }
    get _tipo (){
        return this._tipo;
    }
    get _direcciones (){
        return this._direcciones;
    }
}
