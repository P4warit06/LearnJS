function getStringLengths(arr1) {
  if ( arr1 === undefined) return undefined
  if (!Array.isArray(arr1)) return null 
  return arr1.map(str => str.length)
}
console.log(getStringLengths(['apple', 'banana', 'kiwi', 'orange'])) // 5 , 6 , 4  , 6
console.log(getStringLengths(['hello', 'world'])) // 5 , 5
console.log(getStringLengths(['Chatgpt', 'AI'])) // 7,  2 
console.log(getStringLengths(undefined))
console.log(getStringLengths('String')) 
 