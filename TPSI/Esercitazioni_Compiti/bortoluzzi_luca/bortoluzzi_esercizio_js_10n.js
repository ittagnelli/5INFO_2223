function insert(prima, seconda, N){
   return prima.slice(0,N) + " " + seconda + prima.slice(N);
}

console.log(insert("ho preso in matematica", "5", 8));