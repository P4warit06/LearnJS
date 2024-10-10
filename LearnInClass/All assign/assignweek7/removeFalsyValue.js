const removeFalsyValues =  (arr) => {
  return   arr.filter(Boolean) // callback function boolean 
}
/*
arr.filter(
      (element) =>
        element !== false &&
        element !== 0 &&
        element !== null &&
        element !== undefined &&
        element !== ""
    )
--------------------------------------------------------
const removeFalsyValues = (arr) => {
    return arr.filter(s => Boolean(s)) //Function Boolean
}
--------------------------------------------------------   
function removeFalsyValues(arr) {
  return arr.filter((e )=> e) 
}
*/
console.log(removeFalsyValues([0, 1, false, 2, '', 3]))
console.log(removeFalsyValues(['a', '', 'b', null, 'c']))
console.log(removeFalsyValues([null, undefined, 'A']))