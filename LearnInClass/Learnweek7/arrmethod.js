const colors = ['red', 'green', 'blue']
const arr1 = []
colors.forEach((element) => {
  arr1.push(element.charAt(0).toUpperCase())
}) // for each no return value
console.log(arr1)

const nums = [2, 3, 4, 5, 6, 7, 8, 8, 9, 10, 10, 11]
function FindEvenAndPowNumbers(num) {
  return num.map((num) => num ** 2).filter((num) => num % 2 === 0) //New arra
}
console.log(FindEvenAndPowNumbers(num))
