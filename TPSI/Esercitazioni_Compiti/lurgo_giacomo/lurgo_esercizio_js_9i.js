let num1 = 1;
let num2 = 0.3;
let num3 = 20;

function question (num1, num2) {
    num1 > num2 && num1 > num3 ? console.log(`Il maggiore è il primo`): console.log(`Il maggiore non è il primo sicuramente, ma è il...`);
    num3 > num1 && num3 > num2? console.log(`terzo`): console.log(`secondo`);
}
question(num1, num2, num3);