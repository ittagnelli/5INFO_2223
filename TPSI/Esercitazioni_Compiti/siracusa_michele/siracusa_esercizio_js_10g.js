function invert_case(str){
    let words = str.split('');
    for(let i = 0; i < words.length; i++){
            if(words[i] == words[i].toUpperCase()){
                    words[i] = words[i].toLowerCase()

            }
            else{
                    words[i] = words[i].toUpperCase()
            }
                

        }
        return words.join('')
    }

console.log(invert_case("Ciao Mondo!!!"))



