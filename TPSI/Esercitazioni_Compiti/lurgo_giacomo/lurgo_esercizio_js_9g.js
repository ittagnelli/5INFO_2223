let orariouno = {
    ore: 10,
    minuti: 13,
    secondi: 18,
};

let orariodue = {
    ore: 2,
    minuti: 55,
    secondi: 2,
};

let orariotre = {
    ore: 15,
    minuti: 15,
    secondi: 59,
};

function numOre () {
    if (orariouno.ore-orariodue.ore <0 && orariouno.ore-orariotre.ore<0) console.log(`L'object literals minore dei tre è il primo`);
    else if(orariodue.ore-orariouno.ore <0 && orariodue.ore-orariotre.ore<0) console.log(`L'object literals minore dei tre è il secondo`);
        else console.log(`L'object literals minore dei tre è il terzo`);
}
numOre();
