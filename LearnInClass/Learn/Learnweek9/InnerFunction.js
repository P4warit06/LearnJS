function addSquares(a, b) {
    // จับ Parameter a,b มองเป็น x แล้วทำ logic ข้างใน คือ 2*2 ,5*5 แล้วReturn ค่ามา 
  function square(x) {
    return x * x
  }
  return square(a) + square(b) // Return output ของ Square  คือ 4+25
}
console.log(addSquares(2,5));



