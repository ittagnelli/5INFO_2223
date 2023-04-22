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

function confrontaObj(){
    let studente = new Studente("Mario", 4);
    let docente = new Docente("Mario", 4);
    return JSON.stringify(studente) == JSON.stringify(docente) ? true:false;
   
}

console.log(confrontaObj());