function untokenize(str){

    return str.replaceAll(" ", "-");

}

let spaziatura= untokenize("Nel mezzo del cammin di nostra vita");
console.log(spaziatura);