"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre, apellidos, edad, dni, cumpleanios, colorFavorito, sexo, direcciones, mails, telefonos, notas) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.edad = edad;
        this.dni = dni;
        this.cumpleanios = cumpleanios;
        this.colorFavorito = colorFavorito;
        this.sexo = sexo;
        this.direcciones = direcciones;
        this.mails = mails;
        this.telefonos = telefonos;
        this.notas = notas;
    }
    Persona.prototype.setnombre = function (nombre) {
        this.nombre = nombre;
    };
    Persona.prototype.setapellidos = function (apellidos) {
        this.apellidos = apellidos;
    };
    Persona.prototype.setedad = function (edad) {
        this.edad = edad;
    };
    Persona.prototype.setdni = function (dni) {
        this.dni = dni;
    };
    Persona.prototype.setcumpleanios = function (cumpleanios) {
        this.cumpleanios = cumpleanios;
    };
    Persona.prototype.setcolorFavorito = function (colorFavorito) {
        this.colorFavorito = colorFavorito;
    };
    Persona.prototype.setsexo = function (sexo) {
        this.sexo = sexo;
    };
    Persona.prototype.setdirecciones = function (direcciones) {
        this.direcciones = direcciones;
    };
    Persona.prototype.setmails = function (mails) {
        this.mails = mails;
    };
    Persona.prototype.settelefonos = function (telefonos) {
        this.telefonos = telefonos;
    };
    Persona.prototype.setnotas = function (notas) {
        this.notas = notas;
    };
    Persona.prototype.getnombre = function () {
        return this.nombre;
    };
    Persona.prototype.getapellidos = function () {
        return this.apellidos;
    };
    Persona.prototype.getedad = function () {
        return this.edad;
    };
    Persona.prototype.getdni = function () {
        return this.dni;
    };
    Persona.prototype.getcumpleanios = function () {
        return this.cumpleanios;
    };
    Persona.prototype.getcolorFavorito = function () {
        return this.colorFavorito;
    };
    Persona.prototype.getsexo = function () {
        return this.sexo;
    };
    Persona.prototype.getdirecciones = function () {
        return this.direcciones;
    };
    Persona.prototype.getmails = function () {
        return this.mails;
    };
    Persona.prototype.gettelefonos = function () {
        return this.telefonos;
    };
    Persona.prototype.getnotas = function () {
        return this.notas;
    };
    Persona.prototype.buscarDni = function (dni, direccion, mail, telefono) {
        if (this.dni == dni) {
            console.log('El dni ha sido encontrado');
            this.agregarDireccion(direccion);
            this.agregarMail(mail);
            this.agregarTelefono(telefono);
        }
        else
            (function () { return console.log('El dni no existe'); });
    };
    Persona.prototype.agregarDireccion = function (direccion) {
        this.direcciones.push(direccion);
    };
    Persona.prototype.agregarMail = function (mail) {
        this.mails.push(mail);
    };
    Persona.prototype.agregarTelefono = function (telefono) {
        this.telefonos.push(telefono);
    };
    return Persona;
}());
exports.Persona = Persona;
