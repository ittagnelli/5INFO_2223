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

function confrontaOBJ(oggetto1, oggetto2) {
    return JSON.stringify(oggetto1) == JSON.stringify(oggetto2);
}

let studente = new Studente("Matteo", 5);

let docente = new Docente("Stefano", 4);

console.log(confrontaOBJ(studente, docente));
