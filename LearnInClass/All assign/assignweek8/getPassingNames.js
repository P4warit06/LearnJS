const studentScores = [
  { name: 'Alice', score: 85 },
  { name: 'Bob', score: 92 },
  { name: 'Charlie', score: 68 },
  { name: 'David', score: 55 },
  { name: 'Eve', score: 78 },
]
// Declarative  program - what i want
const getPassingNames = (StudentNewArray) => {
  return StudentNewArray.filter(
    (studentScores) => studentScores.score >= 70
  ).map((studentScores) => studentScores.name.toUpperCase()) //แปลงค่า Array
}
// function Chaining
const passingNames = getPassingNames(studentScores)
console.log(passingNames)

/*
function getPassingNames(students) {
  const passingNames = []
  for (const student of students) {
    if (student.score >= 70) {
      passingNames.push(student.name.toUpperCase())
    }
  }
  return passingNames
}
*/