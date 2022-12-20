var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];
console.log(ordina(library));

function ordina(library){
    return library.sort((s1, s2) => {
    if(s1.title>s2.title)
        return -1;
    if(s2.title>s1.title)
        return 1;
    if(s1.title==s2.title)
        return 0;
    });
}