const name = 'Ice'
const Greet = 'Greeting'
const greeting = (n) => {
  console.log(`${Greet} ,${name}`)
  console.log("Hello " + n + " From double quote")
  console.log('Hello '+ n + ' From single quote')
}
greeting(name)
