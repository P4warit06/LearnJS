function ClassifyNumber(num) {
   if (typeof num === 'undefined' ) return undefined; 
   if (typeof num === null  )  return null  ;
   if (num > 0)  return 'positive';
   if (num < 0)   return 'negative';
   return 'zero';
}
// function ClassifyNumber (num){
//    if (typeof num !='number' ) throw new Error ('invalid parameter number'); 
//    if (num >0)  return 'positive';
//    if (num == 0) return 'zero';
//    return 'positive' ;
// }

console.log(ClassifyNumber(5)); // returns positive
console.log(ClassifyNumber(-3)); // returns negative
console.log(ClassifyNumber(0)); // returns zero
