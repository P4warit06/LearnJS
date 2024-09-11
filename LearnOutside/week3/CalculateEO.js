const calculatorEO  =  (Number) => { 
    if (typeof Number !== 'number')  return undefined;
    return Number %2 === 0 ? 'จำนวนคู่' : 'จำนวนคี่'  
}
console.log(calculatorEO(3));
console.log(calculatorEO(2));
console.log(calculatorEO(4));
