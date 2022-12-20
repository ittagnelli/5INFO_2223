let dizionario = [1,2,3,4,5,6,7,8,9,0,'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

function pass() {
    Array(7).fill('a').map(el => dizionario[random(35)])//.map((el) => {Math.floor(Math.random() *N)})
}

console.log(pass);