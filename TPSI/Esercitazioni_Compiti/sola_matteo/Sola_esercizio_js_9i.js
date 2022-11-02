function maggiore(num1, num2, num3) {
    let res = (num1 > num2) ? num1: (num2 > num3) ? num2: num3;
    if(num1 == num2 && num2 == num3) {
        console.log("I tre numeri hanno lo stesso valore!");
        return null;
    }

    return res;
}

function main() {
    console.log("Il maggiore tra la prima sequenza di numeri è:");
    console.log(maggiore(2, 6, 5));

    console.log("Il maggiore tra la seconda sequenza di numeri è:");
    console.log(maggiore(3, 3, 3));

    console.log("Il maggiore tra la terza sequenza di numeri è:");
    console.log(maggiore(5, 5, 8));
}

main();
