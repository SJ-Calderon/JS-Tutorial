/* 
    document.write() is depreciated
    Instead, use one of the following:
    document.getElementById(id).innerHTML -> Allow you to completely overwrite the HTML element
    document.getElementById(id).innerText -> Maintains HTML tag, but overwrites text
*/
document.getElementById("header-h1").innerText = "This uses innerText to change the text of a header 1";
document.getElementById("p1").innerHTML = "<h3>This uses innerHTML to change a paragraph into a header 3</h3>"