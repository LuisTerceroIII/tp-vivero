import {plantas} from "./recursos/Plantas";
class Planta {
    commonName;
    color;
    family;
    id;
    photo;
    constructor(commonName, color, family, photo = "", fila, column) {
        this.commonName = commonName;
        this.family = family;
        this.color = color;
        this.id = Date.now().toString(36) + Math.random().toString(36).substr(2);
        this.photo = photo; 
    }

}
console.log("hola");
// let jsonTXT;
//     plantas.forEach(e => {
//         jsonTXT = JSON.stringify(e);
// });

// console.log(jsonTXT)
// console.log(JSON.parse(jsonTXT));