    function differenza (n1 , n2) {
        let data_inizale = new Date(2020 , 10, 25, n1.HH , n1.MM , n1.SS);
        let data_secondaria = new Date(2022 , 10, 25, n2.HH , n2.MM , n2.SS);

        let diff = data_secondaria - data_inizale;

        let risultato = {
            h: diff /(60*60*1000),
            m: diff /(60*1000),
            s: diff /1000,
            ms: diff  
        }

        return risultato;
    }

    //MAIN

    let date_1 = {
        HH : 5,
        MM : 34,
        SS : 50,
    }

    let date_2 = {
        HH : 23,
        MM : 13,
        SS : 45,
    }
    
    let risultato = differenza(date_1, date_2);

    console.log(`Ore: ${risultato.h}`);
    console.log(`Minuti: ${risultato.m}`);
    console.log(`Secondi: ${risultato.s}`);