class Person {
  constructor(id, name) {
    this.id = id
    this.name = name
  }
  getId() {
    return this.id
  }
  getName() {
    return this.name
  }
  toString() {
    return `Id: ${this.id}, Name: ${this.name}`
  }
}
const p1 = new Person(1, 'Somchai')
const p2 = new Person(2, 'Somsak')
const p3 = new Person(3, 'Somporn')
// console.log(p1.getId())
// console.log(p2.getId())
// console.log(p3.getId())
// console.log(p1.getName())
// console.log(p1.toString())

const s1 = Object.create(p1)
console.log(s1) //Person {}
console.log(s1.id) //;
console.log(s1.name) //;
s1.id = 66130500059
s1.name = 'Alice '
console.log(s1.id) //;//;
console.log(s1.name) //;
s1.email = 'pawarit.samr@gmail.com'
console.log(s1)
//check properties
console.log(s1.hasOwnProperty('id')) // return false because id it not own property
console.log(s1.hasOwnProperty('name'))
console.log(s1.hasOwnProperty('email'))
