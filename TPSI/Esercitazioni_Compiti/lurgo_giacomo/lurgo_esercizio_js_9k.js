let Automobile = function (persone, velocità, rapportoVelocità, stato) {
    (this.persone = persone),
    (this.velocità = velocità),
    (this.rapportoVelocità = rapportoVelocità),
    (this.stato = stato),  
    (this.set_persone =  function () {
        if(this.persone<6) {
            this.persone++;
            console.log(`A bordo della automobile le persone ora sono: ${this.persone}` );
        }
        else console.log(`In questa automobile è impossibile far stare 6 persone, i posti sono già pieni !`);
        //console.log(this.set_rapportoVelocità());
    }),
    (this.set_rapportoVelocità = function () {
        if(this.rapportoVelocità<6){
            this.rapportoVelocità++;
            console.log(`L'automobile ha inserito il ${this.rapportoVelocità} rapporto`)
        }
        else {this.rapportoVelocità--;
            console.log(`L'automobile ha scalato al rapporto n° ${this.rapportoVelocità}`);
        }
    }),
    (this.set_stato = function (){
            if(this.stato != true) {
                console.log(`Il motore è acceso`);
            }else console.log(`Impossibile soddisfare richiesta, motore spento !!`)
            
    });

};

let prima = new Automobile("6","0","1",true);
/*let seconda = new Automobile("1","150","3", true);
let terza = new Automobile("2","180","6", true);
let quarta = new Automobile("3","0","1",false);
let quinta = new Automobile("4","40","2", true);
*/

console.log(prima.set_persone());
console.log(prima.set_rapportoVelocità());
console.log(prima.set_stato(), `\n\n`);

/*console.log(seconda.set_persone());
console.log(seconda.set_rapportoVelocità());
console.log(seconda.set_stato(), `\n\n`);

console.log(terza.set_persone());
console.log(terza.set_rapportoVelocità());
console.log(terza.set_stato(), `\n\n`);

console.log(quarta.set_persone());
console.log(quarta.set_rapportoVelocità());
console.log(quarta.set_stato(), `\n\n`);

console.log(quinta.set_persone());
console.log(quinta.set_rapportoVelocità());
console.log(quinta.set_stato(), `\n\n`);*/