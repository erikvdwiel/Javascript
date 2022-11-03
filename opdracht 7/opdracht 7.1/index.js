  const buget = 100(); 
  let geld;
  
  if (buget < s60) {
    geld = "U heeft genoeg geld!";
  } else {
    geld = "Helaas, te weinig geldt";
  }
  
  document.getElementById("demo").innerHTML = geld;