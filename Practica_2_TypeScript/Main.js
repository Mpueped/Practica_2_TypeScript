"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Direccion_1 = require("./Direccion");
var Mail_1 = require("./Mail");
var Persona_1 = require("./Persona");
var Telefono_1 = require("./Telefono");
var mail = new Mail_1.Mail('gmail', 'miriam@gmail.com');
var telefono = new Telefono_1.Telefono('movil', 666666666);
var direccion = new Direccion_1.Direccion('Benito', 14, 2, 'e', 11111, 'sevilla', 'sevilla');
var direccionList = new Array;
var mailList = new Array;
var telefonoList = new Array;
direccionList.push(direccion);
mailList.push(mail);
telefonoList.push(telefono);
var miriam = new Persona_1.Persona('Miriam', 'Puerto', 30, '123456A', '24/07/1992', 'verde', 'mujer', direccionList, mailList, telefonoList, 'hola');
var manolito = new Persona_1.Persona('Manolo', 'Polo', 23, '654321B', '01/01/2000', 'rosa', 'hombre', direccionList, mailList, telefonoList, 'que tal');
var jaimito = new Persona_1.Persona('Jaime', 'Lugo', 23, '123654c', '01/01/2000', 'rojo', 'hombre', direccionList, mailList, telefonoList, 'adios');
console.log(miriam);
console.log(manolito);
console.log(jaimito);
console.log('Quieres añadir una nueva direccion?');
console.log('Empieza buscando tu dni!');
var scanner;
var dni;
var nuevoTelefono1;
var nuevoCorreo;
var nuevoTipo1;
var nuevoTipo2;
var nuevaCalle;
var nuevoNumero;
var nuevoPiso;
var nuevaLetra;
var nuevoCodigoPostal;
var nuevaPoblacion;
var nuevaProvincia;
scanner = prompt('Cual es tu dni?', '');
dni = scanner;
if (dni == miriam.getdni()) {
    scanner = prompt('Introduce tu nueva calle', '');
    nuevaCalle = scanner;
    scanner = prompt('Introduce tu nuevo numero', '');
    nuevoNumero = scanner;
    scanner = prompt('Introduce tu nuevo piso', '');
    nuevoPiso = scanner;
    scanner = prompt('Introduce tu nueva letra', '');
    nuevaLetra = scanner;
    scanner = prompt('Introduce tu nuevo codigo postal', '');
    nuevoCodigoPostal = scanner;
    scanner = prompt('Introduce tu nueva poblacion', '');
    nuevaPoblacion = scanner;
    scanner = prompt('Introduce tu nueva provincia', '');
    nuevaProvincia = scanner;
    var nuevaDireccion = new Direccion_1.Direccion(nuevaCalle, nuevoNumero, nuevoPiso, nuevaLetra, nuevoCodigoPostal, nuevaPoblacion, nuevaProvincia);
    scanner = prompt('Introduce tu tipo de telefono', '');
    nuevoTipo1 = scanner;
    scanner = prompt('Introduce tu nuevo telefono', '');
    nuevoTelefono1 = scanner.parseInt();
    var nuevoTelefono2 = new Telefono_1.Telefono(nuevoTipo1, nuevoTelefono1);
    scanner = prompt('Introduce tu nuevo tipo de mail', '');
    nuevoTipo2 = scanner;
    scanner = prompt('Introduce tu nuevo mail', '');
    nuevoCorreo = scanner;
    var nuevoMail = new Mail_1.Mail(nuevoTipo2, nuevoCorreo);
    miriam.buscarDni(dni, nuevaDireccion, nuevoMail, nuevoTelefono2);
}
else
    (function () { return console.log('Tu dni no coincide'); });