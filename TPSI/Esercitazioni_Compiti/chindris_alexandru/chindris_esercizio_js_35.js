function removeDuplicated(string) {
    let array = string.split('');
    let set = new Set();
    for(let x of array){
        set.add(x);
    }
    return Array.from(set).join();
}

//MAIN
let stringa = "supercalifragilistichespiralidoso" ;
console.log(removeDuplicated(stringa));