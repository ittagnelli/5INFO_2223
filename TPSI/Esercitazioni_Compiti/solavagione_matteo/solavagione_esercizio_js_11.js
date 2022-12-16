function inverse(numbers){
    let res = numbers.sort((n1,n2) => {
        return n2-n1
    })
    return res

}

console.log(inverse([1,2,3]))