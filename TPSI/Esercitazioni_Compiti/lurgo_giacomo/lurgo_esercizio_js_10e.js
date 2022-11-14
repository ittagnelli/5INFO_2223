let stringa = "questa è una stringa con tutti i primi caratteri maiuscoli";

function capitalaze_all (str) {
    let a = str.split(` `);
    let n = a.length
    for (let i=0; i<n; i++) {
        let maiuscola = (a[i].charAt(0).toUpperCase());
        console.log(maiuscola)
        
    }
    for (let v=0; v<n; v++){
        str.replace(a[v].charAt(0), a[v].charAt(0).toUpperCase())
    }
    console.log(str);
    
}

capitalaze_all(stringa);