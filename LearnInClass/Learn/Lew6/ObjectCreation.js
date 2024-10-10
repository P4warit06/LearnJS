//1 .create object by literal
const obj = {
  id: 1,
  title: 'untitled',
  title: 'no title',
}
console.log(obj)
// 2.create object by constructor function
function ObjectFactory(id, title = 'untitled') {
  this.id = id // property name id  received from parameter
  this.title = title
  this.email = 'no email '
}

const x1 = new ObjectFactory(1) //
const x2 = new ObjectFactory(
  2,
  'this is an object build from constructor function'
) //
console.log('output from x1 =')
console.log(x1)
console.log('output from x2 =')
console.log(x2)

// 3 . create object by class
class Student {
  constructor(id, firstName = 'noname', email = 'no email') {
    this.id = id
    this.firstName = firstName
    this.email = email
  }
  getId() {
    return this.id 
  }
  toString() {
    return `Id:${this.id} , Name:${this.firstName} , Email:${this.email}` 
  }
}
const std1 = new Student(66130500059,"await") 
console.log(std1);
// this output return a number of id because getId returns The id 
console.log("Print Id "+std1.getId());
console.log(std1.toString());

Student.prototype.getEmail = function () { 
    return this.email;
}
console.log("print email : "+std1.getEmail()); // return the email from method getEmail method
console.log(Student.prototype); 

console.log('================================');



const a = {}
console.log("object A "+a.toString());

Object.prototype.toString = function  ( ) {
    return 'not show [object,object] but showing No String in this object '
}
console.log("Rewrite toString method default = "+a.toString());



