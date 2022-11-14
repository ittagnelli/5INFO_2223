let str = `giacomo lurgo`;

function fun(str) {
    a = str.split(` `);
    b = a[0].charAt(0).toUpperCase();
    str[0].charAt(0).replace(b);
    let stringa = a[0].concat(a[1].charAt(0).toUpperCase(), `.`);
    console.log(stringa);
}

fun(str);
