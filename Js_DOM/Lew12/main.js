//Element-querySelector (one node result or null), use CSS selector, return first node in document that matches given condition
const divCourse = document.querySelector('#elective-1-67, #courses-1-67') //# represent id value
//Element-getElementById (one node result or null), use id value
console.log(divCourse)
const divCourseById = document.getElementById('courses-1-67') //dont put .
console.log(divCourseById)
//...........................................................
//NodeList-getElementsByName (name attribute)
const progCourse = document.getElementsByName('programming')
console.log(progCourse)
console.log(progCourse.length)
//NodeList-querySelectorAll, use CSS selector
const electClassCourses = document.querySelectorAll('.elect-course') //. represents a class name
console.log(electClassCourses)
//.............................................................
//HTMLCollection-getElementsByTagName
const divElements = document.getElementsByTagName('div')
console.log(divElements)
console.log(divElements.length)
//HTMLCollection -getElementsByClassName
const electCourses = document.getElementsByClassName('elect-course') //no need to use .
console.log(electCourses)
console.log(electCourses.length)
const lastElectCourse = electCourses[electCourses.length - 1]
console.log(`last elective course: ${lastElectCourse}`)

const NewElectic = document.getElementById('elective-1-67')
const hElement = document.createElement('h4')
hElement.setAttribute('style', 'color:Blue')
hElement.textContent = 'INT507-Agage'
NewElectic.appendChild(hElement)
//current Node
let currentNode = divCourse
while (currentNode !== null) {
  console.log(`currentNode : ${currentNode},
                    node type : ${currentNode.nodeType}, 
                node name : ${currentNode.nodeName}, 
                node Value:${currentNode.nodeValue}
            `)
  currentNode = currentNode.parentNode //up to document node
}

//child Elements
//query an element node <div id="courses-1-67"> (current node)
const divCourse2 = document.getElementById('courses-1-67')
let currentNode2 = divCourse
while (currentNode !== null && currentNode !== undefined) {
  console.log(`
    current node: ${currentNode},
    node type: ${currentNode.nodeType},
    node name: ${currentNode.nodeName},
    node value: ${currentNode.nodeValue}`)
  console.log(currentNode.childElementCount)
  const childElements = currentNode.children
  currentNode = childElements[0]
}
