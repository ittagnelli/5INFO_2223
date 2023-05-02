function confrontaOBJ(ogg1, ogg2){
    return JSON.stringify(ogg1) == JSON.stringify(ogg2);
}

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

console.log(confrontaOBJ(studente, docente));




