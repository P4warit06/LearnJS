const CompareNumber = (Number) => { 
    if (Array.isArray(Number)){ 
        if(Number[0] === Number[1]) { 
             return 'มีค่าเท่ากัน'
        }
    return Number[0] > Number[1] ? 'Xมากกว่าY' : 'Yมากกว่าX'  
    }
    throw Error('Invalid Datatype or number')
}
console.log(CompareNumber([2,3]));
