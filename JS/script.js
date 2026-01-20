// This is the function which will be triggered with the onClick event
function handleClick(element) {
    element.style = "background-color:blue;"
}

let img = document.getElementById("image");

// This will add a listener for the specified event
// You can specify the code directly in the parameter
// You need to drop the "on" for the event when using it directly in JS
img.addEventListener("mouseover", function(){
    this.style = "box-shadow: 2px 2px 2px grey;";
    this.width = "150";
});

// This will reset the image to the original styling
img.addEventListener("mouseout", function(){
    this.style = "";
    this.width = "100";
});