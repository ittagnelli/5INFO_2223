let Automobile = function(marca, modello, colore, data_acquisto, allestimeno){
    (this.marca = marca),
        (this.modello = modello),
        (this.colore = colore),
        (this.data_acquisto = data_acquisto),
        (this.allestimento = allestimento),
        (this.stampa_auto = function(){
            console.log(Automobile);
        }),
          (this.stampa_data = function(){
                console.log(Automobile.data_acquisto);
          }),
           (this.stampa_marca = function() {
                console.log(Automobile.marca);
           })
 }

  let auto1 = new Automobile("Audi", "RS-7", "bianco", "23/03/2012", "base");
  auto1.stampa_auto();
  auto1.stampa_data();
  auto1.stampa_marca();
  let auto2 = new Automobile("Fiat", "Panda", "nero", "24/02/2013", "base");
  auto2.stampa_auto();
  auto2.stampa_data();
  auto2.stampa_marca();
  let auto3 = new Automobile("Bmw", "X5", "blu", "12/06/2004", "base");
  auto3.stampa_auto();
  auto3.stampa_data();
  auto3.stampa_marca();
  let auto4 = new Automobile("Mercedes", "classe-a", "grigio", "11/05/2009", "base");
  auto4.stampa_auto();
  auto4.stampa_data();
  auto4.stampa_marca();
  let auto5 = new Automobile("Alfa-Romeo", "Stelvio", "cromato", "6/01/2020", "base");
  auto5.stampa_auto();
  auto5.stampa_data();
  auto5.stampa_marca();
