let numbers = [1,2,3,3,4,4,5]

function RemoveDuplicate(arr){
    let noduplicate = new Set(arr)
    return Array.from(noduplicate)
}

console.log(RemoveDuplicate(numbers))