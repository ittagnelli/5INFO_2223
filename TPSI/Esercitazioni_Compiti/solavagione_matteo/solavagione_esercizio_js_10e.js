function capitalize(str){
    let parole = str.split(' '); //['ciao', 'dario', 'ruggieri' ]
    for(let i = 0; i < parole.length; i++){
        parole[i] = (parole[i].charAt(0).toUpperCase()).concat(parole[i].slice(1))
        
    }
    
    return parole.join(' '); 
    
}

console.log(capitalize("ciao dario ruggieri"))

