const arr  = [1,3,5,8,8,9,9,4,4,5651,8,26,52];
delete arr[1]
console.log(arr);
console.log(arr.length);

const obj = { id:1,name :'Unnamed'}
delete obj['id']
console.log(obj);
obj.email = 'unnamed@example.com' // adding a new Properties
console.log(obj);
obj.email = 'unEmail' //reassign property value
console.log(obj)
delete obj['email']
console.log(obj);
