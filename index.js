
//code for random number 1
var randomnumber1=(Math.floor(Math.random()*6)) + 1;

var randomimagesource="images/dice"+randomnumber1+".png";

var image1=document.querySelectorAll("img")[0];

image1.setAttribute("src",randomimagesource);

//code for random number 2

var randomnumber2=(Math.floor(Math.random()*6)) + 1;

var randomimagesource2="images/dice"+randomnumber2+".png";

var image1=document.querySelectorAll("img")[1];

image1.setAttribute("src",randomimagesource2);

//code for winner display

if (randomnumber1>randomnumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 1 wins";
}
else if (randomnumber1<randomnumber2){
  document.querySelector("h1").innerHTML = "🚩 Player 2 wins ";
}
else if (randomnumber1=randomnumber2) {
  document.querySelector("h1").innerHTML = "Draw !!";
}
