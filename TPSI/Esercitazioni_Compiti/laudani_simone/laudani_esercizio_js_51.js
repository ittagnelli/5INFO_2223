class Automobile{

    constructor(){

        this.pers = 0;

        this.vel = 0;

        this.marcia = 1;

        this.stato = 0;

    }
    setPersone(num){

            if(num >= 0 || num <= 5){
                this.pers = num;
           } else
                console.log("numero inserito errato ");
        }
        this.stampaStato()
    }

    stampaStato(){

        console.log(`Persone a bordo: ${this.pers}, Velocità: ${this.vel}, Marcia inserita: ${this.marcia}, Stato: ${this.stato} `)
    }

    setVelocità(val){

        let diff_vel = val - this.vel;


        if(diff_vel <= 30 && diff_vel >= -30 && val >= 0 && val <= 180){
            
            this.vel = val;
        }

        else{
            console.log("err")
        }
        this.stampaStato();
     
    }

    aumentaMarcia(){

        if(this.stato == 1){
            if(this.marcia < 6){
                this.marcia++;
            }
            else{
                console.log("la 6 è la max");
            }
            this.stampaStato();

        }
        else{
            console.log("quando l'auto è spenta la marcia non può essere modificata");
        }
    }

    diminuisciMarcia(){
        if(this.stato == 1){
            if(this.marcia > 1){
                this.marcia--;
            }
            else{
                console.log("minimo la 1");
            }
            this.stampaStato();

        }
        else{
            console.log("quando l'auto è spenta la marcia non può essere inserita");
        }
    }


    on_off(){
        this.stato = !this.stato;
        this.stampaStato();
    }
}

let auto = new Automobile();

console.log("auto spenta");
auto.setPersone(5);
auto.setVelocità(120);

console.log("\n\nauto accesa + aumenta marcia");

auto.on_off();
auto.aumentaMarcia()

console.log("\n\nauto accesa + diminuisci marcia");

auto.diminuisciMarcia()

auto.setPersone(2);
auto.setVelocità(70);