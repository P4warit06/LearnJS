function visitor(initialValue) {
  let visit = initialValue
  function getVisitor() {
    return visit
  }
  function incrementVisit() {
    visit += 1
  }
  function decrementVisit() {
    visit -= 1
  }
  return {
    getVisitor: getVisitor,
    incrementVisit: incrementVisit,
    decrementVisit,
  } //object
}
//not use destructuring
const x = visitor(100)
console.log(x) //[Function: getVisitor]
console.log(x.getVisitor()) //100
x.incrementVisit()
console.log(x.getVisitor()) //101
x.decrementVisit()
console.log(x.getVisitor()) //100

//use destructuring
const { getVisitor, incrementVisit, decrementVisit } = visitor(200)
console.log(getVisitor()) //200
incrementVisit() //201
console.log(getVisitor()) //201
decrementVisit() //200
console.log(getVisitor()) //200
