const x = [1,3,5,7]
let [a,m, ,o] = x 
console.log(typeof a )
console.log(typeof m )
console.log(a,m ) //1,3
console.log(o)

const [...n] = x 
console.log(n);
console.log(n.length);


const d =[555]
const [...c] = d
console.log(d); // turn to array 