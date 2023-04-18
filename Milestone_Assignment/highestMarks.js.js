const marks = [52,65,42,95,12];
let highestMarks = marks[0];

for(let i = 0; i <= marks.length; i++){
    highestMarks = (marks[i] > highestMarks)? marks[i] : highestMarks;
}

console.log(`the highest marks is =   ${highestMarks}`);
