let N = Math.round(Math.random()*100+1);
let M = Math.round(Math.random()*100+1);

function test(N, M) {
    arr = [];
    console.log(N);
    console.log(M);
    let i = 0;
    while(i < N){
        arr.push(Math.round(Math.random()*M+1)); 
        i++;
    }

    arr.sort((a,b)=>{
        return b - a;
    });

    let st = new Set(arr);
    console.log(st);

    
}

test(N, M);