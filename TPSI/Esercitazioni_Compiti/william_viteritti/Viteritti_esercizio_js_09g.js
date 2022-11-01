let day1 = {
        h:24,
        m:35,
        s:05
    }
    
    let day2 = {
        h:12,
        m:23,
        s:10
    }
    let day3 = {
        h:10,
        m:54,
        s:20
    }
    let day4 = {
        h:02,
        m:59,
        s:59
    }
    let day5 = {
        h:10,
        m:20,
        s:02
    }
    let day6 = {
        h:09,
        m:45,
        s:00
    }
    
    function diff_g (a, b, c){
    
        let asecondi = (a.h *3600)+(a.m *60)+(a.s);
        let bsecondi = (b.h *3600)+(b.m *60)+(b.s);
        let csecondi = (c.h *3600)+(c.m *60)+(c.s);
        
        let msecondi = asecondi;
    
        if(msecondi > bsecondi){
            msecondi = bsecondi;
        }
    
        if(msecondi > csecondi){
            msecondi = csecondi;
            // console.log("Il minimo è", b);
        }
    
        if(msecondi == asecondi){
            
            console.log("Il minimo è", a);
    
        }
        else if(msecondi == bsecondi){
            
            console.log("Il minimo è", b);
    
        }
    
        else{
            
            console.log("Il minimo è", c);
    
        }
    }
    
    console.log(diff_g(day1, day2, day3));
    console.log(diff_g(day3, day4, day6));