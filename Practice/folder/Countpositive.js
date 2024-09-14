const CountPositive = (arr1) => {
  return arr1.filter((a) => (a > 0)).length
}
console.log(CountPositive([0, -1, 2, -3, -4, -5, 6, 7, 8, 9, 10, 11]))
