/*function sumArray(arr1){
    if(arr1.length == 0 || !Array.isArray(arr1))
            return undefined 
    let sum = 0 
    for (i = 0; i < arr1.length; i ++ )  {
        sum +=arr1[i]
    }
    return sum 
} */
function sumArray(arr1) {
  if (arr1.length == 0 || !Array.isArray(arr1)) return undefined
  return arr1.reduce((sum, num) => sum + num, 0)
}

console.log(sumArray([1, 2, 3, 4, 5]))
console.log(sumArray([60]))
