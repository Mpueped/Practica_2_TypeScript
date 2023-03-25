
import { Direccion} from "./Direccion";
import { Mail } from "./Mail";
import { Telefono } from "./Telefono";

export class Persona {
   nombre: string;
   apellidos: string;
   edad: number;
   dni: string;
   cumpleanios: string;
   colorFavorito: string;
   sexo: string;
   direcciones: Array<Direccion>;
   mails: Array<Mail>;
   telefonos: Array<Telefono>;
   notas: string;

  

    constructor (nombre: string, apellidos: string, edad: number, dni: string, cumpleanios: string, colorFavorito: string, sexo: string, direcciones: Array<Direccion>, mails: Array<Mail>, telefonos: Array<Telefono>, notas:string ) {
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.edad=edad;
        this.dni=dni;
        this.cumpleanios=cumpleanios;
        this.colorFavorito=colorFavorito;
        this.sexo=sexo;
        this.direcciones=direcciones;
        this.mails=mails;
        this.telefonos=telefonos;
        this.notas=notas;
}

setnombre(nombre:string){
    this.nombre=nombre;
}

setapellidos (apellidos:string){
    this.apellidos=apellidos;
}

setedad (edad:number){
    this.edad=edad;
}
setdni (dni: string){
    this.dni=dni;
}
setcumpleanios (cumpleanios:string){
    this.cumpleanios=cumpleanios;
}
setcolorFavorito (colorFavorito:string){
    this.colorFavorito=colorFavorito;
}
setsexo (sexo:string){
    this.sexo=sexo;
}
setdirecciones (direcciones:Array<Direccion>){
    this.direcciones=direcciones;
}
setmails (mails:Array<Mail>){
    this.mails=mails;
}
settelefonos (telefonos: Array<Telefono>){
    this.telefonos=telefonos;
}

setnotas (notas:string){
    this.notas=notas;
}

getnombre (){
   return this.nombre;
}
getapellidos (){
    return this.apellidos
}
getedad (){
    return this.edad
}
getdni (){
    return this.dni
}
getcumpleanios (){
    return this.cumpleanios
}
getcolorFavorito (){
    return this.colorFavorito
}
getsexo (){
    return this.sexo
}
getdirecciones () {
    return this.direcciones
}
getmails (){
    return this.mails
}
gettelefonos (){
    return this.telefonos
}

getnotas (){
return this.notas
}

public buscarDni(dni:string,direccion:Direccion,mail:Mail,telefono:Telefono){

    if (this.dni == dni){
        console.log('El dni ha sido encontrado');
        this.agregarDireccion(direccion);
        this.agregarMail(mail);
        this.agregarTelefono(telefono);

    }else()=>console.log('El dni no existe');
        
    
    
}
private agregarDireccion(direccion:Direccion){
    this.direcciones.push(direccion);
}

private agregarMail(mail:Mail){
    this.mails.push(mail);
}

private agregarTelefono(telefono){
    this.telefonos.push(telefono);
}


}