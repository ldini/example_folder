"use strict";
exports.__esModule = true;
exports.Carpeta = void 0;
var Carpeta = /** @class */ (function () {
    function Carpeta(nombre) {
        this.nombre = nombre;
        this.componentes = new Array;
        this.direccion = "BASE";
    }
    Carpeta.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    Carpeta.prototype.obtenerDireccion = function () {
        return this.direccion;
    };
    Carpeta.prototype.obtenerPeso = function () {
        var peso = 0;
        for (var index = 0; index < this.componentes.length; index++) {
            peso += this.componentes[index].obtenerPeso();
        }
        return peso;
    };
    Carpeta.prototype.agregarComponente = function (componente) {
        this.componentes.push(componente);
        componente.setDireccion(this.direccion + "/" + this.nombre);
    };
    Carpeta.prototype.setDireccion = function (direccion) {
        this.direccion = direccion;
    };
    Carpeta.prototype.toString = function () {
        var texto = "\n" + "-" + this.obtenerNombre() + "\n";
        for (var index = 0; index < this.componentes.length; index++) {
            texto += this.componentes[index].toString();
        }
        return texto;
    };
    return Carpeta;
}());
exports.Carpeta = Carpeta;
