function ExtractAndRename(obj) {
    const {name ,age} = obj 
    const  FullNameAndAge = { fullname : name , yearsOlds:  age}
    return FullNameAndAge
}
// teacher
// const {name : fullName, age : yearolds} =  obj1
//console.log(fullName);
//console.log(yearsOld);
// return {fullName ,yearsOld}

console.log(ExtractAndRename({ name: 'John', age: 25, city: 'New York' }))
console.log(ExtractAndRename({ name: 'Jane', age: 30 }))
