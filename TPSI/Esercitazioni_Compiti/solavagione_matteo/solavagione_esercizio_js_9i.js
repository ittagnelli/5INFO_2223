function maggiore(n1,n2,n3){
   return n1>n2 ? n1>n3 ? n1 : n3 : n2>n3 ? n2 : n3
}

console.log(maggiore(2,3,12));
console.log(maggiore(54,5,45));
console.log(maggiore(123,19,76));