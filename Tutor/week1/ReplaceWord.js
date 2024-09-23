/*function ReplaceWord(str1, str2, str3,str4) {
  return str1.replaceAll("JavaScript", "Python");   
  

}
console.log(ReplaceWord('I love JavaScript and Python', 'JavaScript', 'Python','HTML'))
*/

function replaceWord(sentence, oldWord, newWord) {
    return sentence.replace(oldWord, newWord);
}

const sentence = 'I love JavaScript and Python';
const newSentence = replaceWord(sentence, 'Python', 'HTML');
console.log(newSentence); // Output: I love JavaScript and HTML
