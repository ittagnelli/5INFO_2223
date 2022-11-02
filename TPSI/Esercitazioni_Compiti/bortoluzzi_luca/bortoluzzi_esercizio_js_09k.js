let Automobile = function(persone,velocita,marcia,on_off){
    (this.persone = persone),
    (this.velocita = velocita),
    (this.marcia = marcia),
    (this.on_off = on_off),
    (this.imposta_pers = function(){
        if((persone<0 || persone>5) && velocita==0){
            console.log("il numero di persone è compreso tra 0 e 5");            
        }
        if((persone>0 && persone<5) && velocita>0){
            console.log("il numero di persone non può essere modificato");
        }
    }),
    (this.imposta_velocita = function(){
        if(this.on_off == "on"){
        if((velocita>=0 && velocita<=180) && (this.velocita+velocita>180))
            console.log("la velocita massima è 180");
        
        if((velocita>=0 && velocita<=180) && (this.velocita+velocita<=180) && velocita>=30)
            console.log("la velocita non puo superare di 30 la velocita attuale (eccesso)");
        
        if((velocita>=0 && velocita<=180) && (this.velocita-velocita<0))
            console.log("la velocita non puo essere minore di 0");
        
        if((velocita>=0 && velocita<=180) && (this.velocita-velocita<=180) && velocita>=30)
            console.log("la velocita non puo superare di 30 la velocita attuale (difetto)");
        
    }else
        console.log("l'auto è spenta!!")
}),
    (this.aumenta_marcia = function(){
        if(this.on_off = "on"){
        if(marcia < 6)
            marcia++;
        else
            console.log("la marcia massima è 6");
    }else
    console.log("non puoi cambiare marciaorto perchè l'auto è spenta")
}),
    (this.dimiuisci_marcia = function(){
        if(marcia > 1)
            marcia--;
        else
            console.log("la marcia minima è 1");
    }),
    (this.cambia_stato = function(){
        if(on_off == "on" && this.on_off == "on")
            console.log("l'auto è gia accessa");
        if(on_off == "on" && this.on_off == "off")
            on_off = "on";
        if(on_off == "off" && this.on_off == "off")
            console.log("l'auto è gia spenta");
        if(on_off == "off" && this.on_off == "on")
            on_off = "off";
        
    }),
    (this.stampa_stato = function(){
        console.log("numero di persone è " + persone);
        console.log("la velocita è " + velocita);
        console.log("il marciaorto di velocita è " + marcia);
        console.log("lo stato è " + on_off);



    })

}

let auto = new Automobile(3, 30, 5, "on");
auto.imposta_pers();
auto.stampa_stato();

auto.imposta_velocita();
auto.stampa_stato();

auto.aumenta_marcia();
auto.stampa_stato();

auto.dimiuisci_marcia();
auto.stampa_stato();

auto.cambia_stato();
auto.stampa_stato();