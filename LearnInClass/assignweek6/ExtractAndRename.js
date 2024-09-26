function ExtractAndRename (obj1){ 
    const  {name ,age} =obj1;
    const FullNameAndAge = {fullName:name,yearsOld:age};
    return FullNameAndAge
    // teacher 
    // const {name : fullName, age : yearolds} =  obj1 
    //console.log(fullName);
    //console.log(yearsOld);
    // return {fullName ,yearsOld} 
    
}
console.log(ExtractAndRename({name:'John',age:25,city:'New York'}));
console.log(ExtractAndRename({name:'Jane',age:30}));
