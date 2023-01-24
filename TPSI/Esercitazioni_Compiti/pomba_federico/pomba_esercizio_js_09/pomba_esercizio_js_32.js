let insieme = new Set(['omar','rosa','mora','roma','cora']);
function anagram(insieme){
    let result = [];
    let parole = insieme.map(item => item.split('').sort().join(''));
    for (let i = 0; i < insieme.length; i++) {
        if (parole.indexOf(parole[i]) === i) {
            result.push(insieme[i]);
        }
    }
    return result;
}
console.log(anagram(insieme));