import { Archivo } from "./Archivo";
import { Carpeta } from "./Carpeta";

let carpeta1 = new Carpeta("carpeta_1");
let carpeta2 = new Carpeta("carpeta_2");
let carpeta3 = new Carpeta("carpeta_3");

let archivo1 = new Archivo("archivo_1",1,"txt");
let archivo2 = new Archivo("archivo_2",1,"txt");
let archivo3 = new Archivo("archivo_3",1,"txt");
let archivo4 = new Archivo("archivo_4",1,"txt");
let archivo5 = new Archivo("archivo_5",1,"txt");
let archivo6 = new Archivo("archivo_6",1,"txt");

carpeta1.agregarComponente(archivo1);
carpeta1.agregarComponente(carpeta2);

carpeta2.agregarComponente(archivo3);
carpeta2.agregarComponente(archivo4);
carpeta2.agregarComponente(archivo5);
carpeta2.agregarComponente(archivo6);
carpeta2.agregarComponente(carpeta3);

// console.log(carpeta1.obtenerNombre());
// console.log(carpeta1.obtenerPeso());

console.log(archivo3.obtenerDireccion());

