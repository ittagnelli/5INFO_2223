function del_dup(str){
    let set = new Set();
    Array.from(str).forEach(el => set.add(el));
    return Array.from(set).join('');
}

console.log(del_dup("supercalifragilistichespiralidoso"));