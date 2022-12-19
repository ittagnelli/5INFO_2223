function invert(arraye, M){
    let copy = [...arraye]
    arraye.splice(0,M+1)
    copy.splice(-M-1)
    let final = arraye.concat(copy)
    return final;
}

console.log(invert([1,2,3,4,5,6,7], 3))