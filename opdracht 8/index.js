function multiply() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 * getal2;
        document.getElementById("antwoord").innerHTML = antwoord;
    }
}
function divide() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 / getal2;
        document.getElementById("antwoord").innerHTML = antwoord;
    }
}

function add() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = +getal1 + +getal2;
        document.getElementById("antwoord").innerHTML = antwoord;
    }
}

function minus() {
    var getal1 = document.getElementById("getal1").value;
    var getal2 = document.getElementById("getal2").value;
    if (getal1 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    } 
    else if (getal2 < 0) {
        document.getElementById("antwoord").innerHTML = "Getal te laag";
    }
    else {
        var antwoord = getal1 - getal2;
        document.getElementById("antwoord").innerHTML = antwoord;
    }
}