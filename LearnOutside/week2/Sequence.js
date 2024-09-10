console.log('--------------------------------')
console.log(
  'this function is calculating from Sequence The First Sequence is *'
)
function calculate(sum1) {
  if (typeof sum1 === undefined) return undefined
  if (Array.isArray(sum1)) {
    return sum1[0] + sum1[1] * sum1[2]
  }
  return undefined
}
console.log('The Output is ' + calculate([5, 8, 9]))

console.log('--------------------------------')
console.log('this function ใช้ - ก่อนเพราะประมวลผลจากซ้ายมือไปขวามือ')

function calculateFromSequence(sum1) {
  if (typeof sum1 === undefined) return undefined
  if (Array.isArray(sum1)) {
    return sum1[0] - sum1[1] + sum1[2]
  }
}

console.log("The Output FROM  cal sequence is "+calculateFromSequence([10, 4, 2]))




function calculateFromSequenceHaveParentheses(sum2) {
  if (typeof sum2 === undefined) return undefined
  if (Array.isArray(sum2)) {
    return sum2[0] - (sum2[1] + sum2[2])
  }
}

console.log('The Output from cal Parentheses is ' + calculateFromSequenceHaveParentheses([10, 2, 1]))


function CalculateALL(calall) { 
    if (typeof calall  === undefined) return undefined ; 
    if (Array.isArray(calall))  {
         return calall[0] *calall[1] -calall[2] / calall[3] 
    }
}
console.log("The output from calall " + CalculateALL([5,2,40,5]));

