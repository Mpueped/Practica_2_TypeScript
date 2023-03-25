export class Telefono {
    tipo:string;
    numero: number;

    constructor (tipo:string, numero:number){
    this.tipo= tipo;
    this.numero= numero;
    }

set _tipo (tipo:string){
    this.tipo=tipo;
}
set _numero (numero:number){
    this.numero=numero;
}

get _tipo (){
    return this.tipo;
}
get _numero (){
    return this.numero;
}
}