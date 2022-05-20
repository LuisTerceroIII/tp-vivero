 import {plantas} from "./PlantasArray.js";
import {Ubicacion} from "./Ubicacion.js";
class Planta {
    commonName;
    color;
    family;
    id;
    photo;
    ubicacion;
    constructor(commonName, color, family, photo = "", fila, column) {
        this.commonName = commonName;
        this.family = family;
        this.color = color;
        this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.photo = photo;
        this.ubicacion = new Ubicacion(fila, column)   
    }
  
}


let jsonTXT = JSON.stringify(plantas);


//  console.log(jsonTXT)
 console.log(JSON.parse(jsonTXT));