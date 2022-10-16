let Automobile = function (targa, cilindrata, velocita, color, owner) {
      (this.targa = targa),
      (this.cilindrata = cilindrata),
      (this.velocita = velocita),
      (this.color = color),
      (this.owner = owner),
      (this.max_speed = function () {
        console.log(`La velocità massima consentita è ${this.velocita}`);
      });
      (this.car_color = function () {
        console.log(`Il colore della macchina è ${this.color}`);
      });
      (this.proprietario = function () {
        console.log(`Il proprietario è ${this.owner}`);
      });
};

let auto0 = new Automobile("A1F46", "una cilindrata", "80km/h", "rosso", "Gcc" );
let auto1 = new Automobile("A15GE", "una cilindrata", "130km/h", "blu", "Gigi" );
let auto2 = new Automobile("A1565", "una cilindrata", "50km/h", "marrone", "Clang" );
let auto3 = new Automobile("A1VRV", "una cilindrata", "20km/h", "fucsia", "Pasquale" );
let auto4 = new Automobile("A15G5", "una cilindrata", "45km/h", "arancione", "Anonimouse" );

console.log("Auto 0 :");
console.log(auto0.proprietario());
console.log(auto0.car_color());
console.log(auto0.max_speed());

console.log("Auto 1 :");
console.log(auto1.proprietario());
console.log(auto1.car_color());
console.log(auto1.max_speed());

console.log("Auto 2 :");
console.log(auto2.proprietario());
console.log(auto2.car_color());
console.log(auto2.max_speed());