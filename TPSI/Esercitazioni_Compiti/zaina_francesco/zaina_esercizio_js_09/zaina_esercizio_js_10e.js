function capitalize(str){
    let parole = str.split(' '); //['ciao', 'mondo', 'la','terra', 'gira' ]
    for(let i = 0; i < parole.length; i++){
        parole[i] = (parole[i].charAt(0).toUpperCase()).concat(parole[i].slice(1))
        
    }
    
    return parole.join(' '); 
    
}

console.log(capitalize("ciao mondo la terra gira"))