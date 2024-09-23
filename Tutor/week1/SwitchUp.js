function switchItUP(number) {
  if (!number) return undefined
  let numberOutput
  switch (number) {
    case 1:
      numberOutput = 'One'
      break
    case 2:
      numberOutput = 'Two'
      break
    case 3:
      numberOutput = 'Three'
      break
    case 4:
      numberOutput = 'Four'
      break
    case 5:
      numberOutput = 'Five'
      break
    case 6:
      numberOutput = 'Six'
      break
    case 7:
      numberOutput = 'Seven'
      break
    case 8:
      numberOutput = 'Eight'
      break
    case 9:
      numberOutput = 'Nine'
      break
    case 10:
      numberOutput = 'Ten'
      break
    default:
      numberOutput = 'Error: Unknown'
      break
  }
  return numberOutput
}

console.log(switchItUP(undefined))
console.log(switchItUP(2))
console.log(switchItUP(28))
