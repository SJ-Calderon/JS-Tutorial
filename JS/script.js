let p1 = document.getElementById("p1");

let isMale = true;
let isTall = true;

/*
 * Logical operators: && (AND), || (OR), ! (NOT)
 * If Statements: if ... else if ... else
 */
if (isMale && isTall) {
    p1.innerText = "You are a tall male.";
}
else if (isMale && !isTall) {
    p1.innerText = "You are a short male.";
}
else if (!isMale && isTall) {
    p1.innerText = "You are not a male and tall.";
}
else {
    p1.innerText = "You are not male or tall.";
}