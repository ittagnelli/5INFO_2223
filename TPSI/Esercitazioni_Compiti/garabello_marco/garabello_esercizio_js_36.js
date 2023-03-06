function count_vocals(str){
    let map = new Map([['a', 0],['e', 0], ['i', 0],['o',0],['u',0]]);
    Array.from(str.toLowerCase()).filter(el => ['a','e','i','o','u'].includes(el)).forEach(el => map.set(el,map.get(el)+1));
    return map;
}

console.log(count_vocals("supercalifragilistichespiralidoso"));