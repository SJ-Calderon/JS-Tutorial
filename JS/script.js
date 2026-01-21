let msgs = document.getElementById("messages");
let txtbox = document.getElementById("textbox");
let button = document.getElementById("button");

button.addEventListener("click", function(){
    // createElement will create a new HTML element
    let newMsg = document.createElement("li");

    // The value attribute will grab the text within the HTML element
    newMsg.innerHTML = txtbox.value;

    // appendChild will add the given HTML element as a child
    msgs.appendChild(newMsg);

    // This clears the text within the textbox
    txtbox.value = "";
});