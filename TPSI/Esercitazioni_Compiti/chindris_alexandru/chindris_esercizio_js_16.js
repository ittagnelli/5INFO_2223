// Mette in ordine decrescente i libri in base al titolo
function y (library) {
    return library.sort((a , b) => {
        if (a.title > b.title) return -1
        if (a.title < b.title) return 1 
        if (a.title = b.title) return 0 
    })
}

var library = [ 
    { author: 'Bill Gates', title: 'A', libraryID: 1254 },
    { author: 'Steve Jobs', title: 'C', libraryID: 4264 },
    { author: 'Suzanne Collins', title: 'B', libraryID: 3245 }
    ];

console.log(y(library));