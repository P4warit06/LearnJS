class Product {
  constructor(id, price, stock) {
    this.id = id
    this.price = price
    this.stock = stock
  }
  getPrice() {
    return this.price
  }
}
const p1 = new Product(1, 630, 150000)
console.log('p1 = ' + p1)
console.log(Product.prototype)
console.log('p1.proto = ' + p1.__proto__) // __proto__ is a hidden (now deprecated)
// property  that stores  a prototype of object
console.log(p1.__proto__ === Product.prototype)

const x = Object.create(p1)
console.log(x)
console.log(x.id)
console.log(x.price)
console.log(x.stock)
console.log(x.__proto__) // proto ที่สืบทอดมา
console.log(x.hasOwnProperty('id')) //false 

x.id = 'x1001'
console.log(x.hasOwnProperty('id'));
console.log(x)

console.log(Product.prototype.isPrototypeOf(p1))
console.log(Object.prototype.isPrototypeOf(p1))
console.log('================================')
console.log(Product.prototype.isPrototypeOf(x))
console.log(Object.prototype.isPrototypeOf(x))
