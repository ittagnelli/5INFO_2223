function riduci(vet,N,M){
    return vet.filter((item)=>{
        if(item >= N && item <= M) return item;
    })
}

console.log(riduci([1,2,3,4,5,6,7,8,9,10], 2,5));