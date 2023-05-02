    class Animale{
        constructor(razza, eta, colore){
            this.razza = razza;
            this.eta = eta;
            this.colore = colore;
        }

        id_cane(){
            return console.log(`La razza dell'animale è ${this.razza} l'età è ${this.eta}`);
        }

        colo(){
            return console.log(`L'animale è di colore ${this.colore}`);
        }

        enumera(){
            for (let key of Object.keys(this)) {console.log(key)};
        }

    }

    class Automobile{
        constructor(modello, targa, posti){
            this.modello = modello;
            this.targa = targa;
            this.posti = posti;
        }

        id(){
            return console.log(`Il modello dell'auto è ${this.modello} e la targa è ${this.targa}`);
        }

        design(){
            return console.log(`L'automobile ha ${this.posti} posti`);
        }

        enumera(){
            for (let key of Object.keys(this)) {console.log(key)};
        }
    }

    class Poligono{
        constructor(angoli, lati, figura){
            this.angoli = angoli;
            this.lati = lati;
            this.figura = figura;
        }

        id_poli(){
            return console.log(`Iò poligono ha ${this.angoli} angoli ed i lati sono ${this.lati}`);
        }

        fig(){
            return console.log(`Il poligono ha figura di ${this.figura}`);
        }

        enumera(){
            for (let key of Object.keys(this)) {console.log(key)};
        }

    }

    let animale = new Animale("Volpe", "4","rosso");
    animale.id_cane();
    animale.colo();
    animale.enumera();

    let animale2 = new Animale("Lupo", "2","grigio");
    animale2.id_cane();
    animale2.colo();
    animale2.enumera();

    let auto1 = new Automobile("Rolls Royce", "UIOPAS","5");
    auto1.id();
    auto1.design();
    auto1.enumera();

    let auto2 = new Automobile("Audi", "QWERTY","5");
    auto2.id();
    auto2.design();
    auto2.enumera();

    let poli = new Poligono("3", "3","triangolo");
    poli.id_poli();
    poli.fig();
    poli.enumera();

    let poli2 = new Poligono("4", "4","rettangolo");
    poli2.id_poli();
    poli2.fig();
    poli2.enumera();