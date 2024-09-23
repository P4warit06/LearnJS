function removeDuplicates(arr) {
  if (Array.isArray(arr)) return [...new Set(arr)]
  /*ตรง Return Spread แล้วสร้าง Set ใหม่ ที่เก็บแค่ค่า  Unique */
} 
console.log(removeDuplicates([1, 2, 3, 3, 4]))
