let str = "Francesco Zaina";
function abbrevCognome(str) {
    let str2 = str.split(' ')
    let str3 = str2[1].slice(0, 1);

    console.log(str2[0] + " " + str3 + ".")
}

abbrevCognome(str);