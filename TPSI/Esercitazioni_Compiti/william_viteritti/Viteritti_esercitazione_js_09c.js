class Animal{
    constructor(name, species, weight){
        (this.name = name),
        (this.species = species),
        (this.weight = weight),
        
        (this.Name = function(){
            console.log(`The name of the animal is ${this.name} and the species is ${this.species}`);
        });

        (this.Animal_s_weight = function(){
            console.log(`The weight of ${this.name} is ${this.weight}`);
        });

        (this.enumera = function(){
            for(let key in Animal)
            console.log(`The keys ${this.key} have value: ${Animal[key]}`);
        });
    }
}

let animal1 = new Animal("Ginny","Zebra","100kg");
console.log("Animal:");
animal1.Name();
animal1.Animal_s_weight();
console.log(" ");

animal1.highness = 190;
console.log(" ");
animal1.enumera();
console.log(" ");

class Car{
    constructor(id_car, year, color){
        (this.id_car = id_car),
        (this.year = year),
        (this.color = color),

        (this.Registration = function(){
            console.log(`Car has been registreted as ${this.id_car} in ${this.year} year`);
        });

        (this.Car_s_color = function(){
            console.log(`Car's color is ${this.color}`);
        });

        (this.enumera = function(){
            for(let key in Car)
            console.log(`The keys ${this.key} have value: ${Car[key]}`);
        });
    }
}

let car1 = new Car("TY70RF","2020","Red");
console.log("Car:");
car1.Registration();
car1.Car_s_color();
console.log(" ");

car1.Kylometers = 400;
console.log(" ");
car1.enumera();
console.log(" ");


class Polygon{
    constructor( sides, angles, lenght_sides){
        (this.sides = sides),
        (this.angles = angles),
        (this.lenght_sides = lenght_sides),

        (this.Polygon_s_sides = function(){
            console.log(`The sides of the polygon are ${this.sides}, minwhile the angles are ${this.angles}`);
        });

        (this.Polygon_s_lenght = function(){
            console.log(`The length of the sides of the shape are ${this.lenght_sides}`);
        });

        (this.enumera = function(){
            for(let key in Polygon)
            console.log(`The keys ${this.key} have value: ${Polygon[key]}`);
        });
    }
}

let polygon1 = new Polygon("5","5","10");
console.log("Polygon:");
polygon1.Polygon_s_sides();
polygon1.Polygon_s_lenght();
console.log(" ");

polygon1.deepth = 120;
console.log(" ");
polygon1.enumera();