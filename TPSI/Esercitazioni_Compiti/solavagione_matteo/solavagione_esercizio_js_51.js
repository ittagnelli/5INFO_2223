class Automobile{
    constructor(){
        this.pers = 0;
        this.vel = 0;
        this.marcia = 1;
        this.stato = false;
    }
    setPersone(num){
        if(this.vel>0)
            console.log("non posso impostare il numero di persone");
        else{
            if(num >= 0 || num <= 5)
                this.pers = num;
            else
                console.log("numero inserito non concesso");
        }
        this.stampaStato()
    }

    stampaStato(){
        console.log(`Persone a bordo: ${this.pers}, Velocità: ${this.vel}, Marcia: ${this.marcia}, Stato: ${this.stato} `)
    }

    setVelocità(val){
        let diff_vel = val - this.vel;
        if(diff_vel <= 30 && diff_vel >= -30 && val >= 0 && val <= 180){
            this.vel = val;
        }
        else{
            console.log("la velocità inserita non è consentita")
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
auto.setVelocità(10);

console.log("\n\nauto accesa + aumenta marcia");
auto.on_off();
auto.aumentaMarcia()

console.log("\n\nauto accesa + diminuisci marcia");
auto.diminuisciMarcia()

console.log("\n\nesempi errore")
auto.setPersone(2);
auto.setVelocità(50);
