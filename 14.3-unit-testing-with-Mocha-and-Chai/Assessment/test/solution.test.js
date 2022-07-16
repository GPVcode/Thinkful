const findStudentScoreByName = require("../src/solution")// Write your tests here!
const expect = require ("chai").expect;

describe("findStudentScoreByName", () => {
  it("Should return score associated with student.", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = 8.9;
    const actual = findStudentScoreByName(students, "Leo Yeon-Joo");
    expect(actual).to.equal(expected);
  });
});


describe("findStudentScoreByName", () => {
  it("Should return null if student cannot be found", () => {
    const students = [
      { name: "Leo Yeon-Joo", score: 8.9 },
      { name: "Morgan Sutton", score: 7.4 },
      { name: "Natalee Vargas", score: 9.2 },
    ];
    const expected = null;
    const actual = findStudentScoreByName(students, "flkasjl")
    expect(expected).to.equal(actual);
  });
});