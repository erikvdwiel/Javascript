let modal = document.getElementById("myModal");

let btn = document.getElementById("myBtn");

let span = document.getElementsByClassName("close")[0];



btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}




function verifiër() {
   
    if (17 < leeftijd) {
        document.getElementById("leeftijd").href = "https://www.w3schools.com/howto/howto_css_modals.asp";
    } 
    else if (leeftijd < 17) {
        document.getElementById("leeftijd").href = "te jong.html";
    }
    else {

    }
}

