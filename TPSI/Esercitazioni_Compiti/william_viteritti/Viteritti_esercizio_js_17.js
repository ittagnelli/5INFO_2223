function maiuscole(N){
    //let array = Array.from(N);
    let array = N.split('');
    return array.filter((value) => { 
        return value.charCodeAt(0) >= 65 && value.charCodeAt(0) <= 90});
    
}

let N = "asdetdyhujkWvgjkIjkhLjhLkhgIgjutkAjkhfM";//WILLIAM
console.log(maiuscole(N));