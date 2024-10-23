// individual export
// named export
// export function echo(msg = 'Hello, World') {
//   return msg
// }
// default export only one unit using default per module
// export default function x() {}

//export list
function echo(msg = 'Hello, World') {
  return msg
}
function x(someone = 'guest') {
  return `Hi, ${someone}`
}
const nums = [1, 3, 5, 7]
export { echo, x as greeting, nums }


