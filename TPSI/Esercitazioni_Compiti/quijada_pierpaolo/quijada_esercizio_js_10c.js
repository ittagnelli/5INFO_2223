function untokenizen(str){
    return str.replaceAll(" ", "-");
}

console.log(untokenizen("pierpaolo è a lezione"));