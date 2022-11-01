let a=4;
let b=2;
let c=3;

console.log(maggiore(a, b, c));

function maggiore (a, b, c) {
    return (a>b ? a>c ? a : c : b>c ? b :c);
}
