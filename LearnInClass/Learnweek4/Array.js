//Arrays Order have index order
const values = [
  123,
  "Hello World ",
  true,
  [5, 6, 7],
  { id: 1, title: "Untitled" } // object literal
];
values[values.length ] = 'goodbye world'
console.log(values)
console.log(values[0]) //first item 
console.log(values[values.length-1]) // last item

console.log("__________________ for each element__________")

// loop to check in array
values.forEach(element => {
    console.log(element)    
})

console.log("============ for of  element ===========")
    
