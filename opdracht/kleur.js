// teller voor aantal keer geklikt //
var telkliks = 0; // teller op 0

function getRandomColor()
{
    var letters = '0123456789ABCDEF';
    var color = "#";

    for (var n = 0; n < 6; n++ )
    {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function kleuraanpassen()
{
   const AllePs = document.getElementsByTagName("p");

   for (let i = 0; i < AllePs.length; i++)
{
    AllePs[i].style.color = getRandomColor();
}

    telkliks++; // optellen 1 bij telkliks
    document.getElementById("teller").innerHTML = "Aantal keer geklikt: " + telkliks;

}