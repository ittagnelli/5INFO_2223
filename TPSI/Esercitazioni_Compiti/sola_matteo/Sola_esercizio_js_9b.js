let colors = ["rosso", "verde", "giallo", "blu", "grigio"];
let tipi = ["berlina", "sportiva", "spider", "familiare", "biposto"];
let cilindrata = [1400, 1300, 1200, 1100, 1500];
let larghezze = [170, 150, 140, 130, 110];
let lunghezze = [250, 240, 260, 270, 290];

let Automobile = function(colore, tipo, cilindrata, larghezza, lunghezza) {
    (this.colore = colore),
    (this.tipo = tipo),
    (this.cilindrata = cilindrata),
    (this.larghezza = larghezza),
    (this.lunghezza = lunghezza),
    (this.printColore = function(){
        console.log(`\nIl colore della macchina e' ${this.colore}`);
    }),
    (this.printTipo = function(){
        console.log(`Il tipo della macchina e' ${this.tipo}`);
    }),
    (this.printCilindrata = function(){
        console.log(`La cilindrata della macchina e' ${this.cilindrata}\n`);
    })   
}

let automobili = [];

for(let i = 0; i < colors.length; i++){
    let new_automobile = new Automobile(colors[i], tipi[i], cilindrata[i], larghezze[i], lunghezze[i]); 
    automobili.push(new_automobile);
}

for(let automobile of automobili){
    automobile.printColore();
    automobile.printTipo();
    automobile.printCilindrata();
}
