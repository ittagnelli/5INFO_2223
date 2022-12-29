function student_average(array){
    return ((array.reduce((acc,curr) => acc += curr.age,0))/array.length)
}

let students = [
    { name: "Marco", class: 4, age: 18 },
    { name: "Alex", class: 2, age: 17 },
    { name: "William", class: 4, age: 18 }
  ];


console.log(student_average(students));


