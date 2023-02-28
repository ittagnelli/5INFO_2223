let stringa = "Javascript è un lnguaggio molto bello. Javascript è un linguaggio di alto livello"

function numero_occorrenz(str){
    let arr=str.split(' ');
    let mappe = new Map();
    
    arr.forEach(element => {
        if(mappe.has(element)) {
            mappe.set(element, mappe.get(element)+1);
        }
        else mappe.set(element, 1);
            
    });    
    return mappe;   
}
console.log(numero_occorrenz(stringa))