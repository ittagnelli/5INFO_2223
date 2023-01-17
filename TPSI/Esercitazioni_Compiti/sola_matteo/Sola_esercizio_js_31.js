function rimuovi_duplicati(char) {
    return Array.from(new Set(char));
  }

let vet = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8];

console.log(rimuovi_duplicati(vet));