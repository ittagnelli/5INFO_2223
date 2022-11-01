let ora1 = new Date(0, 0, 0, 13, 1, 10);
let ora2 = new Date(0, 0, 0, 12,55, 40);
let ora3 = new Date(0, 0, 0, 13, 20, 35);
let ora4 = new Date(0, 0, 0, 4, 23, 45);
let ora5 = new Date(0, 0, 0, 22,30, 11);
let ora6 = new Date(0, 0, 0, 9, 6, 2);
function orario_min(obj1, obj2, obj3){
     if(obj1 < obj2){
        if(obj1 < obj3){
            return obj1;
        }
        else{
            return obj3;
        }
           
    } else if(obj2 < obj3){
        return obj2;
    }else 
        return obj3;
       
    } 
        

console.log(" l'orario minore è " + orario_min(ora1, ora2, ora3), "\n");
console.log(" l'orario minore è " + orario_min(ora4, ora5, ora6));
