class Quadrato {
    constructor (l) {
        this.lato = l
    }

    set lato(val) {
        this._lato = val
    }

    get area() {return this._lato**2}
    get perimetro() {return this._lato*4}
    get lato() {return this._lato}
}

function main() {

    let q = new Quadrato(document.getElementById("l").value);

    let form = document.createElement("div");
    let data = document.createElement("div");

    form.style.width = `${q.lato*10 }px`;
    form.style.height = `${q.lato*10 }px`;
    form.classList.add("square");


    data.innerHTML = `area: ${q.area} perimetro: ${q.perimetro}`;

    document.getElementById("container").append(form);
    document.getElementById("container").append(data);
}




