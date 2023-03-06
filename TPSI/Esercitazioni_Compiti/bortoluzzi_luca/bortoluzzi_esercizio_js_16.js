var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function ordina(lib){
    let cp_lib = lib.slice();

    let temp = cp_lib.sort((a, b) =>{ 
        if(a.title < b.title) return 1;
        if(a.title > b.title) return -1;
        if(a.title === b.title) return 0;
    }); 

    return temp;
}

console.log(ordina(library));