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


function confrontaOBJ(obj1, obj2) {
    return JSON.stringify(obj1) == JSON.stringify(obj2);
}

let studente = new Studente("Mario", 4);

let docente = new Docente("Mario", 4)


console.log(confrontaOBJ(studente,docente));