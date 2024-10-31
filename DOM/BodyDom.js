// // a top node of tree , cover all node in HTML element
// const rootNode = window.document
// console.log(rootNode);
// // a top  element node which represents  <HTML> tag
// const rootElement = document.documentElement
// // document element or root element 
// console.log(rootElement);

// // common properties : node type , node name ,and node value 
// console.log(rootNode.nodeType); // 9  Type rootNode 
// console.log(rootNode.nodeName); //#document
// console.log(rootNode.nodeValue); // null 

// console.log(rootElement.nodeType); // 1 
// console.log(rootElement.nodeName); // html 
// console.log(rootElement.nodeValue); // null 

// if(rootElement.nodeType === Node.ELEMENT_NODE){
//     //Compare rootElement is an element node or not 
//     console.log('root element is an element node type ');
// }
// head body 
// const head = document.head 
// const body = document.body 
// console.log(head);
// console.log(body);
const rootNode = window.document
//childNodes return all children with all  node types
// NodeList  is a result data type when calling childNodes property .
// It is an array-like that implements one forEach and you can use 
// length property and refer indexing 
const rootNodeChilds = rootNode.childNodes  // return every node type AS node List , node list a Array 
console.log(rootNodeChilds); 
rootNodeChilds.forEach( (node) =>  { 
    console.log(`node : Type ${node.nodeType} , node name : ${node.nodeName}
        , node value : ${node.nodeValue}`);
}
)
//output node : Type 10 , node name : html, node value : null 
// node : Type 8 , node name : #comment , node value :  First Comment
// node : Type 1 , node name : HTML , node value : null
const rootNodeChildren = rootNode.children
//HTMLCollection (array-like, no implement for array method) is result data type return from children property
console.log(rootNodeChildren);
Array.from(rootNodeChildren).forEach( (node) => { 
    console.log(`node : Type ${node.nodeType} , node name : ${node.nodeName}
        , node value : ${node.nodeValue}`);
}) // As a collection 



const rootBody =window.document.body

const  bodyNodeChilds = rootBody.childNodes
bodyNodeChilds.forEach( (node)=>  {
    console.log(`node : Type ${node.nodeType} , node name :${node.nodeName} , 
        node value : ${node.nodeValue}`);
}) ; 


const  bodyNodeChildren = rootBody.children
Array.from(rootNodeChildren).forEach( (node) => { 
    console.log(`node : Type ${node.nodeType} , node name : ${node.nodeName}
        , node value : ${node.nodeValue}`);
})