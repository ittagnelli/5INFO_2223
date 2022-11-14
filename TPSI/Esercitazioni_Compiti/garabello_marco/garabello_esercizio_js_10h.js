function tronca(str, L){
    let cut = str.slice(0,L+1);
    return cut.concat("...")
}


console.log(tronca("Ciao Mondo la terra gira!!!", 10));