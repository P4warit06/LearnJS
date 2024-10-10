const numbers = [1, 2, 3, 4, 5] 
const addOne = (x) => x + 1 
const isEven = (x) => x % 2 === 0 
const sum = (total, x) => total + x 
const incrementedNumbers = numbers.map (addOne)  // we can call add  one Function any space 
const evenNumbers = incrementedNumbers.filter (isEven)  // we can call isEven Function any space
const total = evenNumbers.reduce (sum, 0) 
console.log('Original numbers:', numbers) // Original numbers: [1, 2, 3, 4, 5] |
console.log('Incremented numbers:', incrementedNumbers) // Incremented numbers: [2, 3, 4, 5, 6] |
console.log('Even numbers:', evenNumbers) // Even numbers: [2, 4, 6] |
console.log('Total of even numbers:', total) // Total of even numbers: 12 |
//compose function |
//const result = numbers.map (addOne) .filter (isEven) .reduce (sum, 0) |