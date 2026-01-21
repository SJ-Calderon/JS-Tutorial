let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let myMovie = {
    title: "The Social Network",
    releaseYear: "2010",
    duration: 2.0,
    actors: [
        {
            name: "Jessie Eisenburg",
            birthday: new Date("October 5, 1983"),
            hometown: "New York, New York"
        },
        {
            name: "Ronney Mara",
            birthday: new Date("April 17, 1985"),
            hometown: "Bedford, New York"
        }
    ]
};

p1.innerText = myMovie.title;
p2.innerText = myMovie.actors[0].name;