function ordinato(array){
    return array.sort((item1, item2) => item2.title > item1.title ? 1 : item2.title == item1.title ? 0 : -1 );
}

let dati = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254}
];

console.log(ordinato(dati));