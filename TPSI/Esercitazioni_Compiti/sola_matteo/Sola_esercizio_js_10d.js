function capitalize(stringa) {
    let lettera_maiuscola = stringa.slice(0, 1).toUpperCase();
    let stringa_finale = stringa.replace(stringa.slice(0, 1), lettera_maiuscola);

    return stringa_finale;
}

console.log(`La nuova frase è: ${capitalize("ciao a tutti")}`);
