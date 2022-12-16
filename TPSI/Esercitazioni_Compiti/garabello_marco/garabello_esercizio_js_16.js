function order_obj(array){
    return array.sort((item1, item2) => item2.title > item1.title ? 1 : item2.title == item1.title ? 0 : -1 );
}


let library = [ 
    { author: 'Bill Gates', title: 'The Road Ahead', libraryID: 1254},
    { author: 'Steve Jobs', title: 'Walter Isaacson', libraryID: 4264},
    { author: 'Suzanne Collins', title: 'Mockingjay: The Final Book of The Hunger Games', libraryID: 3245}
    ];


console.log(order_obj(library));