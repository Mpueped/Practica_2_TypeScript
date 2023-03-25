"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Direccion = void 0;
var Direccion = /** @class */ (function () {
    function Direccion(calle, numero, piso, letra, codigopostal, poblacion, provincia) {
        this.calle = calle;
        this.numero = numero;
        this.piso = piso;
        this.letra = letra;
        this.codigopostal = codigopostal;
        this.poblacion = poblacion;
        this.provincia = provincia;
    }
    Object.defineProperty(Direccion.prototype, "_calle", {
        get: function () {
            return this.calle;
        },
        set: function (calle) {
            this.calle = calle;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_numero", {
        get: function () {
            return this.numero;
        },
        set: function (numero) {
            this.numero = numero;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_piso", {
        get: function () {
            return this.piso;
        },
        set: function (piso) {
            this.piso = piso;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_letra", {
        get: function () {
            return this.letra;
        },
        set: function (letra) {
            this.letra = letra;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_codigopostal", {
        set: function (codigopostal) {
            this.codigopostal = codigopostal;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_poblacion", {
        get: function () {
            return this.poblacion;
        },
        set: function (poblacion) {
            this.poblacion = poblacion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_provincia", {
        get: function () {
            return this.provincia;
        },
        set: function (provincia) {
            this.provincia = provincia;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Direccion.prototype, "_codipostal", {
        get: function () {
            return this.codigopostal;
        },
        enumerable: false,
        configurable: true
    });
    return Direccion;
}());
exports.Direccion = Direccion;
