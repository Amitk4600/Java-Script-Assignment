function convertToNumber(str) {
    try{

        const num = Number(str);
        if(isNaN(num)) {
            throw new Error("invalid number");
        }
        return num;
    } catch(error){
        return "invalid number"

    }
}

console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));

