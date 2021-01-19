const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const nhex = document.querySelector(".color");
const btn = document.getElementById("btn");
btn.addEventListener("click", backgroud);
/**
 * @returns random vlaue from 0 to the prama max
 * @param {number} max the max random rang value
 */
function Ran(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
/**
 * @description
 * take random color from the array colors and set the background color to this arr
 */
function backgroud() {
  let random = " ";
  random = colors[Ran(4)];
  nhex.textContent = random;
  document.body.style.backgroundColor = random;
}
