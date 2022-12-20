// rimuove le lettere maiuscole da un stringa 
function x (string) {
    let arr = string.split('')
    
    return arr.filter(el => el.charCodeAt() >= 65 & el.charCodeAt() <= 90)
}
let stringa = "EEEEEEEEEEEuuuuuuuuuuuu"
console.log(x(stringa));