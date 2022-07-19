/*
  Write a function that separates students into two buckets based on a given score. The end result for the "happy path" should be an array with two arrays inside of it.
*/

// attempt 3:
function partitionStudentsByScore(students, score) {
  if(students.length === 0) return [[],[]];
  let equalOrLowerScore = students.filter((student) => student.score <= score);
  let higherScore = students.filter((student) => student.score > score);
  return [equalOrLowerScore, higherScore];
}

module.exports = partitionStudentsByScore;

// attempt 1:
// partitionStudentsByScore(students, score) {
// if(!students.length) return null;
// const [equalOrLower, higher] =
//       students.reduce((result, element) => {
//         result[element <= score ? 0 : 1].push(element);
//         return result;
//       }, [[], []]);
// };

//attempt 2:
// function partitionStudentsByScore(students, score1) {
//   let equalOrLess = [];
//   let higherScore = [];
//   for(let i = 0; i < students.length; i++){
//     if(students[i].score <= score1){
//       equalOrLess.push(student[i]);
//     }
//     if(students[i].score > score1){
//       higherScore.push(student[i]);
//     }
//   }
//   const myArray = [equalOrLess, higherScore];
//   return myArray;

// }
