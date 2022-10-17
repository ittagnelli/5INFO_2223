let Automobile = function (nome, casa, modello, potenza, fattura) {
  (this.nome = nome),
  (this.casa = casa),
  (this.modello = modello),
  (this.potenza = potenza),
  (this.fattura = fattura),
  (this.get_Nome =  function () {
   console.log(`Nome: ${this.casa} ${this.nome}`);
  });
  (this.get_Velocità = function () {
   console.log(`Cavalli: ${this.potenza}`);
  });
  (this.get_Fatturazione = function () {
   console.log(`fattura: ${this.fattura}$`);
  });
}

let prima = new Automobile("Panda","Fiat","500",80,"elettronica");
let seconda = new Automobile("Punto","Fiat","500",88,"elettronica");
let terza = new Automobile("Multipla","Fiat","500",110,"elettronica");
let quarta = new Automobile("Phedra","Lancia","500",170,"elettronica");
let quinta = new Automobile("Murcielago","Lambo","500",460,"elettronica");

console.log(`prima: `)
prima.get_Nome();
prima.get_Velocità();
prima.get_Fatturazione();
console.log(`\n`);
console.log(`seconda: `)
seconda.get_Nome();
seconda.get_Velocità();
seconda.get_Fatturazione();
console.log(`\n`);
console.log(`terza: `)
terza.get_Nome();
terza.get_Velocità();
terza.get_Fatturazione();
console.log(`\n`);
console.log(`quarta: `)
quarta.get_Nome();
quarta.get_Velocità();
quarta.get_Fatturazione();
console.log(`\n`);
console.log(`quinta: `)
quinta.get_Nome();
quinta.get_Velocità();
quinta.get_Fatturazione();
console.log(`\n\n`);