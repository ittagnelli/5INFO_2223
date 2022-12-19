let vet = [1,2,3,4,5,6,7,8,9,10];


function riduci(vet,N,M){
    return vet.filter((item)=>{
        if(item >= N && item <= M) return item;
    })
}

console.log(riduci(vet, 2,5));