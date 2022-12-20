function create (N,C) {
    return Array(N).fill(C);
}

console.log(create(40000000,`*`));