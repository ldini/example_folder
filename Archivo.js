"use strict";
exports.__esModule = true;
exports.Archivo = void 0;
var Archivo = /** @class */ (function () {
    function Archivo(nombre, peso, extension) {
        this.nombre = nombre;
        this.peso = peso;
        this.extension = extension;
        this.direccion = "BASE";
    }
    Archivo.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Archivo.prototype.obtenerDireccion = function () {
        return this.direccion;
    };
    Archivo.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Archivo.prototype.obtenerPeso = function () {
        return this.peso;
    };
    Archivo.prototype.obtenerExtension = function () {
        return this.extension;
    };
    Archivo.prototype.toString = function () {
        return this.nombre + "." + this.extension + "\n";
    };
    return Archivo;
}());
exports.Archivo = Archivo;
