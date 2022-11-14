function remove(prima, seconda){
    let stringa = prima.split(' ');
    let ind = stringa.indexOf(seconda);
    let final = (stringa.slice(0, ind)).concat(stringa.slice(ind+1))
    return final.join(' ')

}

console.log(remove("The quick brown fox jumps over the lazy dogs", "the"))