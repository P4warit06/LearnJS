/*for (let count = 1; count <= 5; count++) {
  console.log('Hello World!')
}
for (let count1 = 10; count1 >= 1; count1--) {
  console.log(count1)
}*/
let count = 10
do {
  if (count == 0) break
  console.log(count)
  count--
} while (true)
{
  console.log('ERROR: ' + count)
}