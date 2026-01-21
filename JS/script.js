let p1 = document.getElementById("p1");
let p2 = document.getElementById("p2");

let numberGrid = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [0]
];

for (let i = 0; i < numberGrid.length; i++) {
    for (let j = 0; j < numberGrid[i].length; j++) {
        p1.innerText += numberGrid[i][j] + " ";
    }
    p1.innerText += "\n"
}