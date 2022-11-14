function rem(str,tor){
    return str.replace(tor.concat(" "), "");
}

console.log(rem("The quick brown fox jumps over the lazy dog", "the"));