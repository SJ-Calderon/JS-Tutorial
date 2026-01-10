// window represents the browser's window
// prompt displays a pop-up with a textbox
// The pop-up also comes with "OK" and "Cancel" buttons
let name = window.prompt("What is your name?");

document.getElementById("p1").innerText = "Hey " + name + ". How are you today?";

document.getElementById("p2").innerText = "";