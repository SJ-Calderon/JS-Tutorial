// window.prompt returns strings
// To get the number, you must use either parseInt or parseFloat
let num1 = parseFloat(window.prompt("Input a number"));
let num2 = parseFloat(window.prompt("Input another number"));

document.getElementById("p1").innerText = "Sum = " + (num1 + num2);

document.getElementById("p2").innerText = "";