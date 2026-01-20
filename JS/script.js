// This will store the HTML element in the variable
let header = document.getElementById("header");
let link = document.getElementById("link");

// innerHTML will let you modify the HTML code for the element
header.innerHTML = "Overwritten Header";
link.innerHTML = "Amazon";

// You can modify any attribute directly for the HTML element
header.style.color = "red";
header.style.backgroundColor = "blue";
link.href = "https://www.amazon.com";
link.style = "color:green;"