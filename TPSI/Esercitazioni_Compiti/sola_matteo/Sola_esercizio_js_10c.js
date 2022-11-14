function untokenize(stringa) {
    return stringa.replaceAll(" ", "-");
}

console.log(`La stringa senza spazi è: ${untokenize("Ciao a tutti")}`);
