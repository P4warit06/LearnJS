/*write function name BalanceCalculator that receive a parameter of Array 
- if money is undefined return undefined  
- if Array are the array then do the transaction 
    -  can transaction when withdraw is less than or equal Balance 
     -   if can't  Error('Not enough money to    withdraw')
*/
const BalanceCalculator = (Money) => {
  if (
    !Array.isArray(Money) ||
    Money.length === 0 ||
    Array.isArray(Money) === undefined
  )
    return undefined
  else if (Array.isArray(Money)) {
    let Balance = Money[0],
      withdraw = Money[1]
    if (withdraw <= Balance) {
      return (Balance -= withdraw)
    }
    throw Error('Not enough money to  withdraw')
  }
  return Balance
}
console.log(BalanceCalculator([55500, 5400]))
