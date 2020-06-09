// select modal-btn,modal-overlay,close-btn
const togle_btn = document.querySelector("button.modal-btn");
const rm_btn = document.querySelector(".close-btn");
const modal = document.querySelector(".modal-overlay");
console.log(togle_btn);
// listen for click events on modal-btn and close-btn
togle_btn.addEventListener("click", () => {
  Togle();
});
rm_btn.addEventListener("click", () => {
  Remove();
});
// when user clicks modal-btn add .open-modal to modal-overlay
Togle = () => {
  console.log("add");
  modal.classList.add("open-modal");
};
// when user clicks close-btn remove .open-modal from modal-overlay
Remove = () => {
  console.log("remove");
  modal.classList.remove("open-modal");
};
