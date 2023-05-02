class Automobile{

    constructor(modello, targa, posti, colore, cavalli){

        this.modello = modello;
        this.targa = targa;
        this.posti = posti;
        this.colore = colore;
        this.cavalli = cavalli;
    }
   id(){
        return console.log(`Il modello dell'auto è ${this.modello}, la targa è ${this.targa}`);
    }
    design(){
        return console.log(`L'automobile ha ${this.posti} posti ed il colore è ${this.colore}`);
    }

    motore(){
        return console.log(`L'automobile ha ${this.cavalli} cavalli`);
    }
}
let auto = new Automobile("Audi", "ASDDAA","4","bianca","270");
auto.id();
auto.design();
auto.motore();

let auto1 = new Automobile("mcLaren", "SHSAII","5","white","700");
auto1.id();
auto1.design();


auto1.motore();

let auto2 = new Automobile("Wolksvagen", "LKKHSS","2","red","80");
auto2.id();
auto2.design();

auto2.motore();

let auto3 = new Automobile("Skoda", "BUGGSS","5","blue","70");
auto3.id();
auto3.design();

auto3.motore();

let auto4 = new Automobile("Ferrari", "NIYGGAA","4","grey","200");
auto4.id();
auto4.design();
auto4.motore();