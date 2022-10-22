import { IComponente } from "./IComponente";

export class Carpeta implements IComponente{
    private nombre:string;
    private direccion:string;
    private componentes:Array<IComponente>;

    constructor(nombre:string){
        this.nombre = nombre;
        this.componentes = new Array<IComponente>;
        this.direccion = "BASE";
    }

    obtenerNombre(): string {
        return this.nombre;
    }

    obtenerDireccion(): string {
        return this.direccion;
    }

    obtenerPeso(): number {

        let peso:number = 0;

        for (let index:number = 0; index < this.componentes.length; index++) {
            peso += this.componentes[index].obtenerPeso();
            
        }
        return peso;
    }

    agregarComponente(componente:IComponente){
        this.componentes.push(componente);
        componente.setDireccion(this.direccion + "/" + this.nombre);

    }

    setDireccion(direccion:string){
        this.direccion = direccion;
    }

    toString(): string {
        let texto : string ="\n" +"-" + this.obtenerNombre() + "\n";

        for (let index:number = 0; index < this.componentes.length; index++) {
            texto += this.componentes[index].toString();
            
        }
        return texto;
    }

}