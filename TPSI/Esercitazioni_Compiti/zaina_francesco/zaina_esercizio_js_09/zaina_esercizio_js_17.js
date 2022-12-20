function x (string) {
    let arr = string.split('')
    
    return arr.filter(el => el.charCodeAt() >= 65 & el.charCodeAt() <= 90)
}
let stringa = "compiti"
console.log(x(stringa));