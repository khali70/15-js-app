// Elements & variables
const Btns = document.querySelectorAll(".tab-btn");
const Content_Secs = document.querySelectorAll(".content");

Btns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const sec_id = e.currentTarget.dataset.id;
    const Content_Sec = document.getElementById(sec_id);
    Btns.forEach((non_active_btn) => {
      if (non_active_btn !== btn) {
        non_active_btn.classList.remove("active");
      } else {
        btn.classList.add("active");
      }
    });
    Content_Secs.forEach((deactivate_sec) => {
      if (deactivate_sec !== Content_Sec) {
        deactivate_sec.classList.remove("active");
      } else {
        Content_Sec.classList.add("active");
      }
    });
  });
});
/*
const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articles = document.querySelectorAll(".content");
about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    // remove selected from other buttons
    btns.forEach(function (btn) {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    articles.forEach(function (article) {
      article.classList.remove("active");
    });
    const element = document.getElementById(id);
    element.classList.add("active");
  }
});
*/
