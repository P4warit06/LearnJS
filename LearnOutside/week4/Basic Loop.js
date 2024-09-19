let count = 5 // assign variable count is 1 จำนวนนับรอบ
/*while (count < 3 ) { 
   console.log("Hello world!"); //1 ,2 
   count++;  // 1=> 2   
}*/

while (count <= 5) {
  console.log('ผลิตสินค้าชิ้นที่ = ', count)
  if (count == 4) {
    break
  }
  count++
}
