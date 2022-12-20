function uppercase_return(string){
    let vet = string.split('');

    return vet.filter((value)=> {
        return value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 95
    });
}

let string= "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

console.log(uppercase_return(stringa));


