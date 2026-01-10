// Arrays can be created using the new keyword or using a literal
let fruits = new Array("Apples", "Oranges", "Peaches");
let cars = ["Saab", "Volvo", "BMW"];

// length property returns the number of array elements
let numCarBrands = cars.length;

// Strings can be split into an array using the split method
let names = "Steven, Mike, Marc";
names = names.split(",");

document.getElementById("p1").innerText = "Random Fruit: " + fruits[Math.floor(Math.random()*10)%3];

document.getElementById("p2").innerText = "Examples of names: " + names;