function mergeAndDestructure(obj1, obj2) {
  const { name, age } = { ...obj1, ...obj2 }
  return { name, age }
}
console.log(
  mergeAndDestructure({ name: 'John', age: 25 }, { city: 'New York' })
)
console.log(mergeAndDestructure({ name: 'Jane' }, { age: 30, country: 'USA' }))
/* const mergeAndDestracture = (obj1, obj2) => {
  const mearge = { ...obj1, ...obj2 } sprea 
  return { name:mearge.name, age:mearge.age } not destructure use object.key
}  Nay*/

/*function mergeAndDestructure(obj1, obj2) {
  let cloneObj = { ...obj1, ...obj2 } || Spread 
  let { name, age } = cloneObj || Destructure 
  return { name, age }
  tae 
}*/
