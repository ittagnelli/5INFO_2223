let brand = ["Lamborghini", "Ferrari", "Mercedes", "Volkswagen", "Fiat"];
let model = ["Aventador", "Portofino", "GLC", "Maggiolino", "Panda"];
let power = [770, 620, 200, 105, 85];
let color = ["Nero", "Rosso", "Argento", "Azzurro", "Blu"];
let price = [350000, 200000, 90000, 30000, 14000];


let Car = function (brand, model, power, color, price) {
    (this.brand = brand),
    (this.model = model),
    (this.power = power),
    (this.color = color),
    (this.price = price),
    (this.printbrand = function(){
        console.log (`\nIl marchio dell'autovettura è ${this.brand}`);
    }),
    (this.printmodel = function(){
        console.log (`Il modello dell'autovettura è ${this.model}`);
    }),
    (this.printpower = function(){
        console.log (`I cavalli dell'autovettura sono ${this.power}\n`);
    })  

}


let Cars = [];


for (let i = 0; i < brand.length; i++){
    let new_Car = new Car(brand[i], model[i], power[i], color[i], price[i]); 
    Cars.push(new_Car);

}


for (let Car of Cars){
    Car.printbrand();
    Car.printmodel();
    Car.printpower();

}