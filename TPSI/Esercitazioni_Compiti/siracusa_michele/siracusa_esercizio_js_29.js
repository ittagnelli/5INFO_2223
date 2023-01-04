function vector_names(vector) {
    return Array.from(vector, (item) => item.name)
}

let students = [
    { name: "Marco", class: 4, age: 17 },
    { name: "Alex", class: 2, age: 15 },
    { name: "William", class: 4, age: 18 }
];

console.log(vector_names(students));

