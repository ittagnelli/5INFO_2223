let Automobile = function () {
    (this.persone_a_bordo = 0),
    (this.velocità = 0),
    (this.rapporto_velocità = 1),
    (this.accesione_spegnimento = false),
    (this.stato = () => {
        console.log("\nStato macchina:")
        console.log(`\nNumero persone: ${this.persone_a_bordo}`);
        console.log(`Velocità: ${this.velocità}km/h`);
        console.log(`Marcia: ${this.rapporto_velocità}`);
        console.log(this.accesione_spegnimento ? "Accesa" : "Spenta\n\n");
    }),
    (this.aggiungi_persone = persone => {
        console.log(`\nIl numero di persone da aggiungere è ${persone}`);
        if(this.velocità > 0)
            console.log("Non è possibile modificare il numero di persone, la macchina non è ferma");
        else{
            if((this.persone_a_bordo + persone) <= 5 && (this.persone_a_bordo + persone) >= 0)
                this.persone_a_bordo = +persone;
            else
                console.log("Non è possibile inserire il numero di persone richiesto!");
        }
    }),
    (this.imposta_velocità = velocità => {
        console.log(`\nLa velocità da impostare è ${velocità}`);
        if(this.accesione_spegnimento == true){  
          +velocità <= (this.velocità - 30) || +velocità >= (this.velocità + 30) && (+velocità >= 0 && +velocità <= 180) ? this.velocità = +velocità : console.log("Non è possibile modificare la velocità!");
        }
        else
            console.log("Non è possibile modificare la velocità: la macchina è spenta");
        this.stato();
    }),
    (this.aggiungi_rapporto = () => {
        console.log("\nMarcia da aggiungere");
        this.accesione_spegnimento && this.rapporto_velocità != 6 ? this.rapporto_velocità++ : console.log("Non è possibile aggiungere la marcia");
        this.stato();
    }),
    (this.togli_rapporto = () => {
        console.log("\nMarcia da togliere");
        this.accesione_spegnimento && this.rapporto_velocità != 0 ? this.rapporto_velocità-- : console.log("Non è possibile togliere la marcia");
        this.stato();
    }),
    (this.stato_macchina = () => this.accesione_spegnimento = !this.accesione_spegnimento)
}

function main() {
    let automobile1 = new Automobile();

    console.log("Macchina spenta:");
    automobile1.stato();
    automobile1.aggiungi_persone(3);
    automobile1.aggiungi_persone(3);
    automobile1.aggiungi_rapporto();
    automobile1.imposta_velocità(50);

    console.log("\n\nMacchina accesa:");
    automobile1.stato();
    automobile1.imposta_velocità(30);
    automobile1.aggiungi_rapporto();
    automobile1.aggiungi_rapporto();
    automobile1.imposta_velocità(70);
    automobile1.aggiungi_rapporto();
    automobile1.imposta_velocità(110);
    automobile1.aggiungi_rapporto();
    automobile1.imposta_velocità(70);
    automobile1.togli_rapporto();
    automobile1.stato_macchina();


    console.log("\n\nMacchina accesa, valori non corretti:");
    automobile1.aggiungi_persone(6);
    automobile1.imposta_velocità(200);
    automobile1.togli_rapporto();
    automobile1.stato();

}

main();