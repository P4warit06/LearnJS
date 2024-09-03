let a = 5,
  b = 10
check1 = a == b
check2 = a != b
check3 = a > b
check4 = a < b
check5 = a >= b
check6 = a <= b

console.log(check5)
console.log(check6)

function checkGrade(score) {
  if (score >= 70) return 'A'
  if (score >= 50 && score < 70) return 'B'
  if (score >= 30 && score < 50) return 'C'
  if (score == 20 || score === 29) return 'D'
  return 'F'
}
console.log(checkGrade(76))
console.log(checkGrade(10))
console.log(checkGrade(40))
console.log(checkGrade(55))
console.log(checkGrade(20))
console.log(checkGrade(29))
