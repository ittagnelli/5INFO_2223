let arr = [5, 5, 6, 7, 8, 8]


function duplicate(arraye){
        arraye.forEach((value) => {
           if(arraye.indexOf(value) != arraye.lastIndexOf(value))
                arraye.splice(arraye.lastIndexOf(value), 1)
           
        })
    return arraye

}



console.log(duplicate(arr))