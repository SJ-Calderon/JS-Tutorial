let p1 = document.getElementById("p1");

/*
 * Comparators: >, >=, <, <=, ==, !=
 */
function max(num1, num2, num3) {
    if (num1 >= num2 && num1 >= num3) {
        return num1;
    }
    else if (num2 >= num1 && num2 >= num3) {
        return num2;
    }
    else {
        return num3;
    }
}

p1.innerText = max(1, 2, 3);