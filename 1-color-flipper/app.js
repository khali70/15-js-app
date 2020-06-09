const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const nhex = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", backgroud);
function Ran(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
function backgroud() {
  let random = " ";
  random = colors[Ran(4)];
  nhex.textContent = random;
  document.body.style.backgroundColor = random;
}
