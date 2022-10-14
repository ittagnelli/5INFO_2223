class Car{
    constructor(name, id_car, year, color, size){
        (this.name = name),
        (this.id_car = id_car),
        (this.year = year),
        (this.color = color),
        (this.size = size),

        (this.Registration = function(){
            console.log(`Car has been registreted as ${this.id_car} in ${this.year} year`);
        });

        (this.Model = function(){
            console.log(`Car's model is a ${this.name} of ${this.color} color`);
        });
       
        (this.Size = function(){
            console.log(`This type of car is a ${this.size} car`);
        });
    }

    
}

let car1 = new Car ("Audi", "YT345GH", "2001", "Blue", "SUV" );
let car2 = new Car ("Mercedes", "RE378WS", "2011", "Red", "Benz");
let car3 = new Car ("Ferrari", "GH68QW", "2022", "Red", "Sportive");
let car4 = new Car ("Lamborghini", "WE456R", "2022", "Orange", "Luxury");
let car5 = new Car ("Citroen", "RE345E", "2021", "White", "C4");

console.log("car1:");

for(let i=0; i<1; i++){
    car1.Registration();
    car1.Model();
    car1.Size();
}


console.log(" ");

console.log("car2:");

for(let i=0; i<1; i++){
    car2.Registration();
    car2.Model();
    car2.Size();
}

console.log(" ");

console.log("car3:");

for(let i=0; i<1; i++){
    car3.Registration();
    car3.Model();
    car3.Size();
}

console.log(" ");

console.log("car4:");
for(let i=0; i<1; i++){
    car4.Registration();
    car4.Model();
    car4.Size();
}

console.log(" ");

console.log("car5:");

for(let i=0; i<1; i++){
    car5.Registration();
    car5.Model();
    car5.Size();
}