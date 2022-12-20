function rand(val){

return Math.floor(Math.random()*val)

}

function invert(rand, N){
    let array = Array(N).fill(0).map((item)=> item = rand(10));
   
    let reversed = []
    console.log("array: " + array);
  
    console.log("reverse: " + reversed);
}

console.log(invert);