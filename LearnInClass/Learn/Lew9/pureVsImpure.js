//pure function
const data = {value : 10}
function pureFunc (arg) {
let z = 2
arg = arg * z + 1
return arg
}
console. log (pureFunc (data.value)) // 21
console. log (pureFunc (data.value)) // 21
// จาก โค้ด มันเอา ตัว.value ข้างในมาทำโปรแกรมนี้คือ 10 

//impure function
// Sharing Object
function impureFunc2 (arg) {
let z = 2
arg.value = arg.value * z + 1
return arg.value
}
console. log (impureFunc2 (data)) // 21
console. log (impureFunc2 (data)) // 43
// จากโค้ดมันเอาทั้ง Object นั้นมาคิด แล้วภายใน logic มันเอา .value ของ data คือ 10 มา *2 แล้ว +1 จึงได้ 21 
// จากนั้น Return เป็น arg.value ที่มีค่าเท่ากับ 21 กลับไปกลายเป็นตัวใหม่ที่แทรกอยู่ในData  
// พอเข้า log 20 มันเอา .value ของ Obj ใหม่ คือ 21 มา *2 แล้ว +1 จึงได้ 43 