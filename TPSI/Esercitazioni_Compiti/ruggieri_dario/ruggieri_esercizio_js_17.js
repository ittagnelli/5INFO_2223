let stringa = "ccHEewLtfL2Oq sWrdsOgtvfdcRwLffDff";

function maiuscoli(stringa){
    let vettore = Array.from(stringa);
    return vettore.filter((item)=>{
        return item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 97;
    })
}


console.log(maiuscoli(stringa));