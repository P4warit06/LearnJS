const words = ['apple', 'book', 'car']

for (let [index, word] of word.entries()) {
  console.log(words, index)
}

for (const word of words) {
  console.log(word)
}
