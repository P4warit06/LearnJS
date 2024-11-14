// const company = {
//   name: 'TechCorp',
//   address: {
//     street: '123 Innovation Way',
//     city: 'San Francisco',
//     state: 'CA',
//     postalCode: '94107',
//   },
//   employees: {
//     manager: {
//       name: 'Alice',
//       age: 35,
//       position: 'Project Manager',
//     },
//     developer: {
//       name: 'Bob',
//       age: 28,
//       position: 'Software Developer',
//     },
//     designer: {
//       name: 'Charlie',
//       age: 30,
//       position: 'UI/UX Designer',
//     },
//   },
// }

// const {
//   address: { street, city, state, postalCode },
//   employees: {
//     manager: { name: nameAlice },
//     developer: { name: namedev, age },
//   },
// } = company
// console.log(street)
// console.log(namedev)

// const str = [1, 2, 3, 4, 5, 6]
// const [first, second, ...rest] = str
// str.forEach((x) => {
//   console.log(x)
// })
// console.log(first, 'str = ' + second + rest)
// console.log('just remaining array ' + rest)

// function combineArray(first, second) {
//   const arrNew = [...first, ...second]
//   return arrNew
// }
// console.log(combineArray([1, 2, 3], [2, 3, 4]))

const arr1 = ['apple', 'orange', 'banana', 'durian']
// console.log(arr1.splice(0, 2))
// console.log(arr1)
console.log(arr1.splice(1, 1, 56))
console.log(arr1)