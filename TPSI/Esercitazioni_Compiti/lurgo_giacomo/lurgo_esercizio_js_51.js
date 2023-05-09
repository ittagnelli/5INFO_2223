class Automobile{
    constructor(){
        this.pers = 0;
        this.velocita = 0;
        this.marcia = 1;
        this.stato = false;
    }
    setPersone(num){
        if(this.velocita>0)
            console.log("impossibile impostare un numero di persone se la macchina è in movimento");
        else{
            if(num >= 0 || num <= 5)
                this.pers = num;
            else
                console.log("numero inserito non accettabile");
        }
        this.stampaStato()
    }
    stampaStato(){
        console.log(`Persone a bordo: ${this.pers}, velocità: ${this.velocita}, marcia: ${this.marcia}, stato: ${this.stato} `)
    }
    setvelocità(val){
        let diff_velocita = val - this.velocita;
        if(diff_velocita <= 30 && diff_velocita >= -30 && val >= 0 && val <= 180){
            this.velocita = val;
        }
        else{
            console.log("la velocitaocità inserita non è consentita")
        }
        this.stampaStato();
    }
    aumentaMarcia(){
        if(this.stato == true){
            if(this.marcia < 6){
                this.marcia++;
            }
            else{
                console.log("la marcia massima è 6");
            }
            this.stampaStato();
        }
        else{
            console.log("quando l'auto è spenta la marcia non può essere modificata");
        }
    }
    diminuisciMarcia(){
        if(this.stato == true){
            if(this.marcia > 1){
                this.marcia--;
            }
            else{
                console.log("la marcia minima è 1");
            }
            this.stampaStato();
        }
        else{
            console.log("quando l'auto è spenta la marcia non può essere modificata");
        }
    }
    on_off(){
        this.stato = !this.stato;
        this.stampaStato();
    }
}
let auto = new Automobile();

console.log("auto spenta");
auto.setPersone(4);
auto.setvelocità(10);

console.log("\n\nauto accesa + aumenta marcia");
auto.on_off();
auto.aumentaMarcia()

console.log("\n\nauto accesa + diminuisci marcia");
auto.diminuisciMarcia()

console.log("\n\nesempi errore")
auto.setPersone(2);
auto.setvelocità(50);