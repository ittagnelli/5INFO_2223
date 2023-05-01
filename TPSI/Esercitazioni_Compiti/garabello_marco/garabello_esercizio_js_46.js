class Automobile {
    #marca = ""
    #modello = ""
    #cilindrata = 0
    #cavalli = 0
    #prezzo = 0

    constructor(marca,modello, cilindrata, cavalli, prezzo) {
        this.#marca = marca
        this.#modello = modello
        this.#cilindrata = cilindrata
        this.#cavalli = cavalli
        this.#prezzo = prezzo
    }


    print_all() {
        console.log(`${this.#marca}, ${this.#modello }, ${this.#cilindrata}, ${this.#cavalli}, ${this.#prezzo}`)
    }

    marca(v) {this.#marca = v}
    tassa()  {console.log(this.#prezzo*22/100)}
}


let a = new Automobile("Tesla","S",1200,150,1000);
a.marca("Ford")
a.print_all()
a.tassa();


let b = new Automobile("Ford","Model",1500,170,150000);
b.marca("Ferrari")
b.print_all()
b.tassa();


let c = new Automobile("Fiat","Huracan",2000,300,1000000);
c.marca("Lamborghini")
c.print_all()
c.tassa();