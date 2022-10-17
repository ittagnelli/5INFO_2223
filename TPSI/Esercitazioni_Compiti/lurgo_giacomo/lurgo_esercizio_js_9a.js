let automobile = {
  nome: `Panda`,
  marca: `Fiat`,
  altezza: `1.65`,
  colore: `Rosso`,
} 

let no = 0;
for (key in utente) {
  no = no + 1;
  //console.log(no);

for (let i=1; i<=no; i++) {
  i = key;
  console.log(`La chiave ${key} ha il seguente vaolre: ${utente[key]}`)
}
}
