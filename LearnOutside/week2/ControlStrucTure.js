function AgeCalculator(people) {
  if (
    /*check this people are the array || people length = 0  */ !Array.isArray(
      people
    ) ||
    people.length === 0
  )
    return undefined
  return people
    .filter(
      (/*This Object */ { age }) /*arrow Function to*/ => age >= 15 || age <= 30
    )
    .map(({ name, age } /* drag this object to create new array */) => [
      name,
      age,
    ])
}
// object name people
const people = [
  { name: 'John', age: '18' },
  { name: 'Pawarit', age: '10' },
  { name: 'Ferb', age: '56' },
]

console.log(AgeCalculator(people))

// Example

function BalanceCalculator(Money) {
  if (typeof Money === undefined) return undefined
  if (Array.isArray(Money)) {
    let withdraw = Money[1],
      Balance = Money[0]
    if (withdraw <= Balance) {
      return (Balance -= withdraw)
    }
    throw Error('Not enough money to withdraw')
  }
}
console.log(BalanceCalculator([55500, 5400]))
