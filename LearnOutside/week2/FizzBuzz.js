function FizzBuzz(Num1) {
  if (Num1 % 15 == 0) return 'FizzBuzz'
  else if (Num1 % 3 == 0) return 'Fizz'
  else if (Num1 % 5 == 0) return 'Buzz'
}
console.log(FizzBuzz(3))
console.log(FizzBuzz(5))
console.log(FizzBuzz(15))
