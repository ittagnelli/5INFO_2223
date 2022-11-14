function invert_case(str){
    let parole = str.split('');
    for(let i = 0; i < parole.length; i++){
            if(parole[i] == parole[i].toUpperCase()){
                    parole[i] = parole[i].toLowerCase()

            }
            else{
                    parole[i] = parole[i].toUpperCase()
            }
                

        }
        return parole.join('')
    }

console.log(invert_case("cIaO MoNdO"))