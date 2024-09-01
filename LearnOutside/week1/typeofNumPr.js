function TypeOfNumber(num) {
  if (typeof num === 'number') {
    return num
  }
  if (typeof num === 'string') return num.toString()
  if (Array.isArray(num)) return Array.length
  return undefined
}
console.log(TypeOfNumber(20))
console.log(TypeOfNumber('String'))
console.log(TypeOfNumber([20, 40, 50, 60]))
console.log(TypeOfNumber(['true']))
