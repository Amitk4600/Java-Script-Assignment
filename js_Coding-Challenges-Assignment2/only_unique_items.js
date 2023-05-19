function removeDuplicate(arr){
    const uniqueSet = new Set(arr);
    return Array.from(uniqueSet)
}

const arr = [1, 23, 5, 4, 5, 6, 7, 8, 3, 2, 4, 8, 6];
const uniqueArr = removeDuplicate(arr);
console.log(uniqueArr);