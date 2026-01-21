let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

for (let i = 0; i < 10; i++) {
    p1.innerHTML += i + "<br />";
}

let friends = ["Jim", "Stanley", "Kevin"];

for (let j = 0; j < friends.length; j++) {
    p2.innerHTML += friends[j] + "<br />";
}