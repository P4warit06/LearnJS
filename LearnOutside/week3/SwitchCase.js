// switch( สิ่งที่ต้องการตรวจสอบ) {
//     Case ค่าที่ 1  : คำสั่งที่ 1
//     break ;
//     Case ค่าที่ 2  : คำสั่งที่ 2
//     break ;
//     Case ค่าที่ 3  : คำสั่งที่ 3
//     break ;
// default ; คำสั่งเมื่อไม่มีค่าที่ตรงกับที่ระบุในเคส
// }
// let status = -1
// let light
/*if (status == 0) {
    light = "ปิดไฟ" ;
}else if (status == 1) {
  light = 'เปิดไฟ'
}
else {
    light = "ไม่พบข้อมูล"
}
*/
// switch (status) {
//   case 0:
//     light = 'ปิดไฟ'
//     break
//   case 1:
//     light = 'เปิดไฟ'
//     break
//   default:
//     light = 'ไม่พบข้อมูล'
// }
function checkMonth(month) {
  if (typeof month !== 'number') return undefined
  let monthName
  switch (month) {
    case 1:
      monthName = 'มกราคม'
      break
    case 2:
      monthName = 'กุมภาพันธ์'
      break
    case 3:
      monthName = 'มีนาคม'
      break
    case 4:
      monthName = 'เมษายน'
      break
    case 5:
      monthName = 'พฤษภาคม'
      break
    case 6:
      monthName = 'มิถุนายน'
      break
    case 7:
      monthName = 'กรกฎาคม'
      break
    case 8:
      monthName = 'สิงหาคม'
      break
    case 9:
      monthName = 'กันยายน'
      break
    case 10:
      monthName = 'ตุลาคม'
      break
    case 11:
      monthName = 'พฤศจิกายน'
      break
    case 12:
      monthName = 'ธันวาคม'
      break
    default:
      monthName = 'เดือนที่ไม่ถูกต้อง'
      break
  }
  return monthName
}

console.log(checkMonth(11))
console.log(checkMonth(13))
console.log(checkMonth(-1))
