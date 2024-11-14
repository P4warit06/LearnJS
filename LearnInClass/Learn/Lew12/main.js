//insert element
//query an element node <div id="courses-1-67"> </div>
const divCourse = document.getElementById('courses-1-67')
//create a new Element <p> with Attribute and Text content
const pElement = document.createElement('p')
pElement.setAttribute('style', 'color:red')
pElement.textContent = 'INT209-Network'
//append a new Element <p> to <div id="course-1-67">
divCourse.appendChild(pElement)

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

let CountNode = divCourse
let abc = CountNode.childElementCount
console.log(abc)

let ChildNode = divCourse
while (ChildNode !== null) {
  console.log(`count ChildNode : ${ChildNode.childElementCount},
//                     node type : ${ChildNode}.nodeType},
//                 node name : ${ChildNode.nodeName},
//                 node Value:${ChildNode.nodeValue}
//             `)
  ChildNode = ChildNode.firstChild
}

// let ChildNode = divCourse
// while (ChildNode!== null ){
//     console.log(`currentNode : ${currentNode},
//                     node type : ${currentNode.nodeType},
//                 node name : ${currentNode.nodeName},
//                 node Value:${currentNode.nodeValue}
//             `)
//    ChildNode  = ChildNode.childNodes
// }
//nodeList
const progCourse = document.getElementsByName('programming') //document Node
console.log(progCourse)
console.log(progCourse.length)
//HTMLCollection-getElement
const divElements = document.getElementsByTagName('div')
console.log(divElements)
console.log(divElements.length)

const classElement = document.getElementsByClassName('elect-course')
console.log(classElement)
console.log(classElement.length)
const lastElectCourse = classElement[classElement.length - 1]
console.log(`last elective course: ${lastElectCourse}`)
