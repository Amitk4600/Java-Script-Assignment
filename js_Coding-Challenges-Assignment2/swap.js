const prompt = require ("prompt-sync") ({sigint: true});

function swap(x,y) {
  [x,y] = [y,x];
  return [x,y];

}

let x = Number.parseInt(prompt("enter value of x : "));
let y = Number.parseInt(prompt("enter value of y : "));

console.log("before : ", `${x} and ${y}`);

[x,y] = swap(x,y)
console.log("After : ", `${x} and ${y}`);