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
setcalle (calle:string){
    this.calle=calle;
}
setnumero (numero:number){
    this.numero=numero;
}
setpiso (piso:number){
    this.piso=piso;
}
setletra (letra:string){
    this.letra=letra;
}
setcodigopostal (codigopostal:number){
    this.codigopostal=codigopostal;
}
setpoblacion (poblacion:string){
    this.poblacion=poblacion;
}
setprovincia (provincia:string){
    this.provincia=provincia;
}

getcalle (){
return this.calle;
}
getnumero () {
    return this.numero;
}
getpiso (){
    return this.piso;
}
getletra (){
    return this.letra;
}
getcodipostal (){
    return this.codigopostal;
}
getpoblacion (){
    return this.poblacion;
}
getprovincia (){
    return this.provincia;
}
}