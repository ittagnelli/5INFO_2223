function remove_duplicates(vector) {

    vector.forEach((item) => {

        if(vector.indexOf(item) != vector.lastIndexOf(item)) vector.splice(vector.lastIndexOf(item), 1)   
    })
    
    return vector;
}

console.log(remove_duplicates([9,8,7,6,5,4,3,2,1,0]));


