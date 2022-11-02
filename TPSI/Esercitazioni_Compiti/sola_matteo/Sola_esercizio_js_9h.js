function maggiore(num1, num2) {
    let res = (num1 > num2) ? num1: num2;
    if(num1 == num2) {
        console.log("I due numeri hanno lo stesso valore!");
        return null;
    }

    return res;
}

function main() {
    console.log("Il maggiore tra la prima sequenza di numeri è:");
    console.log(maggiore(2, 6));

    console.log("Il maggiore tra la seconda sequenza di numeri è:");
    console.log(maggiore(3, 3));

    console.log("Il maggiore tra la terza sequenza di numeri è:");
    console.log(maggiore(5, 3));
}

main();
