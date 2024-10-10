// function greet(name, greeting) {
//   return `${greeting ?? 'Hello'}, ${name}!` //pass 
//   return (greeting ||  'Hello'  ) + ','+ name + '!'   //this cause want to check another values 
// }
// console.log(greet('Somchai',undefined)); // pass
// console.log(greet('Somchai')); // pass
// console.log(greet('Somchai',null)); //pass
// console.log(greet('Somchai',1)); //1 
// console.log(greet('Somchai','')); //pass



// set default parameter apply when no parameter or undefined value 
function greet(name, greeting = 'Hello') {
  return `${greeting}, ${name}!`
}
console.log(greet('Alice'))
console.log(greet('Alice', undefined))
console.log(greet('Alice'))
console.log(greet('Bob', 'Hi'))
console.log(greet('Charlie', 'Good morning')) 
