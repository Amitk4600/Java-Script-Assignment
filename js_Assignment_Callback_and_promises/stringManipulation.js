function maipulateString(str) {
    const convertUppercase = () => str.toUpperCase();
    const logString = () => console.log("The manipulated string is : " + convertUppercase());

    return logString;

}
let callback = maipulateString("hello world");
callback();