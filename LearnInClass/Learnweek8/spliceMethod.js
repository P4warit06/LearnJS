const words = ['cat', 'ant', 'dog', 'bird', 'pig', 'bear']
// words.fill(null)//[null,null,...null]
// words.fill(0, 2, 3) //['cat', 'ant', 0, 'bird', 'pig', 'bear']

console.log(words.reverse()) //[ 'bear', 'pig', 'bird', 'dog', 'ant', 'cat' ]
//1. array includes()
console.log(words.includes('ig')) //false
//2. string includes() is similary contains, but not equal ===
const word = 'today'
console.log(word.includes('day')) //true
console.log(word.includes('Day')) //false because case sensitive
console.log(word.includes('today')) //true

// words.fill(null)
// words.fill(0,2,3)
// console.log(words);
// words.splice(1,2)
// words.splice(0, 1, 'big boy','dinosaur') // delete 1 item and add two items at index pos0
///words.splice(3, -1,'hippo','panda')
//words.splice(0, -1 , 'ab','bob')
//console.log(words)
// console.log(words.slice(3));
// console.log(words.slice(2,3));
// console.log(words.slice(1));
// console.log(words.slice(-3));
