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

let studente = new Studente("Mario", 4);

let docente = new Docente("Mario", 4);

JSON.stringify(Studente) == JSON.stringify(Docente);
