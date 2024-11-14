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
const [...c] = d // Spread แต่มันสร้าง New Array Name c ไม่ใช่อาเรย์เดิม
console.log(d); // turn to array 

