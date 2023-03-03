const stringa = "supercalifragilistichespiralidoso"
function removeDuplicate(str){
    let final_string = ''
    let char_arr = new Set()
    for (let chars of str){
        if(char_arr.has(chars) == false){
            char_arr.add(chars)
        }
    }
    for(let chars of char_arr){
        final_string += chars
    }
    return final_string
    
}

console.log(removeDuplicate(stringa));