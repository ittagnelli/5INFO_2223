function scambia(prima, seconda){
    let first_of_prima = prima.charAt(1) //i
    let second_of_prima = prima.charAt(0) //c
    let final_first = (first_of_prima.concat(second_of_prima)).concat(prima.slice(2))
    let first_of_seconda = seconda.charAt(1) //o
    let second_of_seconda = seconda.charAt(0) //m
    let final_second = (first_of_seconda.concat(second_of_seconda)).concat(seconda.slice(2))
    return final_first.concat(final_second);
}

console.log(scambia("ciao", "mondo"));