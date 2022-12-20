var library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];

function sortle(library) {
    let ordered = library.sort((t1, t2) => {
        if(t2.title>t1.title)return 1
        else if(t2.title<t1.title) return -1
             else return 0
    })  
    console.log(ordered)
}
console.log(sortle(library));