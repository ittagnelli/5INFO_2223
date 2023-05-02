class Auto {
   constructor() {
    this.persone = 0
    this.velocita = 0
    this.marcia = 1
    this.onoff = false
   }

    print_attributes (){
        console.log("\nStato macchina:")
        console.log(`\nNumero persone: ${this.persone}`);
        console.log(`Velocità: ${this.velocita}km/h`);
        console.log(`Marcia: ${this.marcia}`);
        console.log(this.onoff ? "Accesa" : "Spenta\n\n");
    }

    state (){ this.onoff = !this.onoff}

    add_people (ppl){
        console.log(`\nImposto persone a ${ppl}`);
        if(this.velocita > 0)
            console.log("Macchian in movimento, operazione non permessa");
        else{
            if(+ppl <= 5 || +ppl >= 0)
                this.persone = +ppl;
            else
                console.log("Numero inserito non valido");
        }
        this.print_attributes();
    }

    add_velocita  (speed){
        console.log(`\nImposto velocità a ${speed}`);
        if(this.onoff){  
          +speed <= (this.speed - 30) || +speed >= (this.speed + 30) || +speed > 180 ? this.speed = +speed : console.log("Condizione non rispettata")
        }
        else
            console.log("Macchina spenta");
        this.print_attributes();

    }

    aggiungi_marcia (){
        console.log("\nAggiungo marcia");
        this.onoff && this.marcia != 6 ? this.marcia++ : console.log("Operazione non valida");
        this.print_attributes();
    }
    
    togli_marcia(){
        console.log("\nTolgo marcia");
        this.onoff && this.marcia != 0 ? this.marcia-- : console.log("Operazione non valida");
        this.print_attributes();
    }
}



let auto = new Auto();

console.log("macchiana spenta:");
auto.print_attributes();
auto.add_people(4);
auto.aggiungi_marcia()
auto.add_velocita(140);

console.log("\n\nmacchiana accesa:");
auto.print_attributes();
auto.state();
auto.add_people(4);
auto.aggiungi_marcia()
auto.aggiungi_marcia()
auto.togli_marcia()
auto.add_velocita(140);

console.log("\n\nmacchiana accesa, valori sbagliati:");
auto.print_attributes();
auto.state();
auto.add_people(6);
auto.togli_marcia()
auto.add_velocita(190);