let Automobile = function (persone, velocità, rapportoVelocità) {
  (this.persone = persone),
  (this.velocità = velocità),
  (this.rapportoVelocità = rapportoVelocità),
  (this.stato = stato);
}




  (this.set_persone =  function () {
   //console.log(`Inserire il numero di persone da voler mettere in macchina`);
   let num = prompt(`Inserire il numero di persone da voler mettere in macchina`);
  });
  (this.get_Velocità = function () {
   console.log(`Cavalli: ${this.potenza}`);
  });
  (this.get_Fatturazione = function () {
   console.log(`fattura: ${this.fattura}$`);
  });








let prima = new Automobile("0","0","1",true);
let seconda = new Automobile("1","150","3", true);
let terza = new Automobile("2","180","6", true);
let quarta = new Automobile("3","60","2",true);
let quinta = new Automobile("4","40","2", true);

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