let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let i = 1;
let j = 20;

while (i <= 10) {
    p1.innerHTML += i + "<br />";
    i++;
}

do {
    p2.innerHTML += j + "<br />";
} while (j <= 10)