function upper_case(str){
    let car = str.split('')
    for(let i = 0; i < car.length; i++){
      if(car[i].charCodeAt(0) >= 97 && car[i].charCodeAt(0) <= 122){
        car[i] = String.fromCharCode(car[i].charCodeAt(0) - 32);
      }
      
    }
    return car.join('');
}

console.log(upper_case("programmare e' complicato")); 