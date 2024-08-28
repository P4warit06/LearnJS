function ClassifyNumber(num) {
   if(typeof num === 'undefined' || num == 'null') return undefined; 
   else if (num > 0)  return 'positive';
   if (num < 0)   return 'negative';
   return 'zero';
}
console.log(ClassifyNumber(5)); // returns positive
console.log(ClassifyNumber(-3)); // returns negative
console.log(ClassifyNumber(0)); // returns zero
