function only_cpas(str){
    let copy = str.split("");
    return copy.filter(item => item.charCodeAt(0) >= 65 && item.charCodeAt(0)<= 97);
}

console.log(only_cpas("ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff"));
