class planta{
    nombre;
    edad;
    estado;
    familia;
    
    constructor(nombre, edad, familia){
        this.nombre = nombre;
        this.edad = edad;
        this.estado = "Creada";
        this.familia = familia;
    }
}

let planta0 = new Planta("Girasol", 2, "Asteraceae");
let planta1 = new Planta("Nogal", 1, "Juglandaceae")
let planta2 = new Planta("Petunia", 3, "Solanáceas");
let planta3 = new Planta("Rosa de China", 9, "Malvaceae");
let planta4 = new Planta("Ombú", 1, "Phytolaccaceae");
let planta5 = new Planta("Pecano", 7, "Juglandaceae");

let plantas = [];
for (let i = 0; i <= 5; i++) {
    plantas.push(`${planta}` + i)
}
console.log(plantas)