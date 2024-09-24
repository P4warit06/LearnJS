function ExtractAndRename (obj1){ 
    const {name ,age} = obj1;
    const FullNameAndAge = {fullName:name,yearsOld:age};
    return FullNameAndAge;
}

console.log(ExtractAndRename({name:'John',age:25,city:'New York'}));
console.log(ExtractAndRename({name:'Jane',age:30}));
