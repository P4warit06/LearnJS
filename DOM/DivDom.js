const divElement  =document.getElementById('dom-1')
const divAttrs = divElement.attributes 
// get all attributes of current node 
console.log(divAttrs.length);
for (let i = 0; i < divAttrs.length; i++) {
console.log(divAttrs[i].name);
console.log(divAttrs[i].length);
}