//destructuring object at parameter passing
function getId({ id: { categoryId, productId } }) {
  return categoryId + productId
}
console.log(getId({ id: { categoryId: 'cat01', productId: 1001 }, price: 50 })) //cat011001

// 2 .function getId({id ,price}) 
// 3 .function getId({ id: { categoryId }, id: { productId } }) //Destrucure ทั้ง Obj แล้วเข้าไปทีละตัว
