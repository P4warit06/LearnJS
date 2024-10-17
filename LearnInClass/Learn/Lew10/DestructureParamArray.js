function x([n1], [n2]) {
  //destructure parameter array, accept one item in array ของ nums, value ที่รับเข้ามา
  return n1 + n2
}
const nums = [1, 3, 5, 7] // array
const values = ['apple', 'mango'] //array
console.log(x(nums, values)) //1apple argument รับค่า Num , Values
