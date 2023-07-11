function doubleElement(arr, callback) {
    let doubleArr = [];
    for (let num of arr){
        let dnum = callback(num);
        doubleArr.push(dnum)
    }
    return doubleArr;
}

function double(num){
    return num * 2;

}
console.log(doubleElement([1, 2, 3, 4, 5],double));