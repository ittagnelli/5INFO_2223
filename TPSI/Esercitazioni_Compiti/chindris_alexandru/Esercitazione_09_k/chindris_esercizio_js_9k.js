let Automobile = function (persone, velocita, rapporto, stato) {
    this.persone = persone;
    this.velocita = velocita;
    this.rapporto = rapporto;
    this.stato = stato;
    out_stato = function () {
        console.log(" ");
        console.log("STATO")
        console.log(`Persone: ${persone}`);
        console.log(`Velocita: ${velocita}`);
        console.log(`Rapporto: ${rapporto}`);
        console.log(`Stato: ${stato}`);
        console.log(" ");
    };
    this.imposta_persone = function (n) {
      if(velocita <= 0 && stato == false){
        persone = n ; 
        console.log(`persone: ${persone}`);
      }else{
        console.log("Non posso modificare le persone a bordo");
      }
      out_stato();
    };
    this.imposta_velocita = function (n) {
      if(n > 0 && n < 180 && n-30 >= 0 && n+30 <= 0 && stato == true){
        velocita = n; 
        console.log(`velocita: ${velocita}`);
      }else{
        console.log("Non posso modicare la velocità");
      }
      out_stato();
    };
    this.aumenta_rapporto = function () {
      if(rapporto > 0 && rapporto < 5 && stato == true){
        rapporto ++;
        console.log(`rapporto: ${rapporto}`);
      }else{
        console.log("Non posso modificare il rapporto");
      }
      out_stato();
    };
    this.diminuisci_rapporto = function () {
        if(rapporto > 0 && rapporto < 5 && stato == true){
            rapporto --;
            console.log(`rapporto: ${rapporto}`);
          }else{
            console.log("Non posso modificare il rapporto");
        }
        out_stato();
    };
    this.alterna_stato = function () {
        if(stato == true){
            stato = false;
            velocita = 0 ; 
            console.log("Stato OFF");
        }
        if(stato==false){
            stato = true;
            velocita=0;
            console.log("Stato ON");
        }
        out_stato();
    };
}

//MAIN
let auto = new Automobile(2, 3, 2, true); 
auto.out_stato; //output stato

auto.imposta_persone(3); //Non posso modificare le persone a bordo
auto.imposta_velocita(45); // Non posso modificare la velocita
auto.aumenta_rapporto(); // rapporto: 3
auto.diminuisci_rapporto(); // rapporto: 2
auto.alterna_stato(false); //Stato OFF
auto.imposta_velocita(35); // Non posso modificare la velocita auto spenta
auto.imposta_persone(3); // persone 3
auto.alterna_stato(true); //Stato ON
auto.imposta_velocita(45); // Non posso modicare la velocità  salto maggiore di 30km/h



