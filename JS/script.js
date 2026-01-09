let phrase = "Strings are fun";

// Gets the # of characters within a string
let len = phrase.length;

/* String Methods */
// toUpperCase
let upper = phrase.toUpperCase();

// toLowerCase
let lower = phrase.toLowerCase();

// charAt
// JavaScript indexes from 0
let char = phrase.charAt(1);

// indexOf
// This will return the index of the 1st instance of the character
// Returns -1 if character not found
let firstIndex = phrase.indexOf("i");

// lastIndexOf
let lastIndex = phrase.lastIndexOf("r");

// substring
// 1st index is included, 2nd index is not included
let substr = phrase.substring(0,3);

// endsWith
// returns true if the string ends with the substring
let endsWithFun = phrase.endsWith("fun");

// includes
// return true if the string includes the substring
let includesAre = phrase.includes("are");

document.getElementById("p1").innerText = ('The phrase "' + phrase + '" is ' + len + " characters long.");