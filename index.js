var randomNumber1 = Math.floor((Math.random()*6))+1;
if(randomNumber1==1){
  document.querySelector(".img1").setAttribute("src","images/1.png");
}
else if (randomNumber1==2) {
  document.querySelector(".img1").setAttribute("src","images/2.png");
}
else if (randomNumber1==3) {
  document.querySelector(".img1").setAttribute("src","images/3.png");
}
else if (randomNumber1==4) {
  document.querySelector(".img1").setAttribute("src","images/4.png");
}
else if (randomNumber1==5) {
  document.querySelector(".img1").setAttribute("src","images/5.png");
}
else{
  document.querySelector(".img1").setAttribute("src","images/6.png");
}
// NOW FOR THE SECOND DICE

var randomNumber2 = Math.floor((Math.random()*6))+1;
if(randomNumber2==1){
  document.querySelector(".img2").setAttribute("src","images/1.png");
}
else if (randomNumber2==2) {
  document.querySelector(".img2").setAttribute("src","images/2.png");
}
else if (randomNumber2==3) {
  document.querySelector(".img2").setAttribute("src","images/3.png");
}
else if (randomNumber2==4) {
  document.querySelector(".img2").setAttribute("src","images/4.png");
}
else if (randomNumber2==5) {
  document.querySelector(".img2").setAttribute("src","images/5.png");
}
else{
  document.querySelector(".img2").setAttribute("src","images/6.png");
}
// TO DISPLAY THE WINNER

if(randomNumber1>randomNumber2){
  document.querySelector(".container h1").innerHTML = "🎊Player 1 winns";
}
else if (randomNumber1 == randomNumber2) {
  document.querySelector(".container h1").innerHTML = "Draw";
}
else{
  document.querySelector(".container h1").innerHTML = "🎉Player 2 winns";
}
