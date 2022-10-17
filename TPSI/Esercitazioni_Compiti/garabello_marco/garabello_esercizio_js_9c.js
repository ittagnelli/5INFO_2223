let Animale = function (nome, specie, eta) {
    (this.nome = nome),
    (this.specie = specie),
    (this.eta = eta),
    (this.speak =  () => { console.log(`ciao io sono l'animale ${this.nome} e ho ${this.eta}  anni`); }),
    (this.specie =  () => { console.log(`sono un/a ${this.specie}`); }),
    (this.enumera = () =>{ 
        let attributes = Object.keys(this);
        for(let attribute in attributes){
            console.log(attributes[attribute]);
        }
    });
  };

let Automobile = function (marca, modello, prezzo) {
    (this.marca = marca),
    (this.prezzo = prezzo),
    (this.modello = modello),
    (this.addcol =  (col) => {
        this.colore = col;
        console.log(`colore aggiunto: ${this.colore}`); 
    }),
    (this.sconto = (perc_sconto) => { console.log(`prezzo scontato: ${(this.prezzo - ((this.prezzo*perc_sconto)/100))}`); }),
    (this.enumera = () =>{ 
        let attributes = Object.keys(this);
        for(let attribute in attributes){
            console.log(attributes[attribute]);
        }
    });
};

let Poligono = function (tipo, perimetro, area) {
    (this.tipo = tipo),
    (this.perimetro = perimetro),
    (this.area = area),
    (this.type =  () => { console.log(`sono un ${this.tipo}`); }),
    (this.dati = () => { console.log(`la mia area è: ${this.area} ed il mio perimetro è: ${this.perimetro}`); }),
    (this.enumera = () =>{ 
        let attributes = Object.keys(this);
        for(let attribute in attributes){
            console.log(attributes[attribute]);
        }
    });
  };

  
let animale1 = new Animale("Josh", "gallus domesticus", 1);
let animale2 = new Animale("Eve", "Orcinus orca", 16);

let auto1 = new Automobile("Fiat", "500", 20000);
let auto2 = new Automobile("Testa", "Model S", 63000);

let poligono1 = new Poligono("triangolo", 140, 230);
let poligono2 = new Poligono("quadrato", 40, 100);

console.log("animale1:");
animale1.enumera();
console.log("\nanimale1:");
animale2.enumera();

console.log("\nauto1:");
auto1.enumera();
console.log("\nauto2:");
auto2.enumera();
  
console.log("\npoligono1:");
poligono1.enumera();
console.log("\npoligono2:");
poligono2.enumera();