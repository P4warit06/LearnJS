const x1 = Array.of(1)
console.log(x1.length) //1
console.log(x1) //element at index 0 is 1 [1]

const y1 = Array.of(true, { id: 1 }, 'hello world')
console.log(y1)

const m = [2, 4, 6]
const n = Array.from(m) //[...m]

console.log(n) //[2,4,6]
console.log(n.length) //3
