const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
let nhex=document.querySelector(".color");
let btn=document.getElementById("btn");
btn.addEventListener('click',backgroud);
function Ran(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }
function backgroud(){
  let color="#"; 
  for (let six = 0; six < 6; six++) {
    var random=Ran(15);
    color+=hex[random];
    console.log(color);    
}
    nhex.textContent=color;
    document.body.style.backgroundColor = color;
}
