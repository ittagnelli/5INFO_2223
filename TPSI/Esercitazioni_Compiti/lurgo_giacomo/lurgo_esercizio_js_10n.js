let stringa = "ecco la prima qui presente ";
let stringa2 = "stringa";
let numero = 3;

function insert(str, str2, N) {
    a = str.charAt(N);
    b= (str.split(a));
    console.log(str.charAt(b));
    console.log(str.indexOf(str.charAt(b)))
    console.log(str.concat(a.concat(str2.concat(str.charAt(b)))));
}

insert(stringa, stringa2, numero);