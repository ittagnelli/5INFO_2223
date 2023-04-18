class Studente {
    constructor(nome, classe) {
      this.nome = nome;
      this.classe = classe;
    }
  }
  
  class Docente {
    constructor(nome, classe) {
      this.nome = nome;
      this.classe = classe;
    }
  }
  
  function confrontaOBJS(obj1, obj2) {
    // verifico se i due oggetti hanno la stessa lunghezza delle proprietà
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
      return false;
    }
  
    // verifico se ogni proprietà dell'oggetto 1 esiste nell'oggetto 2 e ha lo stesso valore
    for (let prop in obj1) {
      if (obj1.hasOwnProperty(prop)) {
        if (!obj2.hasOwnProperty(prop) || obj1[prop] !== obj2[prop]) {
          return false;
        }
      }
    }
  
    // verifico se ogni proprietà dell'oggetto 2 esiste nell'oggetto 1 e ha lo stesso valore
    for (let prop in obj2) {
      if (obj2.hasOwnProperty(prop)) {
        if (!obj1.hasOwnProperty(prop) || obj2[prop] !== obj1[prop]) {
          return false;
        }
      }
    }
  
    return true;
  }
  
  const s1 = new Studente('Mario', '5A');
  const s2 = new Studente('Luigi', '5B');
  const s3 = new Studente('Mario', '5A');
  
  const d1 = new Docente('Prof. Rossi', '5A');
  const d2 = new Docente('Prof. Bianchi', '5B');
  const d3 = new Docente('Prof. Rossi', '5A');
  
  console.log(confrontaOBJS(s1, s2)); // viene falso
  console.log(confrontaOBJS(s1, s3)); // viene vero
  
  console.log(confrontaOBJS(d1, d2)); // viene falso
  console.log(confrontaOBJS(d1, d3)); // viene vero
  
  console.log(confrontaOBJS(s1, d1)); // viene falso