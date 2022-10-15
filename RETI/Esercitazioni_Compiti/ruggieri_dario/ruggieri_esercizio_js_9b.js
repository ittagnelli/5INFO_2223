let Automobile = function(marca, modello, assicurazione, colore, fari ){
    (this.marca  = marca),
    (this.modello = modello),
    (this.assicurazione = assicurazione),
    (this.colore = colore),
    (this.fari = fari),
    (this.cambia_colore = (nuovo_colore) => this.colore = nuovo_colore ),
    (this.attiva_disattiva_assicurazione = (valore) => this.assicurazione = valore),
    (this.attiva_disattiva_fari = (valore) => this.fari = valore);
};

let automobile1 = new Automobile("Ford", "Fiesta", true, "Blu", false);
let automobile2= new Automobile("Fiat", "Panda", false, "Verde", false);
let automobile3 = new Automobile("Opel", "Astra", true, "Viola", true);
let automobile4 = new Automobile("Jeep", "Compass", false, "Arancione", true);
let automobile5 = new Automobile("Ferrari", "488", true, "Rossa", true);
console.log(`Automobile1: ${automobile1.marca} ${automobile1.modello} ${automobile1.assicurazione} ${automobile1.colore} ${automobile1.fari} `);
console.log(`Automobile2: ${automobile2.marca} ${automobile2.modello} ${automobile2.assicurazione} ${automobile2.colore} ${automobile2.fari} `);
console.log(`Automobile3: ${automobile3.marca} ${automobile3.modello} ${automobile3.assicurazione} ${automobile3.colore} ${automobile3.fari} `);
console.log(`Automobile4: ${automobile4.marca} ${automobile4.modello} ${automobile4.assicurazione} ${automobile4.colore} ${automobile4.fari} `);
console.log(`Automobile5: ${automobile5.marca} ${automobile5.modello} ${automobile5.assicurazione} ${automobile5.colore} ${automobile5.fari} `);

automobile1.cambia_colore("Verde");
automobile2.cambia_colore("Blu");
automobile3.cambia_colore("Arancione");
automobile4.cambia_colore("Viola");
automobile5.cambia_colore("Gialla");

automobile1.attiva_disattiva_assicurazione(false);
automobile2.attiva_disattiva_assicurazione(true);
automobile3.attiva_disattiva_assicurazione(false);
automobile4.attiva_disattiva_assicurazione(true);
automobile5.attiva_disattiva_assicurazione(false);

automobile1.attiva_disattiva_fari(true);
automobile2.attiva_disattiva_fari(true);
automobile3.attiva_disattiva_fari(false);
automobile4.attiva_disattiva_fari(false);
automobile5.attiva_disattiva_fari(false);

console.log("Changed:\n");
console.log(`Automobile1: ${automobile1.marca} ${automobile1.modello} ${automobile1.assicurazione} ${automobile1.colore} ${automobile1.fari} `);
console.log(`Automobile2: ${automobile2.marca} ${automobile2.modello} ${automobile2.assicurazione} ${automobile2.colore} ${automobile2.fari} `);
console.log(`Automobile3: ${automobile3.marca} ${automobile3.modello} ${automobile3.assicurazione} ${automobile3.colore} ${automobile3.fari} `);
console.log(`Automobile4: ${automobile4.marca} ${automobile4.modello} ${automobile4.assicurazione} ${automobile4.colore} ${automobile4.fari} `);
console.log(`Automobile5: ${automobile5.marca} ${automobile5.modello} ${automobile5.assicurazione} ${automobile5.colore} ${automobile5.fari} `);
