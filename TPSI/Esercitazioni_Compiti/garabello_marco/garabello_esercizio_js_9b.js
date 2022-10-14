let Automobile = function (nome, marca, modello, cavalli, prezzo) {
    (this.nome = nome),
    (this.marca = marca),
    (this.modello = modello),
    (this.cavalli = cavalli),
    (this.prezzo = prezzo),
    (this.get_name =  () => console.log(`Nome: ${this.marca} ${this.nome}`) ),
    (this.get_speed = () => console.log(`Cavalli: ${this.cavalli}`)),
    (this.get_prezzo = () => console.log(`prezzo: ${this.prezzo}$`));
};


let auto1 = new Automobile("pina","fiat","500",100,25000);
let auto2 = new Automobile("tina","ferrari","500",300,25000);
let auto3 = new Automobile("cina","lamborghini","500",300,25000);
let auto4 = new Automobile("giorgio","lancia","500",150,25000);
let auto5 = new Automobile("ernesto","tesla","500",200,40000);

console.log(`Auto1:`)
auto1.get_name();
auto1.get_speed();
auto1.get_prezzo();
 

console.log(`\nAuto2:`)
auto2.get_name();
auto2.get_speed();
auto2.get_prezzo();

console.log(`\nAuto2:`)
auto3.get_name();
auto3.get_speed();
auto3.get_prezzo();

console.log(`\nAuto4:`)
auto4.get_name();
auto4.get_speed();
auto4.get_prezzo();

console.log(`\nAuto5:`)
auto5.get_name();
auto5.get_speed();
auto5.get_prezzo()