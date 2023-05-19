function findMinMax (array) {
    const max = Math.max(...array);
    const min = Math.min(...array);

    return {max , min};

}

const arr =  [5, 2, 7, 1, 9];
const result = findMinMax(arr);

console.log(result);