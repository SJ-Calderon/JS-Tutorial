let p1 = document.getElementById("p1");

function getDayName(dayNum) {
    let day;

    switch (dayNum) {
        case 0:
            day = "Sunday";
            break;
        
        case 1:
            day = "Monday";
            break;

        case 2:
            day = "Tuesday";
            break;
        
        case 3:
            day = "Wednesday";
            break;

        case 4:
            day = "Thursday";
            break

        case 5:
            day = "Friday";
            break;

        case 6:
            day = "Saturday";
            break;

        default:
            day = "Not a day of the week";
            break;
    }

    return day;
}

p1.innerText = getDayName(2);