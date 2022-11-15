

function untokenize(stringa) {
    return stringa.replaceAll(" ", "-");
}

console.log(`la stringa senza spazi e': ${untokenize("Ciao a tutti")}`);