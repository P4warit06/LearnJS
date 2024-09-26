const obj = { id: 1234, title: 'untitled', room: 'cb2304', floor: 3 }
const { id, room, ...otherProps } = obj //destructure +rest
console.log(id) //1234
console.log(room) //cb2304
console.log(otherProps) //?{ title: 'untitled', floor: 3 }

const arr = [1, 3, 5, 7, 9]
const [m, n, ...p] = arr //destructure +rest
//const [m, n, ...p] = arr //destructure +spread
console.log(m) //1
console.log(n) //3
console.log(p) //[5,7,9]
