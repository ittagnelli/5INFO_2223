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

function confrontaOBJ (Studente, Docente) {
    if(JSON.stringify(Docente) == JSON.stringify(Studente)){
        console.log("Sono uguali")
    }else console.log("non sono uguali");
}

let studente = new Studente("Mario", 4);
let docente = new Docente("Mario", 4);

confrontaOBJ(studente, docente);
