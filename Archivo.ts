import { IComponente } from "./IComponente";

export class Archivo implements IComponente{
    private nombre:string;
    private peso:number;
    private direccion:string;
    private extension:string;
    
    constructor(nombre:string,peso:number,extension:string){
        this.nombre = nombre;
        this.peso = peso;
        this.extension = extension;
        this.direccion = "BASE";
    }

    obtenerNombre(): string {
        return this.nombre;
    }

    obtenerDireccion(): string {
        return this.direccion;
    }

    setDireccion(direccion:string){
        this.direccion = direccion;
    }
    
    obtenerPeso(): number {
        return this.peso;
    }

    obtenerExtension():string{
        return this.extension;
    }

    toString(): string {
        return this.nombre + "." + this.extension + "\n";
    }

}