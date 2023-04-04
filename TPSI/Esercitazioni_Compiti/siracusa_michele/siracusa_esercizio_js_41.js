class Quadrato {
    constructor(l) {
      this.lato = l;
    }

    set lato(val) { this._lato = val; }
    get lato() {return this._lato;}
    get perimetro() { return this._lato * 4; } 
    get area() { return this._lato ** 2; }
  }

  function calcola() {
    const lato = document.getElementById("lato").value;
    const quadrato = new Quadrato(+lato);

    const perimetro = quadrato.perimetro;
    const area = quadrato.area;

    const resultsDiv = document.getElementById("results");
    const disegnoDiv = document.getElementById("disegno");
    console.log(quadrato.lato);
    disegnoDiv.style.backgroundColor = "blue";
    disegnoDiv.style.width = `${quadrato.lato * 10}px`;
    disegnoDiv.style.height = `${quadrato.lato * 10}px`;
    disegnoDiv.style.border ='1px solid black';
    resultsDiv.innerHTML = `Perimetro: ${perimetro} <br> Area: ${area}`;
  }

