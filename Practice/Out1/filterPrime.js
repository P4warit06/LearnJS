const FilterPrimes = (arr1) => {
  if (Array.isArray(arr1) === undefined) return undefined
  return arr1.filter((num) => {
    if (num < 2) return false
    for (let i = 2; i < num - 1; i++) {
      return num % 2 === 0 ? false : true
    }
  })
}
console.log(
  FilterPrimes([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ])
)
