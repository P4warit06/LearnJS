function CheckCondition(value) {
  return value ? 'Truthy' : 'Falsy'
}
console.log(CheckCondition(0))
console.log(CheckCondition('Hello'))
console.log(CheckCondition(null))
console.log(CheckCondition([]))
