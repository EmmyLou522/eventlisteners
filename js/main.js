function showColor(color) {
    switch( color ) {
    case "red":
            document.getElementById("hexcodes").value="#e50000";
            break;
    case "orange":
            document.getElementById("hexcodes").value="#ffa500";
            break;
    case "yellow":
            document.getElementById("hexcodes").value="#f5f36f";
            break;
    case "green":
            document.getElementById("hexcodes").value="#00b200";
            break;
    case "blue":
            document.getElementById("hexcodes").value="#3232ff";
            break;
    case "violet":
            document.getElementById("hexcodes").value="#551a8b";
            break;
    }
}

//Event listener listens for mouseover to display the hex code in the text area.//