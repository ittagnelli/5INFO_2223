function get_random(N){
    return Math.floor(Math.random()*N)
}

function rand_arr(){
    let array = Array(7).fill(0);

    array.forEach((item,idx) =>{
        let choice = get_random(2);
        if(choice)
            array[idx] = String.fromCharCode(get_random(26) + 97)
        else
            array[idx] = String.fromCharCode(get_random(10) + 48)
    });
    return array;
}


console.log(rand_arr())