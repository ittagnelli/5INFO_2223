const { lib } = require("crypto-js");

var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function ordina(library){
    return library.sort((a,b) => {
       return b.title > a.title ? 1 : b.title < a.title ? -1 : 0;
    })
}

console.log(ordina(library));