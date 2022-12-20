let array = [1,100,4,22,56,44,12,3]
function put(arr, N, M){
   return arr.filter((value) => value >= N && value <= M)

}

console.log(put(array, 5, 74))
