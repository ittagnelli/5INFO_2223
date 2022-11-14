let stringa = "ciao sono giacomo";

function untokenize (str) {
    console.log(str.replaceAll(` `, `-`));
}

untokenize(stringa);