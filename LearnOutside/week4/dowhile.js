let String  = 'I love you ';  
let count = 0; 
//ทำก่อนอย่างน้อย 1 รอบ
// do{
//  console.log(count);
//  count++; 
// } while(count <= 5); 

/*while(count > 0){ 
    console.log(count);
    count++; 
    if(count == 201 ) break; 
} */
do{
    if(count === 20) break;
    count++
    console.log("count: " + count)
}while (true) { 
    console.log("loop End At"+count);
}