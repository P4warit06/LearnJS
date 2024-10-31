const divElement  =document.getElementById('dom-1')
const divAttrs = divElement.attributes 
// get all attributes of current node 
console.log(divAttrs.length);
for (let i = 0; i < divAttrs.length; i++) {
console.log(divAttrs[i].name);
console.log(divAttrs[i].length);
}

console.log(divElement.getAttribute('id')); // dom-01
console.log(divElement.getAttribute('style')); //color :red
// call attribute's  parent 
console.log(divElement.attributes[0].parentElement) //null
console.log(divElement.attributes[0].parentNode) //null 
console.log(divElement.attributes[0].ownerElement) 


const pNewCode = document.createElement('p')
const body