function getStringLengths(arr1) {
  if (typeof arr1 === undefined) return undefined
    return arr1.map(str => str.length)
}
console.log(getStringLengths(['apple', 'banana', 'kiwi', 'orange'])) // 5 , 6 , 4  , 6
console.log(getStringLengths(['hello', 'world'])) // 5 , 5
console.log(getStringLengths(['Chatgpt', 'AI'])) // 7,  2 
 