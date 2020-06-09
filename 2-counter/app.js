const decBtn = document.querySelector(".decrease");
const incBtn = document.querySelector(".increase");
const restBtn = document.querySelector(".reset");
const value = document.getElementById("value");
// let value=0
decBtn.addEventListener("click", (dec) => {
  value.textContent--;
  color();
});
incBtn.addEventListener("click", function inc() {
  value.textContent++;
  color();
});
restBtn.addEventListener("click", (rest) => {
  value.textContent = 0;
  color();
});
// valuetext.textContent=value;
let color = () => {
  let counter = Number(value.textContent);
  console.log(typeof counter);

  if (counter > 0) {
    value.style.color = "green";
  }
  if (counter < 0) {
    value.style.color = "red";
  }
  if (counter === 0) {
    value.style.color = "#222";
  }
};
