const num = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
const primeNum = num.filter(function (num) {
  for (let i = 2; num > i; i++) {
    if (num % i === 0) {
      return false
    }
  }
  return num > 1
})
console.log(primeNum);
