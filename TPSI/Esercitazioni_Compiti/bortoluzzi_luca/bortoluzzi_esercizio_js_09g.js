let ora1 = {};
ora1 = new Date(2020, 1, 1, 10, 20, 40, 0);
let ora2 = {};
ora2 = new Date(2020, 4, 3, 5, 9, 30, 600);
let ora3 = {};
ora3 = new Date(2021, 5, 10, 5, 9, 30, 600);

console.log("Il più piccolo è " + minore(ora1, ora2, ora3));

ora1 = new Date(2021, 2, 1, 10, 20, 40, 0);
ora2 = new Date(2019, 4, 3, 5, 11, 30, 600);
ora3 = new Date(2020, 9, 10, 5, 9, 30, 600);

console.log("Il più piccolo è " + minore(ora1, ora2, ora3));

function minore(ora1, ora2, ora3){
    if(ora1 < ora2){
        if(ora1 < ora3){
            return "ora1";
        }else{
            return "ora3";
        }
    }else if(ora2 < ora3){
        return "ora2";
    }else{
        return "ora3";
    }
}