function no_anagrams(array){
let set = new Set();
return array.filter(el => {
    let ascii_sum = Array.from(el.toLowerCase()).reduce((acc,curr)=> acc + curr.charCodeAt(),0);
    if(set.has(ascii_sum))
        return 0;
    else {
        set.add(ascii_sum);
        return 1;
    }
        
});
}

console.log(no_anagrams(['omar', 'sette', 'roma', 'teste', 'mora', 'colazione', 'locazione']));