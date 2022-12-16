
function maiuscoli(str){
    let arr = str.split('')
    return arr.filter((value) => value.charCodeAt() >= 65 && value.charCodeAt() <= 90)
}

console.log(maiuscoli("ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff"))