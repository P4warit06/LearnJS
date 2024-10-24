//primitive type array
const values = [5, 10, 15, 20]
const x = [100, 200, 300]
const nums = [...x, 1, 3, ...values]
//[100,200,300,500,1,3,5,10,15,20]
console.log(nums)
console.log(nums[2]);

//change value of nums
nums[0] = 555
console.log(nums)
console.log(x)
//object type array
const students = [
  { id: 66130500015, name: 'Student' },
  { id: 661305000475, name: 'StudentX' },
]
const alumniStudents = [...students] //[refAddress, refAddress]
alumniStudents[0].id = 9999999
console.log(students)
console.log(alumniStudents)

//spread on array
const str = 'hello world'
console.log([...str])
