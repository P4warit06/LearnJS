const RemoveFalsyValue = (ArrName) =>  {
        if (Array.isArray(ArrName) === undefined)  return  undefined; 
        return ArrName.filter(Boolean);
}   
console.log(RemoveFalsyValue([1,0,null,undefined,NaN,false,'',2,3]));