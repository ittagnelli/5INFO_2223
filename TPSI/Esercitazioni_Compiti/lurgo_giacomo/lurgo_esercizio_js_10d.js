let stringa = "ole questa è un stringa";

function capitalize () {
    a = stringa.split(` `);
    b = stringa.replace(stringa.charAt(0), a[0].charAt(0).toUpperCase());
    console.log(b)
}

capitalize(stringa);