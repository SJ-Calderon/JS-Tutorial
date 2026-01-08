/*
 * There are various ways to define a variable in JavaScript
 * Older/Not Recommended: Automatically or Use var
 * Newer/Recommended: Use let or const
 * let: Block Scope, Declared before use, Cannot be Redeclared
 * const: Block Scope, Cannot be Redeclared, Cannot be Reassigned
 */

// String
let name = "Mike";

// Number
let age = 23;
let gpa = 3.1;

// Boolean
let isMale = true;

// Null - Object abscence
const flaws = null;

// Undefined - No assigned value
let description = undefined;

document.getElementById("p1").innerText = ("" + name + " is " + age + " years old and has a " + gpa + " gpa.");