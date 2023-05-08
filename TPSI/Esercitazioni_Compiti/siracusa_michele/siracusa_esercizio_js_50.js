class Orario {
    constructor(h, m, s) {
      this.ore = h;
      this.minuti = m;
      this.secondi = s;
    }
  
    //restituisce l'oggetto Orario minore dei due passati come argomento
    minore(altroOrario) {
      const tempo1 = this.ore * 3600 + this.minuti * 60 + this.secondi;
      const tempo2 = altroOrario.ore * 3600 + altroOrario.minuti * 60 + altroOrario.secondi;
      return tempo1 < tempo2 ? this : altroOrario;
    }
  
    //rappresenta l'oggetto Orario come una stringa "h/m/s"
    toString() {
      return this.ore + '/' + this.minuti + '/' + this.secondi;
    }
  }
  
  //main
  const orario1 = new Orario(10, 30, 45);
  const orario2 = new Orario(9, 15, 30);
  const orario3 = new Orario(10, 30, 45);
  
  console.log("Il minore tra " + orario1.toString() + " e " + orario2.toString() + " è " + orario1.minore(orario2).toString());
  console.log("Il minore tra " + orario1.toString() + " e " + orario3.toString() + " è " + orario1.minore(orario3).toString());
  