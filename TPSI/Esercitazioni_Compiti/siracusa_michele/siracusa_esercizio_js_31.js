function removeDuplicates(arr) {
    return Array.from(new Set(arr));
  }

let myArray = [1, 2, 3, 4, 2, 3, 4, 5];
console.log(removeDuplicates(myArray)); 


