let str = "federicocarlogiuseppe.pomba@istitutoagnelli.it";

 
 let chiocciola = str.indexOf(`@`);
 let punto = str.indexOf(`.`);
 let str2 = (str.slice(punto, chiocciola));
 let cognome = `*`;

 str2.replace(`...`);
 
 a = (str.split(`.`));


 b = str.slice(chiocciola);
 console.log(a[0].concat(cognome.repeat(str2.length)).concat(b));

 