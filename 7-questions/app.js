//using selectors inside the element
const target = document.querySelectorAll(".question");
console.log(target);
target.forEach((artical) => {
  const btn = artical.querySelector(".question-btn");
  btn.addEventListener("click", () => {
    target.forEach((item) => {
      if (artical !== item) {
        item.classList.remove("show-text");
      }
    });
    artical.classList.toggle("show-text");
  });
});
// traversing the dom
