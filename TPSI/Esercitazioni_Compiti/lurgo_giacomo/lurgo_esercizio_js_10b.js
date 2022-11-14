let str = "giacomo.lurgo@istitutoagnelli.it";

 let punto = str.indexOf(`.`);
 let chiocciola = str.indexOf(`@`);
 let str2 = (str.slice(punto, chiocciola));
 let cognome = `*`;

 str2.replace(`...`);
 a = (str.split(`.`));

 b = str.slice(chiocciola);
 console.log(a[0].concat(cognome.repeat(str2.length)).concat(b));