function get_random(){
    return Math.floor(Math.random()*100)
}


function gen_rev(N){
    let array = Array(N).fill(0).map(item => item = get_random());
    console.log(`${array}, array invertito = ${[...array].reverse()}`)
}

gen_rev(5);