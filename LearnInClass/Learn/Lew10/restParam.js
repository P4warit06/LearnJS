//rest parameters
function sum(opsName, ...theNumbers) {
    //Array of theNumbers
  console.log(opsName) //'sum'
  let total = 0
  for (const num of theNumbers) {
    total += num
  }
  return total
}
console.log(sum('sum', 1, 2, 3)) //6 |
console.log(sum('sum', 1, 2, 3, 4, 5)) //15 |
