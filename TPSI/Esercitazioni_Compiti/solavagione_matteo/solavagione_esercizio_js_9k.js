let Automobile = function(num_pers,vel,rapp,on_off){
    (this.num_pers = num_pers),
    (this.vel = vel),
    (this.rapp = rapp),
    (this.on_off = on_off),
    (this.imposta_pers = function(){
        if((num_pers<0 || num_pers>5) && vel==0){
            console.log("il numero di persone deve essere compreso tra 0 e 5");            
        }
        if((num_pers>0 && num_pers<5) && vel>0){
            console.log("il numero di persone può essere modificato solo se la velocità è uguale a 0");
        }
    }),
    (this.imposta_vel = function(){
        if(this.on_off == "on"){
        if((vel>=0 && vel<=180) && (this.vel+vel>180))
            console.log("la velocità massima è 180");
        
        if((vel>=0 && vel<=180) && (this.vel+vel<=180) && vel>=30)
            console.log("la velocità non puo superare di 30 la velocità attuale (eccesso)");
        
        if((vel>=0 && vel<=180) && (this.vel-vel<0))
            console.log("la velocità non puo essere minore di 0");
        
        if((vel>=0 && vel<=180) && (this.vel-vel<=180) && vel>=30)
            console.log("la velocità non puo superare di 30 la velocità attuale (difetto)");
        
    }else
        console.log("non puoi cambiare velocità perchè l'auto è spenta")
}),
    (this.aumenta_rapp = function(){
        if(this.on_off = "on"){
        if(rapp < 6)
            rapp++;
        else
            console.log("la marcia massima è 6");
    }else
    console.log("non puoi cambiare rapporto perchè l'auto è spenta")
}),
    (this.dimiuisci_rapp = function(){
        if(rapp > 1)
            rapp--;
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
        console.log("numero di persone è " + num_pers);
        console.log("la velocita è " + vel);
        console.log("il rapporto di velocita è " + rapp);
        console.log("lo stato è " + on_off);



    })

}

let auto1 = new Automobile(4, 100, 2, "on");
auto1.imposta_pers();
auto1.stampa_stato();

auto1.imposta_vel();
auto1.stampa_stato();

auto1.aumenta_rapp();
auto1.stampa_stato();

auto1.dimiuisci_rapp();
auto1.stampa_stato();

auto1.cambia_stato();
auto1.stampa_stato();




