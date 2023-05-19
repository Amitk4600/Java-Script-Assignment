
function element (array) {
    const [first, second, ...rest] = array;
    const last = rest.pop();
    return [first, second, last];

}

const arr =  [1, 2, 3, 4, 5];
const result = element(arr);
console.log(result);