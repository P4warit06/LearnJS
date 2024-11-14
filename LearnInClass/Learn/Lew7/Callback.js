// const num = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// const primeNum = num.filter(function (num) {
//   for (let i = 2; num > i; i++) {
//     if (num % i === 0) {
//       return false
//     }
//   }
//   return num > 1
// })
// console.log(primeNum);

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

arr.map((x) => x * 2)
console.log(arr.map((x) => x * 2))

arr.find((x) => x / 2)
console.log(arr.find((x) => x / 2)) //return  a first that true with เงื่อนไข
console.log('Index [' + arr.findIndex((x) => x === 2) + ']') //return  a first that true with เงื่อนไข

const arr1 = [1, 2, 3, 4, 5]
const InitialValue = 0
const SumInitalValue = arr1.reduce((acc, ele) => acc + ele, InitialValue)
// console.log(SumInitalValue) ;

// arr1.push(InitialValue) ; //เพิ่มตัวท้าย
// console.log(arr1);
// arr1.pop(SumInitalValue) ;  // เอาตัวท้ายออกมา

// arr1.shift(arr1)
// console.log(arr1);
arr1.unshift(1) //shift(a) ; //
console.log(arr1.length)
console.log(arr1)

function ReverseString(str) {
  return str.split("").reverse().join("")
}
console.log(ReverseString('Hello world'))
