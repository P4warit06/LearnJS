const checkWord  =(str1,str2) => {
    if (!str1 || !str2) return undefined; 
    const word = str2
    return str1.includes(word) ?  true : false
}
console.log(checkWord("I love JavaScript", "JavaScript"));
console.log(checkWord("I love JavaScript", "Python"));
console.log(checkWord("I love JavaScript", "script"));

