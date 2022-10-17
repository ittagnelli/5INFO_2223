let Animal = function (type, species, weight) {
    (this.type = type),
    (this.species = species),
    (this.weight = weight),
    (this.printType = function(){
        console.log (`\nIl tipo di animale è ${this.type}`)
    }),
    (this.printSpecies = function(){
        console.log (`La specie dell'animale è ${this.species}`)
    }),
    (this.printWeight = function(){
        console.log (`Il peso dell'animale è ${this.weight}`)
    }),
    (this.enumera = enumera)

}


let Car = function (brand, model, price) {
    (this.brand = brand),
    (this.model = model),
    (this.price = price),
    (this.printBrand = function(){
        console.log (`\nIl marchio della macchina è ${this.brand}`)
    }),
    (this.printModel = function(){
        console.log (`Il modello della macchina è ${this.model}`)
    }),
    (this.printPrice = function(){
        console.log (`Il prezzo della macchina è ${this.price}`)
    }),
    (this.enumera = enumera)

}


let Polygon = function (form, area, num_corners) {
    (this.form = form),
    (this.area = area),
    (this.num_corners = num_corners),
    (this.printForm = function(){
        console.log (`\nLa forma del poligono è ${this.form}`)
    }),
    (this.printArea = function(){
        console.log (`L'area del poligono è ${this.area}`)
    }),
    (this.printNumeroLati = function(){
        console.log (`Il numero di spigoli del poligono è ${this.num_corners}`)
    }),
    (this.enumera = enumera)

}


let enumera = function(){
    for (let key of Object.keys(this))(
        console.log (`La chiave è ${key}`)
    )
    
}

let animals = [];
let cars = [];
let polygons = [];


let type = ["tigre", "giraffa", "balena"]
let species = ["mammifero", "mammifero", "cetaceo"]
let weight = [300, 2000, 4000]


let brand = ["Ferrari", "Mercedes", "Porsche"]
let model = ["Portofino", "GLC", "Cayenne"]
let price = [200000, 90000, 90000]


let form = ["triangolo", "pentagono", "quadrilatero"]
let area = [20, 40, 100]
let num_corners = [3, 5, 4]


for (let i = 0; i < type.length; i++){
        let new_animal = new Animal(type[i], species[i], weight[i]); 
        animals.push(new_animal);

    }

for (let animal of animals){
    animal.printType();
    animal.printSpecies();
    animal.printWeight();
    animal.enumera();

}


for (let i = 0; i < brand.length; i++){
    let new_car = new Car(brand[i], model[i], price[i]); 
    cars.push(new_car);

}


for (let car of cars){
    car.printBrand();
    car.printModel();
    car.printPrice();
    car.enumera();

}


for (let i = 0; i < form.length; i++){
    let new_polygon = new Polygon(form[i], area[i], num_corners[i]); 
    polygons.push(new_polygon);

}


for (let polygon of polygons){
    polygon.printForm();
    polygon.printArea();
    polygon.printNumeroLati();
    polygon.enumera();

}









