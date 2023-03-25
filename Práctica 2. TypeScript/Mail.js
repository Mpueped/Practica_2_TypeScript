"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Mail = void 0;
var Mail = /** @class */ (function () {
    function Mail(tipo, direccion) {
        this.tipo = tipo;
        this.direccion = direccion;
    }
    Object.defineProperty(Mail.prototype, "_tipo", {
        get: function () {
            return this._tipo;
        },
        set: function (tipo) {
            this.tipo = tipo;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "_direccion", {
        set: function (direccion) {
            this.direccion = direccion;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Mail.prototype, "_direcciones", {
        get: function () {
            return this._direcciones;
        },
        enumerable: false,
        configurable: true
    });
    return Mail;
}());
exports.Mail = Mail;
