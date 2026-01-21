let p1 = document.getElementById("p1");

let txtbox = document.getElementById("textbox");
let btn = document.getElementById("btn");

btn.addEventListener("click", function() {
    // localStorage is where you can store things locally across sessions
    // You can specify any attribute that you want to store
    localStorage.name = txtbox.value;
});

p1.innerText = localStorage.name;