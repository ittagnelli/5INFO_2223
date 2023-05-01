class Automobile {
    constructor(marca, modello, colore) {
        this.marca = marca;
        this.modello = modello;
        this.colore = colore;
    }
    
    stampaMarca() {
        console.log(`L'automobile e' di marca ${this.marca}`);
    }
    
    stampaModello() {
        console.log(`L'automobile e' di modello ${this.modello}`);
    }
    
    enumera() {
        for (let attr in this) {
        console.log(attr);
        }
    }
}

class Poligono {
    constructor(numeroLati, lunghezzaLato, angoliInterni) {
        this.numeroLati = numeroLati;
        this.lunghezzaLato = lunghezzaLato;
        this.angoliInterni = angoliInterni;
    }
    
    calcolaPerimetro() {
        console.log(`Il perimetro del poligono è ${this.numeroLati * this.lunghezzaLato} centimetri`);
    }
    
    calcolaArea() {
        console.log(`L'area del poligono è ${this.numeroLati * this.lunghezzaLato * this.lunghezzaLato / (4 * Math.tan(Math.PI / this.numeroLati))} centimetri quadrati`);
    }
    
    enumera() {
        for (let attr in this) {
        console.log(attr);
        }
    }
}

class Animale {
    constructor(nome, specie, eta) {
        this.nome = nome;
        this.specie = specie;
        this.eta = eta;
    }

    stampaSpecie() {
        console.log(`${this.nome} e' della specie ${this.specie}`);
    }

    stampaEta() {
        console.log(`${this.nome} ha ${this.eta} anni`);
    }

    enumera() {
        for (let attr in this) {
        console.log(attr);
        }
    }
}

const alfa_romeo = new Automobile('Alfa romeo', 'Mito', 'Azzurro');
const peugeot = new Automobile('Peugeot', '106', 'Giallo');
alfa_romeo.enumera();
peugeot.enumera();

const quadrato = new Poligono(4, 10, 90);
const esagono_regolare = new Poligono(5, 8, 120);
quadrato.enumera();
esagono_regolare.enumera();

const leone = new Animale('Leone', 'P. leo', '5');
const tigre = new Animale('Tigre', 'Panthera tigris altaica', '8');
leone.enumera();
tigre.enumera();
