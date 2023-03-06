function vett(str){
    let arr = str.split('');
    return arr.filter(char => char.charCodeAt() >= 65 && char.charCodeAt() <= 90);
}

let str = 'ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff';
console.log(vett(str));