class Ubicacion{
    fila;
    columna;
    
    constructor(fila, columna){
        this.fila = fila;
        this.columna = columna;
    }

    get getFila(){
        return this.fila;
    }
    get getColumna(){
        return this.columna;
    }
}