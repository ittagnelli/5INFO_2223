let Automobile = function(){
    (this.persone = 0),
    (this.velocita = 0),
    (this.marcia = 1),
    (this.stato = false),
    (this.passeggeri = (pers) => {
            console.log(`\nPasseggeri: ${pers}`);
            if(this.velocita > 0)
                console.log("Operazione non valida");
            else{
                if(pers <= 5 || pers >= 0)
                    this.persone = +pers;
                else
                    console.log("Operazione non valida");
            }
            this.stato_automobile();
        }), 
    (this.state = () => this.stato = !this.stato),

    (this.aggiungi_marcia = () => {
        console.log("\nMarcia+1");
        this.onoff && this.marcia != 6 ? this.marcia++ : console.log("Operazione non valida");
        this.print_attributes();
    }),
    (this.diminuisci_marcia = () => {
        console.log("\nMarcia-1");
        this.onoff && this.marcia != 0 ? this.marcia-- : console.log("Operazione non valida");
        this.print_attributes();
    }),

    (this.stato_automobile = () => {
        console.log("\nStato automobile:")
        console.log(`\nNumero persone: ${this.persone}`);
        console.log(`Velocità: ${this.velocita}km/h`);
        console.log(`Marcia: ${this.marcia}`);
        console.log(this.stato ? "Accesa" : "Spenta\n\n");
    })
}



let automobile = new Auto();