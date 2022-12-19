function Filter_m_n(array, N, M){
    return array.filter(item => item >= N && item <= M)
}

console.log(Filter_m_n([1,2,3,4,5,6,7,8,9,10],1,6))