function x(arg) {
  //arg=std //shared object
  arg.id = 555
}
const std = { id: 1 }
console.log(x(std))
console.log(std) //id=555
