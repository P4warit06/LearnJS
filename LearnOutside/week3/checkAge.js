function CheckYourAge (theAge) { 
    if (typeof theAge !== 'number')   return undefined;
    return theAge === 15 ? 'M3':
           theAge === 14 ? 'M2':
           theAge === 13 ? 'M1':
           theAge ===  10 ?  false  : undefined;

}
console.log(CheckYourAge(15));
console.log(CheckYourAge(14));
console.log(CheckYourAge(13));
console.log(CheckYourAge(10));
console.log(CheckYourAge(20));
