console.log("Hello world");
// function declaration
function calculator(op, num1, num2) {
  if(typeof op === "string" && typeof num1 === "string" &&  typeof num2 === "string") {  
    return "String"

  throw Error("Invalid Datatype");
  console.log(typeof op);
  console.log(typeof num1);
  console.log(typeof num2);
  return (num1, num2);
  }
  throw  Error("Invalid Datatype");
}
console.log(calculator("AMD","String",3));

function expression (arrow function)

const sum = (num1, num2) => {
  return num1 + num2;
};
const subtract = (num1, num2) => {
  return num1 - num2;
};
const randomNumber = () => {
  const randNum = Math.floor(Math.random() * 10) + 1; //1-10
  console.log(randNum);
  return randNum;
};

const num1 = randomNumber();
const num2 = randomNumber();
//op is a higher order function
console.log(calculator(sum, num1, num2));
