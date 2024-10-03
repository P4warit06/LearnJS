//2. function constructor
function Person(id, name) {
  this.id = id
  this.name = name
}
//correct way use function constructor
const p1 = new Person(1, 'Somchai')
const p2 = new Person(2, 'Suda')
console.log(p1)
console.log(p2)

//wrong using function constructor
const x = Person(1, 'A')
console.log(x) //undefined

