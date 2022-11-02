function maggiore(n1,n2,n3){
    return n1 > n2 ? n1 > n3 ? n1: n3 : n2 > n3 ? n2 : n3;
}

console.log(maggiore(1,3,4));
console.log(maggiore(5,3,4));
console.log(maggiore(7,1,4));