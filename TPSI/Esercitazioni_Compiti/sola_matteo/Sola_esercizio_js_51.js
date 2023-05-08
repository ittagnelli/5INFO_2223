class Automobile{
    constructor(){
        this.persone_bordo = 0;
        this.velocita = 0;
        this.marcia = 1;
        this.stato_auto = false;
    }

    setPersone(num){
        if(this.velocita>0)
            console.log("non posso impostare il numero di persone");
        else{
            if(num >= 0 || num <= 5)
                this.persone_bordo = num;
            else
                console.log("numero inserito non concesso");
        }
        this.stampaStato();
    }

    setVelocità(val){
        let diff_vel = val - this.velocita;
        if(diff_vel <= 30 && diff_vel >= -30 && val >= 0 && val <= 180){
            this.velocita = val;
        }
        else{
            console.log("la velocità inserita non è consentita")
        }
        this.stampaStato();
    }

    aumentaMarcia(){
        if(this.stato_auto == true){
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
        if(this.stato_auto == true){
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

    stampaStato(){
        console.log(`Persone a bordo: ${this.persone_bordo}, Velocità: ${this.velocita}, Marcia: ${this.marcia}, Stato: ${this.stato_auto}`);
    }

    on_off(){
        this.stato_auto = !this.stato_auto;
        this.stampaStato();
    }
}

let auto = new Automobile();

console.log("Auto spenta");
auto.setPersone(3);

console.log("\n\nAuto accesa + aumenta marcia");
auto.on_off();
auto.setVelocità(30);
auto.aumentaMarcia();

auto.setVelocità(15);
console.log("\n\nauto accesa + diminuisci marcia");
auto.diminuisciMarcia();

console.log("\n\nEsempi errore:");
auto.setPersone(2);
auto.setVelocità(50);
