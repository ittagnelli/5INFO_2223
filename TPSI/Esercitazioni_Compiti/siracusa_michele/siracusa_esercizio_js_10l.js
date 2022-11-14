function swap(first, second){
    let prima_della_prima = first.charAt(1) 
    let seconda_della_prima = first.charAt(0) 
    let prima_finale = (prima_della_prima.concat(seconda_della_prima)).concat(first.slice(2))
    let prima_della_seconda = second.charAt(1) 
    let seconda_della_seconda = second.charAt(0) 
    let seconda_finale = (prima_della_seconda.concat(seconda_della_seconda)).concat(second.slice(2))
    return prima_finale.concat(seconda_finale);

}

console.log(swap("ciao", "michele!!!"));




