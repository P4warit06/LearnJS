let a = 5,
  b = 6,
  c = 7,
  d = 8,
  e = 9

// เพิ่มค่าแบบ Prefix เพิ่มก่อนแล้วนำไปใช้
console.log('ค่าเริ่มต้น  =', a)
console.log('PreFix = ', ++a)
console.log('ค่าปัจจุบัน  =', a)

console.log('-------------')

// เพิ่มค่าแบบ Postfix ใช้ก่อนแล้วค่อยเพิ่ม
console.log('ค่าเริ่มต้น  =', b)
console.log('PostFix = ', b++)
console.log('ค่าปัจจุบัน  =', b)


console.log('-------------------')

// ลดค่าแบบ Prefix ลดก่อนแล้วนำไปใช้
console.log('ค่าเริ่มต้น  =', a)
console.log('PreFix = ', --a)
console.log('ค่าปัจจุบัน  =', a)

console.log('-------------------')

// ลดค่าแบบ Postfix ใช้ก่อนแล้วค่อยลด
console.log('ค่าเริ่มต้น  =', a)
console.log('PreFix = ', a--)
console.log('ค่าปัจจุบัน  =', a)
