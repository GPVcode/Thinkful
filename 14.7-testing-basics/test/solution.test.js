// Write your tests here!
const partitionStudentsByScore = require("../src/solution");
const expect = require("chai").expect;

describe("partitionStudentsByScore", () => {
  it("should return an array of two arrays", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  
  const actual = [
  [{ name: "Morgan Sutton", score: 7.4 }],
  [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Natalee Vargas", score: 9.2 },
  ],
  ];
  const expected = partitionStudentsByScore(students, 8);
  expect(actual).to.eql(expected);
  }); 
  
  it("Should return all students into one of the arrays", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },    
  ];
    
  const expected = [[], [    
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },]];
  const actual = partitionStudentsByScore(students, 7);
    expect(actual).to.eql(expected);
  });
  
  
  it("Should return [[],[]] if student list is empty", () => {
  const students = [
    { name: "Leo Yeon-Joo", score: 8.9 },
    { name: "Morgan Sutton", score: 7.4 },
    { name: "Natalee Vargas", score: 9.2 },
  ];
  const expected = [[],[]];
  const actual = partitionStudentsByScore([], 1);
  expect(actual).to.eql(expected);
  });
});