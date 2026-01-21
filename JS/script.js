let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

// Objects are containers of key value pairs
// Keys must be unique
// Key value pairs are commas separated
let person = {
    name: "Mike",
    age: 23,
    isMale: true,
    occuptation: "programmer",
    printName: function(){
        p1.innerHTML = "<h2>" + this.name + "</h2>";
    }
};

// Access values using the corresponding key
// Keys act as attributes of the object
// p1.innerText = person.name;
person.printName();

// Values can be updated
person.name = "Joe";

p2.innerText = person.name;