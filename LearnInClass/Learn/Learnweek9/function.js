// function are object and
//function can be parameter
// Accept function as  an argument
// function can be return

const echo = (x) => x //assign function to variable "echo"   That have x to =>  x
const y = echo //assign reference to  "y"
console.log(y) //what is y ? [Function : echo ]
console.log(y(10)) // what is a result of y() ? , 10
console.log(typeof y) // function
console.log(echo === y) // result  should be A true

// compose function เอา Function มาประกอบร่างกันเพื่อแก้สิ่งใดสิ่งหนึ่ง