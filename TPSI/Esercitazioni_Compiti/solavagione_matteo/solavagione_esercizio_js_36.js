const stringa = "supercalifragilistichespiralidoso"

function countOccurence(str){
    let vocal_map = new Map()
    let char_arr = str.split('')
    let vocals = ['a','e','i','o','u','A','E','I','O','U']
    for(chars of char_arr){
        if(vocals.includes(chars)){
            if(vocal_map.has(chars))
                vocal_map.set(chars, vocal_map.get(chars) + 1)
            else
                vocal_map.set(chars, 1)
        }
    }
    return vocal_map
}
console.log(countOccurence(stringa))