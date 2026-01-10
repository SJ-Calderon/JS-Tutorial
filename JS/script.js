// Function syntax in JavaScript:
// function funcName(params){}
function sayHi(name, age){
    document.getElementById("p1").innerText = "Hello " + name + ". You are " + age + ".";
}
let name = window.prompt("Type your name");
let age = window.prompt("Type your age");
sayHi(name,age);

function addition(num1, num2){
    return num1 + num2;
}
let num1 = parseFloat(window.prompt("Input 1st number"));
let num2 = parseFloat(window.prompt("Input 2nd number"));
let sum = addition(num1, num2);

document.getElementById("p2").innerText = "Sum of numbers is " + sum;