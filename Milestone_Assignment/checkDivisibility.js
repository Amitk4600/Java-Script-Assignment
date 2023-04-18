let arr = [2,9,4,15,8,21,32,12,27,14,20,33];

for(let i = 0; i <= arr.length ;i++){
    if(arr[i] % 3 !== 0 || arr[i] % 2 == 0){
        continue;

    }
    console.log(arr[i] ); 
}

