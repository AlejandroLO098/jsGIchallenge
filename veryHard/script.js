//VERY HARD: Create a simple calculator that prompts the user for a number, an operator (either +, -, * or /) and another number, 
//and then uses the functions created in the hard challenge to output the value in sentence form. Example output: "3 + 4 = 7"
let operand = prompt("Please select an operator. +, -, *, or /");
let num1 = prompt("Pick your first number");
let num2 = prompt("Pick your second number");

if(operand == "+"){
   let sum =  num1 + num2
   console.log()
} else if(operand == "-"){
    let subt = num1 - num2
} else if(operand == "*"){
    let times = num1 * num2
} else if(operand == "/"){
    let division = num1 - num2
}










function multiply(number1, number2){
    return number1 * number2
}
const numbersMultiply = multiply(9, 2);
console.log(numbersMultiply)

function add(number1, number2){
    return number1 + number2
}
const numbersAdded = add(2, 2);
console.log(numbersAdded)

function divide(number1, number2){
    return number1 / number2
}
const numbersDivided = divide(10, 2);
console.log(numbersDivided)

function subtract(number1, number2){
    return number1 - number2
}
const numbersSubtract = subtract(4, 2);
console.log(numbersSubtract)
