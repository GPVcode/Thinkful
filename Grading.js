
let projectScore = 76; //this is the project score
let grade; // leave this undefined. Our conditional statements will fill in a value into variable grade.

if (projectScore >= 90) {
  grade = "A";
} else if (projectScore >= 80) {
  grade = "B";
} else if (projectScore >= 70) {
  grade = "C";
} else if (projectScore >= 60) {
  grade = "D";
} else {
  grade = "F";
}

console.log("Your Project Grade: " + grade);
