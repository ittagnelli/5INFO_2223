let Automobile = function(persone, velocita, rapporto_velocita, stato){
    (this.verifica_persone = (persone)=>{
        if(persone > 0 && persone <= 5)
            return persone;
        else
            return null;
    }),
    (this.verifica_velocita = (velocita)=>{
        if(velocita > 0 && velocita <= 180)
            return velocita;
        else
            return null;
    }),
    (this.verifica_rapporto_velocita = (rapporto_velocita)=>{
        if(rapporto_velocita > 0 && rapporto_velocita < 6)
            return rapporto_velocita;
        else
            return null;
    }),
    (this.persone = this.verifica_persone(persone)),
    (this.velocita = this.verifica_velocita(velocita)),
    (this.rapporto_velocita = this.verifica_rapporto_velocita(rapporto_velocita)),
    (this.stato = stato),
    (this.not_null = ()=>{
        if(this.persone != null && this.velocita != null && this.rapporto_velocita != null)
            return true;
        else
            return this.error();
    }),
    (this.cambia_persone = (nuove_persone)=>{
        if(this.not_null() && this.stato == true && this.velocita == 0){
            this.persone = nuove_persone;
        }
        else{
            this.error();
        }
    }),
    (this.cambia_velocita = (nuova_velocita)=>{
        if(this.not_null() && this.stato == true){
            if(nuova_velocita - this.velocita <= 30 && (nuova_velocita - this.velocita >= 0)){
                this.velocita = nuova_velocita;
                return;
            }
              
            if((this.velocita - nuova_velocita <= 30) && (this.velocita - nuova_velocita >= 0)){
                this.velocita = nuova_velocita;
                return;
            }
            this.error();
                
        }
        else{
            this.error();
        }

    }),
    (this.aumenta_rapporto_velocita = ()=>{
        if(this.not_null() && this.stato == true && this.rapporto_velocita < 6){
            this.rapporto_velocita++;
        }
        else{
            this.error();
        }
    }),
    (this.diminuisce_rapporto_velocita = ()=>{
        if(this.not_null() && this.stato == true && this.rapporto_velocita > 1){
            this.rapporto_velocita--;
        }
        else{
            this.error();
        }
    }),
    (this.pulsante = ()=>{
        if(this.not_null()){
           this.stato = !this.stato;
        }
        else{
            this.error();
        }
    }),
    (this.error = ()=> console.log("Error")),
    (this.stato_attuale = () => {
        return stato = {
            stat_persone: this.persone,
            stat_velocita: this.velocita,
            stat_rapporto_velocita: this.rapporto_velocita,
            stat_stato:this.stato
        }
    })
}


let automobile1 = new Automobile(3, 20, 2, true);
let risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);
console.log("Cambio persone in 4:")
automobile1.cambia_persone(4);
console.log("Cambio velocita a 70:")
automobile1.cambia_velocita(70);
console.log("Cambio velocita a 50:")
automobile1.cambia_velocita(50);
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);

console.log("Diminuizione rapporto velocità:");
automobile1.diminuisce_rapporto_velocita();
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);

console.log("Cambio velocita a 25:")
automobile1.cambia_velocita(25);
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);

console.log("Cambio stato:");
automobile1.pulsante();
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);

console.log("Cambio velocita a 30:")
automobile1.cambia_velocita(30);
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);

console.log("Cambio stato:");
automobile1.pulsante();
risultato = automobile1.stato_attuale();
console.log(`Stato del veicolo: \n\tPersone: ${risultato.stat_persone} \n\tVelocità: ${risultato.stat_velocita}\n\tRapporto velocita: ${risultato.stat_rapporto_velocita} 
\tStato: ${risultato.stat_stato}`);
