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
console.log(p1.getId())
console.log(p1.getName())
console.log(p1.toString())
