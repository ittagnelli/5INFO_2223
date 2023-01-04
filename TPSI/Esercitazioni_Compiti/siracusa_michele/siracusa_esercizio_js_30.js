function restricted_vector(vector, N, M) {

    let restricted_vector = vector.filter((item) => item >= N && item <= M);
 
    return restricted_vector

 }
 
 let vector = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
 
 console.log(restricted_vector(vector, 30, 90));


