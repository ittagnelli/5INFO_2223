function cancel(second, first){
    let str = first.split(' ');
    let ind = str.indexOf(second);
    let final = (str.slice(0, ind)).concat(str.slice(ind+1))
    return final.join(' ')


}

console.log(cancel("The quick brown fox jumps over the lazy dogs", "the"))


