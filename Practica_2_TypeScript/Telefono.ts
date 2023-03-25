export class Telefono {
    tipo:string;
    numero: number;

    constructor (tipo:string, numero:number){
    this.tipo= tipo;
    this.numero= numero;
    }

settipo (tipo:string){
    this.tipo=tipo;
}
setnumero (numero:number){
    this.numero=numero;
}

gettipo (){
    return this.tipo;
}
getnumero (){
    return this.numero;
}
}