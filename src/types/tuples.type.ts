//firstname, lastname, age

// A tuple is an array with fixed length
let personTwo: [string, string, number?];

personTwo = ["john", "doe", 12 ]


// [
//     NumberOfStudents: number,
//     passing: boolean,
//     "john", "Stella"

// ]


type listOfStudents = [number, boolean, ...string[]]

const passingStudents: listOfStudents = [3, true, "John", "Stella", "Mark"]

const failingStudents: listOfStudents = [1, false, "scott"]

