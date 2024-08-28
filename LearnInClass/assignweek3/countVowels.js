function countVowels(str) {
  if (typeof str === undefined) {
    return undefined;
  }
  let countVowels = 0;
  const vowels = "aeiouAEIOU";
     for (let char of str) {
        if (vowels.includes(char)) {
            countVowels++;
        }
    }
    return countVowels;
}

console.log(countVowels("hello")); //2
console.log(countVowels("world")); //1
console.log(countVowels("")); // 0
