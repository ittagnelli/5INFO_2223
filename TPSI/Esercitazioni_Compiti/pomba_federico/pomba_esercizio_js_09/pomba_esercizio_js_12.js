function bool(){
    
let arr1 = [1,5,7,2,4,6];
let arr2 = [2,5,2,6,8,8];

let verif= [
    arr1.map((el, id) => arr2[id] === el).every(item => item == turue)
];
console.log(verif);
}
bool();
