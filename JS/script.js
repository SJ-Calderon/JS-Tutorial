// Math Operators: +, -, *, /, %

document.getElementById("p1").innerText = ( 2 + 5 * 2 / 7 % 3 );

// Math Methods
let num1 = -2;
let num2 = 3;

// abs, min, max
let res = Math.abs(num1) + Math.min(num1,num2) + Math.max(num1,num2);

// round
// rounds down if the decimal is .4 or less and up if the decimal is .5 or more
let num3 = 1.5;
res += Math.round(num3);

// pow
res = Math.pow(res, 2);

// sqrt
res = Math.sqrt(res);

// random
let rand = Math.random();

document.getElementById("p2").innerText = res + rand;