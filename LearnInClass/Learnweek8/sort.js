// const array14 = [1, 30, 4, 21, 100000]
// array14.sort() //default sorting order by text with ascending
// console.log(`array14:${array14}`)

//output [1,4,21,30, 100000] order by number
// array14.sort((a, b) => a - b)
// console.log(array14)

const students = [
  { id: 665000101, name: 'Somchai' },
  { id: 665000131, name: 'ann' },
  { id: 665000144, name: 'Pichit' },
]
//sample output
// [({ id: 665000131, name: 'ann' },{ id: 665000144, name: 'Pichit' },{ id: 665000101, name: 'Somchai' })]
//sol.1
console.log(
  'studentSorted',
  students.sort((a, b) =>
    a.name.toLowerCase().localeCompare(b.name.toLowerCase())
  )
)
//sol.2
students.sort((a, b) => {
  const nameA = a.name.toLowerCase()
  const nameB = b.name.toLowerCase()

  if (nameA > nameB) {
    return 1
  } else if (nameA < nameB) {
    return -1
  } else {
    return 0
  }
})
console.log(students)
