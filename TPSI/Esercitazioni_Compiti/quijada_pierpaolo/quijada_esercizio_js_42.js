class Calcolatrice {
    constructor(n1){
        this.n1 = n1;
    }
    add(numero) { return this + numero; }
    meno(numero) { return this; }
    molt(numero) { return this.n1 * numero; }
    div(numero) { return this.n1 / numero; }
}

c = new Calcolatrice(0);

c.add(1).add(1);