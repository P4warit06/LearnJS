// 1,. object literal
const person = { name: 'Somchai', id: 123456, name: 'Suda', id: 12345678 }
// console.log(person.name)
// console.log(person.id)

// console.log(person['id'])
// console.log(person['name'])

// เอา Key ล่าสุด
for (let key in person) {
  console.log(key, person[key])
}

