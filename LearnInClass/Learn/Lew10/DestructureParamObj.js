//destructuring object at parameter passing
function getPrice({ price }) {
  return price
}
console.log(getPrice({ productId: 1001, productPrice: 50 })) //undefined
console.log(getPrice({ productId: 1001, price: 50 })) //50
