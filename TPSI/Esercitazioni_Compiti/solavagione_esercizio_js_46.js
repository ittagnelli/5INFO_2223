class Automobile {
    constructor(marcia, on_off, marca, modello, tettuccio) {
        this.marcia = marcia;
        this.marca = marca;
        this.on_off = on_off;
        this.modello = modello;
        this.tettuccio = tettuccio;
    }
    Marcia() {
        if(this.marcia <= 0)
            console.log("per partire devi inserire almeno la prima");
        else
            console.log("possiamo partire!!");

        console.log(`stai viaggiando cono la marcia ${this.marcia}`);
        
    }

    accendiSpegni() {
        if(this.on_off == 1)
            console.log("l'auto è gia accessa!");
        else
            console.log("l'auto è spenta, DEVI ACCENDERLA!!!");
    }

    gestisciTettuccio() {
        if(this.tettuccio == true)
            console.log("**L'AUTO HA IL TETTUCCIO ALZABILE**");
        else
            console.log("**L'AUTO NON HA IL TETTUCCIO ALZABILE**");
    }



}

let auto1 = new Automobile(2, 1, "bmw", "x3", false);
auto1.Marcia();
auto1.accendiSpegni();
auto1.gestisciTettuccio();

let auto2 = new Automobile(0, 0, "lamborghini", "hurachane", false);
auto2.Marcia();
auto2.accendiSpegni();
auto2.gestisciTettuccio();

let auto3 = new Automobile(4, 1, "golf", "gt", true);
auto3.Marcia();
auto3.accendiSpegni();
auto3.gestisciTettuccio();

let auto4 = new Automobile(3, 0, "fiat", "panda", false);
auto4.Marcia();
auto4.accendiSpegni();
auto4.gestisciTettuccio();

let auto5 = new Automobile(1, 1, "porsche", "panamera", true);
auto5.Marcia();
auto5.accendiSpegni();
auto5.gestisciTettuccio();