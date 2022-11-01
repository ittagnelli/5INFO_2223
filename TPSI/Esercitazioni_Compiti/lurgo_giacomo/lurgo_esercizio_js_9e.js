let orariouno = {
    ore: 10,
    minuti: 40,
    secondi: 44,
};
let orariodue = {
    ore: 6,
    minuti: 23,
    secondi: 33,
};

function numOre () {
    return orariouno.ore-orariodue.ore;
}
function numMin () {
    return orariouno.minuti-orariodue.minuti;
}
function numSec () {
    return N_Sec = orariouno.secondi-orariodue.secondi;
}
function milliSec () {
    return numSec()*1000;
}
console.log(`Le ore che separano il primo orario dal secondo sono: `, numOre());
console.log(`I minuti che separano il primo orario dal secondo sono: `, numMin());
console.log(`I secondi che separano il primo orario dal secondo sono: `, numSec());
console.log(`I millisecondi che separano il primo orario dal secondo sono: `, milliSec());