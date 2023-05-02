class Automobile {
constructor(marca, modello, anno, colore, carburante_alimentazione) {
    this.marca = marca;
    this.modello = modello;
    this.anno = anno;
    this.colore = colore;
    this.carburante_alimentazione = carburante_alimentazione;
}

cambiaColore(nuovoColore) {
    this.colore = nuovoColore;
}

cambiaCarburante_alimentazione(nuovoCarburante_alimentazione) {
    this.carburante_alimentazione = nuovoCarburante_alimentazione;
}

stampa_auto() {
    return `Questa automobile è una ${this.marca} ${this.modello} dell'anno ${this.anno}, colore ${this.colore}, alimentata a ${this.prezzo}`;
}
}

const automobile1 = new Automobile("Alfa_romeo", "Mito", 2011, "azzurro", 'gasolio');
const automobile2 = new Automobile("Peugeot", "106", 2000, "giallo", 'benzina');
const automobile3 = new Automobile("Fiat", "500", 2018, "blu", 'benzina');
const automobile4 = new Automobile("Ford", "Focus", 2016, "bianco", 'gasolio');
const automobile5 = new Automobile("Volkswagen", "Golf", 2021, "nero", 'benzina');

console.log(automobile1.stampa_auto());
automobile1.cambiaCarburante_alimentazione("benzina");
automobile1.cambiaColore("verde");
console.log(automobile1.stampa_auto());

console.log(automobile2.stampa_auto());
automobile2.cambiaCarburante_alimentazione("gasolio");
automobile2.cambiaColore("nero");
console.log(automobile2.stampa_auto());

console.log(automobile3.stampa_auto());
automobile3.cambiaCarburante_alimentazione("gasolio");
automobile3.cambiaColore("giallo");
console.log(automobile3.stampa_auto());

console.log(automobile4.stampa_auto());
automobile4.cambiaCarburante_alimentazione("benzina");
automobile4.cambiaColore("grigio_metallizzato");
console.log(automobile4.stampa_auto());

console.log(automobile5.stampa_auto());
automobile5.cambiaCarburante_alimentazione("gasolio");
automobile5.cambiaColore("blu_scuro");
console.log(automobile5.stampa_auto());
