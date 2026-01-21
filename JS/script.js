let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let friends = ["Oscar", "Angela", "Kevin"];

// forEach specifies what code will run for each of the elements of the array
friends.forEach(function(element) {
    p1.innerText += element + "\n";
});

let books = [
    {
        title: "Harry Potter",
        author: "JK Rowling",
        pages: 300
    },
    {
        title: "Green Eggs & Ham",
        author: "Dr. Seuss",
        pages: 25
    }
];

books.forEach(function(book) {
    p2.innerText += "Author: " + book.author + "\n";
});