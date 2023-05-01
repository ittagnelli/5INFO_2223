
class Studente {
    constructor(nome, eta) {
      this.nome = nome;
      this.eta = eta;
    }
  }
  
  class Docente {
    constructor(nome, anni_lavoro) {
      this.nome = nome;
      this.anni_lavoro = anni_lavoro;
    }
  }
  
  function confrontaOBJ(obj1, obj2) {
    //funzione confrontaOBJ
  }
  
  let studente = new Studente("Mario", 4);
  let docente = new Docente("Mario", 4);
  
  console.log(confrontaOBJ(studente, docente));