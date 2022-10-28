let n1 = 1,n2 = 2,n3 = 3,n4 = 4,n5 = 5,n6 = 6;

console.log("Il maggiore è" + maggiore(n1,n2,n3));
console.log("Il maggiore è" + maggiore(n3,n4,n5));
console.log("Il maggiore è" + maggiore(n5,n6,n1));

function maggiore(n1,n2,n3){
   return (n1 > n2 ? (n1 > n3 ? n1 : n3): 
   (n2 > n3 ? n2 : n3));
}