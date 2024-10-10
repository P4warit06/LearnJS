function x(a, b, ...c) {
  console.log(arguments)
  //[Arguments] {
  //   '0': 'apple',
  //   '1': true,
  //   '2': { id: 1, name: 'Somchai' },
  //   '3': 15,
  //   '4': 20
  // }
  console.log(arguments.length) //5
  for (const arg of arguments) {
    console.log(arg)
  } //log arguments ออกมาทีละตัว
  const arrArg = Array.from(arguments) //convert array-like to array with Array.from function
  console.log(arrArg.filter(Boolean)) //[ 'apple', true, { id: 1, name: 'Somchai' }, 15, 20 ]
}
x('apple', true, { id: 1, name: 'Somchai' }, 15, 20)
// This Code Receive  Many arguments Then Put thought Function  แล้วกรองค่า truthy ออกมาแสดงผล







