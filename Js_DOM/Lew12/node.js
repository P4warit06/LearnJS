//query Part
// //Element-querySelector (one node result or null), use CSS selector, return first node in document that matches given condition
// const divCourse = document.querySelector('#elective-1-67, #courses-1-67') //# represent id value
// //Element-getElementById (one node result or null), use id value
// console.log(divCourse)
// const divCourseById = document.getElementById('courses-1-67') //dont put .
// console.log(divCourseById)
// //...........................................................
// //NodeList-getElementsByName (name attribute)
// const progCourse = document.getElementsByName('programming')
// console.log(progCourse)
// console.log(progCourse.length)
// //NodeList-querySelectorAll, use CSS selector
// const electClassCourses = document.querySelectorAll('.elect-course') //. represents a class name
// console.log(electClassCourses)
// //.............................................................
// //HTMLCollection-getElementsByTagName
// const divElements = document.getElementsByTagName('div')
// console.log(divElements)
// console.log(divElements.length)
// //HTMLCollection -getElementsByClassName
// const electCourses = document.getElementsByClassName('elect-course') //no need to use .
// console.log(electCourses)
// console.log(electCourses.length)
// const lastElectCourse = electCourses[electCourses.length - 1]
// console.log(`last elective course: ${lastElectCourse}`)

///////////////
//Part Insert
// const divElements = document.getElementsByTagName('div') //HTMLCollection
// //1. query parent
// const parentNode = divElements[divElements.length - 1] //[1]
// console.log(parentNode)
// //2. query ref node
// // const refNode = parentNode.lastElementChild
// const refNode = parentNode.children[parentNode.children.length - 1]
// console.log(refNode)
// //3. create a new element  <!-- <h3 class="elect-course">Dummy Course</h3> -->
// const newCourse = document.createElement('h3')
// newCourse.setAttribute('class', 'elect-courese')
// newCourse.textContent = 'Dummy Course'
// //4. insert a new element before ref node
// parentNode.insertBefore(newCourse, refNode)

///replaceNode
const divElements = document.getElementsByTagName('div') //HTMLCollection
//1. query a parent node
const parentNode = divElements[divElements.length - 1] //[1]
console.log(parentNode)
//2. query a ref node
const refNode = parentNode.firstElementChild
console.log(refNode)
//3. create a new element  <!-- <h3 class="elect-course">Dummy Course</h3> -->
const newCourse = document.createElement('h3')
newCourse.setAttribute('class', 'elect-courese')
newCourse.textContent = 'Dummy Course'
//4. replace the first node with a new element
parentNode.replaceChild(newCourse, refNode)

//remove replace Node 
// const divElements = document.getElementsByTagName('div') //HTMLCollection
// //1. query a parent node
// const parentNode = divElements[divElements.length - 1] //[1]
// console.log(parentNode)
// //2. query a ref node
// const refNode = parentNode.firstElementChild
// console.log(refNode)
// //3. create a new element  <!-- <h3 class="elect-course">Dummy Course</h3> -->
// const newCourse = document.createElement('h3')
// newCourse.setAttribute('class', 'elect-courese')
// newCourse.textContent = 'Dummy Course'
// //4. replace the first node with a new element
// parentNode.replaceChild(newCourse, refNode)
// //5. remove node
// parentNode.removeChild(parentNode.lastElementChild)
// //6. remove all courses
// const allCourses = document.getElementById('courses-1-67')
// allCourses.textContent = ''