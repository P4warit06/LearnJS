const array1 = [1, 2, 3, 4]
const reducer = (total, currentValue) => {
  console.log(`currentValue: ${currentValue}`)
  console.log(`total: ${total}`)
  return total + currentValue
}
console.log(`array1.reduce(reducer):${array1.reduce(reducer, 0)}`)
let numbers = [1, 5, 8, 10]
// find min max ,avg of array => {min:}


//sol.1 taro
// function findMinMaxAverage(arr) {
//   return {
//     min: arr.reduce((min, currentValue) => Math.min(min, currentValue)),
//     max: arr.reduce((max, currentValue) => Math.max(max, currentValue)),
//     avg: arr.reduce((total, currentValue) => total + currentValue) / arr.length
//   }
// }

// pat
function arrayStats(arr) {
  let min = Math.min(...arr)
  let max = Math.max(...arr)
  let sum = arr.reduce((acc, curr) => acc + curr, 0)
  let avg = sum / arr.length

  return {
    min: min,
    max: max,
    avg: avg,
  }
}

// wave
function findMinMaxAvg(nums) {
  const min = nums.reduce((acc, cur) => {
    return cur < acc ? cur : acc
  }, )

  const max = nums.reduce((acc, cur) => {
    return cur > acc ? cur : acc
  }, )
  const avg = nums.reduce((acc, cur) => acc + cur, 0) / num.length

  return { min: min, max: max, avg: avg }
}

