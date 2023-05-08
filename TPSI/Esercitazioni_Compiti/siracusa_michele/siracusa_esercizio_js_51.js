class Automobile {
  constructor() {
    this.persons = 0;
    this.speed = 0;
    this.gear = 1;
    this.isOn = false;
  }

  increaseGear() {
    if (!this.isOn) {
      console.log(`Accendi l'automobile per poter cambiare marcia.`);
      return;
    }
    if (this.gear === 6) {
      console.log(`Non puoi aumentare il rapporto di velocità oltre il massimo.`);
      return;
    }
    this.gear += 1;
    console.log(`Cambio marcia aumentato. Rapporto di velocità: ${this.gear}`);
  }

  decreaseGear() {
    if (!this.isOn) {
      console.log(`Accendi l'automobile per poter cambiare marcia.`);
      return;
    }
    if (this.gear === 1) {
      console.log(`Non puoi diminuire il rapporto di velocità sotto il minimo.`);
      return;
    }
    this.gear -= 1;
    console.log(`Cambio marcia diminuito. Rapporto di velocità: ${this.gear}`);
  }

  toggleOnOff() {
    this.isOn = !this.isOn;
    console.log(`Automobile ${this.isOn ? 'accesa' : 'spenta'}.`);
  }

  getStatus() {
    console.log(`Stato attuale dell'automobile: persone a bordo: ${this.persons}, velocità: ${this.speed} km/h, marcia: ${this.gear}, accesa: ${this.isOn ? 'sì' : 'no'}.`);
  }
}

//main
const car = new Automobile();

car.setPersons(3);   //Numero di persone a bordo: 3
car.setSpeed(100);   //Velocità impostata a: 100 km/h
car.increaseGear();  //Cambio marcia aumentato. Rapporto di velocità: 2
car.toggleOnOff();   //Automobile accesa.
car.decreaseGear();  //Cambio marcia diminuito. Rapporto di velocità: 1
car.setSpeed(200);   //Non puoi impostare una velocità così alta o bassa.
car.setPersons(6);   //Non puoi modificare il numero di persone durante la guida.
car.setPersons(2);   //Numero di persone a bordo: 2
