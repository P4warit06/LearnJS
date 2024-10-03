const square = {
  id:1,
  side: 4,
  area: function () {
    return this.side * this.side
  },
  //เปรียบเทียบ 
  compareTo: function(anotherSquare) {
    return this.id === anotherSquare.id
  }
}
const square2 ={id:1}
console.log(square.compareTo(square2));

// function distance (p1,p2) {
//     return Math.sqrt( (p1.x - p2.x) **2 + (p1.y - p2.y) **2 );
//     Exponential operator (**)
// }
// console.log(distance({x:2,y:2} , {x:1,y:3}));
