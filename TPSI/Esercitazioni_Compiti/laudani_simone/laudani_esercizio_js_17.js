function func(str){
    let dupe = str.split("");
    return dupe.filter(item => item.charCodeAt(0) >= 65 && item.charCodeAt(0)<= 97);
}

console.log(func("uxAEAmSbar XZvSjwvOMkImmHysPaxi"));
