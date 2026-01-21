let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let password = "wordpass";
let response;
let entryCount = 0;
let entryLimit = 3;
let error = false;

while (response != password && !error) {
    if (entryCount < entryLimit) {
        response = window.prompt("Enter Password");
        entryCount++;
    }
    else {
        error = true;
    }
}

if (error) {
    alert("Too many entries");
}
else {
    alert("You got it!");
}