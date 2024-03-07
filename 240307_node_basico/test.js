//


class Perro {
    constructor(raza, nombre) {
        this.raza = raza;
        this.nombre = nombre;
    }
    ladrar() {
        return "guau guau";
    }
}

const vega = new Perro('xboxer', 'vega');
console.log(vega.ladrar());

