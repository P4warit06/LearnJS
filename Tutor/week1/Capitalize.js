const CapitalizeFirstLetter = (str) => {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase()+word.slice(1))
    .join(' ')
    // ถ้า split ('')ติดกันมันจะไปหมดเลย
}
console.log(CapitalizeFirstLetter('hi my name is eci'))
