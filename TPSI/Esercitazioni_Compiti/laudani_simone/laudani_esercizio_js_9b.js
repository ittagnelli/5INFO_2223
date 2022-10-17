let Automobile = function(marca, modello, costo, colore, abbaglianti ){
    (this.marca  = marca),
    (this.modello = modello),
    (this.costo = costo),
    (this.colore = colore),
    (this.abbaglianti = abbaglianti),
    (this.cambia_colore = (nuovo_colore) => this.colore = nuovo_colore ),
    (this.attiva_disattiva_costo = (valore) => this.costo = valore),
    (this.attiva_disattiva_abbaglianti = (valore) => this.abbaglianti = valore);
};

let automobile1 = new Automobile("Fiat", "Punto", false, "Blu", false);
let automobile3 = new Automobile("AlfaRomeo", "Giulietta", false, "Viola", true);
let automobile2= new Automobile("Tesla", "ModelX", true, "Verde", false);
let automobile4 = new Automobile("Jeep", "Compass", false, "Arancione", true);
let automobile5 = new Automobile("Audi", "Bo", true, "Rossa", true);
console.log(`Automobile1: ${automobile1.marca} ${automobile1.modello} ${automobile1.costo} ${automobile1.colore} ${automobile1.abbaglianti} `);
console.log(`Automobile2: ${automobile2.marca} ${automobile2.modello} ${automobile2.costo} ${automobile2.colore} ${automobile2.abbaglianti} `);
console.log(`Automobile3: ${automobile3.marca} ${automobile3.modello} ${automobile3.costo} ${automobile3.colore} ${automobile3.abbaglianti} `);
console.log(`Automobile4: ${automobile4.marca} ${automobile4.modello} ${automobile4.costo} ${automobile4.colore} ${automobile4.abbaglianti} `);
console.log(`Automobile5: ${automobile5.marca} ${automobile5.modello} ${automobile5.costo} ${automobile5.colore} ${automobile5.abbaglianti} `);

automobile1.cambia_colore("Verde");
automobile2.cambia_colore("Blu");
automobile3.cambia_colore("Arancione");
automobile4.cambia_colore("Viola");
automobile5.cambia_colore("Gialla");

automobile1.attiva_disattiva_costo(true);
automobile2.attiva_disattiva_costo(true);
automobile3.attiva_disattiva_costo(true);
automobile4.attiva_disattiva_costo(false);
automobile5.attiva_disattiva_costo(false);

automobile1.attiva_disattiva_abbaglianti(true);
automobile2.attiva_disattiva_abbaglianti(true);
automobile3.attiva_disattiva_abbaglianti(true);
automobile4.attiva_disattiva_abbaglianti(true);
automobile5.attiva_disattiva_abbaglianti(false);

console.log("Cosa e' cambiato:\n");
console.log(`Automobile1: ${automobile1.marca} ${automobile1.modello} ${automobile1.costo} ${automobile1.colore} ${automobile1.abbaglianti} `);
console.log(`Automobile2: ${automobile2.marca} ${automobile2.modello} ${automobile2.costo} ${automobile2.colore} ${automobile2.abbaglianti} `);
console.log(`Automobile3: ${automobile3.marca} ${automobile3.modello} ${automobile3.costo} ${automobile3.colore} ${automobile3.abbaglianti} `);
console.log(`Automobile4: ${automobile4.marca} ${automobile4.modello} ${automobile4.costo} ${automobile4.colore} ${automobile4.abbaglianti} `);
console.log(`Automobile5: ${automobile5.marca} ${automobile5.modello} ${automobile5.costo} ${automobile5.colore} ${automobile5.abbaglianti} `);
