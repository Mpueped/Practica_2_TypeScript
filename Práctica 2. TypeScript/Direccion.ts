export class Direccion {
    calle: string;
    numero: number;
    piso: number;
    letra: string;
    codigopostal: number;
    poblacion: string;
    provincia: string;

constructor (calle: string, numero: number, piso: number, letra: string, codigopostal: number, poblacion: string, provincia: string) {
    this.calle= calle;
    this.numero= numero;
    this.piso= piso;
    this.letra= letra;  
    this.codigopostal= codigopostal;
    this.poblacion=poblacion;
    this.provincia=provincia;

}
set _calle (calle:string){
    this.calle=calle;
}
set _numero (numero:number){
    this.numero=numero;
}
set _piso (piso:number){
    this.piso=piso;
}
set _letra (letra:string){
    this.letra=letra;
}
set _codigopostal (codigopostal:number){
    this.codigopostal=codigopostal;
}
set _poblacion (poblacion:string){
    this.poblacion=poblacion;
}
set _provincia (provincia:string){
    this.provincia=provincia;
}

get _calle (){
return this.calle;
}
get _numero () {
    return this.numero;
}
get _piso (){
    return this.piso;
}
get _letra (){
    return this.letra;
}
get _codipostal (){
    return this.codigopostal;
}
get _poblacion (){
    return this.poblacion;
}
get _provincia (){
    return this.provincia;
}
}