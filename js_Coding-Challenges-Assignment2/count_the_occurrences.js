function wordCount(str) {
    const wordCount = new Map();

    const words = str.split(" ");

    for (const word of words) {
        if(wordCount.has(word)){
            wordCount.set(word, wordCount.get(word) + 1);
        }
        else {
            wordCount.set(word , 1);
        }
    }
    return wordCount;
}

const prompt = require("prompt-sync") ({sigint:true});

const str = prompt("enter a string : ");

const result = wordCount(str);
console.log(result);