const students = [
  {
    id: 1,
    absent: true,
  },
  {
    id: 2,
    absent: false,
  },
  {
    id: 3,
    absent: true,
  },
  {
    id: 4,
    absent: false,
  },
  {
    id: 5,
    absent: false,
  },
]

function findAbsentId(student){
 return   student.filter((obj) => obj.absent).map((obj) => obj.id) 
}
console.log(findAbsentId(students)); /*array of absent id*/

function isAllAbsent(students) {
  return students.every((student) => student.absent)
}
console.log(isAllAbsent(students)) // boolean
