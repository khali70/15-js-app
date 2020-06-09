// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport.
// pageYOffset is a read - only window property that returns the number of pixels the document has been scrolled vertically.
// slice extracts a section of a string without modifying original string
//offsetTop - A Number, representing the top position of the element, in pixels

// ********** set date ************
const date = document.getElementById("date");

date.innerHTML = new Date().getFullYear();
// ********** close links ************
const ToggleBtn = document.querySelector(".nav-toggle");
const linksContainer = document.querySelector(".links-container");
const Links = document.querySelector(".links");
ToggleBtn.addEventListener("click", () => {
  console.log("burger cliclked", ToggleBtn);
  let links_container_height = linksContainer.getBoundingClientRect().height;
  let links_height = Links.getBoundingClientRect().height;
  //   console.log(links_container_height, links_height);
  if (links_container_height == 0) {
    // console.log(links_container_height, links_height);
    linksContainer.style.height = `${links_height}px`;
  } else {
    // console.log(links_container_height, links_height);
    linksContainer.style.height = 0;
  }
});
// ********** fixed navbar ************
const navbar = document.getElementById("nav");
const top_link = document.querySelector(".top-link");
// const about = document.getElementById("about");
let nav_height = navbar.getBoundingClientRect().height;

window.addEventListener("scroll", () => {
  //   console.log(pageYOffset, navbar.getBoundingClientRect().height);
  // nav_height
  if (pageYOffset > 0) {
    navbar.classList.add("fixed-nav");
  } else {
    navbar.classList.remove("fixed-nav");
  }
  if (pageYOffset > 500) {
    top_link.classList.add("show-link");
  } else {
    top_link.classList.remove("show-link");
  }
});
// ********** smooth scroll ************
const scrol_links = document.querySelectorAll(".scroll-link");
scrol_links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let links_height = Links.getBoundingClientRect().height;
    nav_height = navbar.getBoundingClientRect().height;
    const fixedNav = navbar.classList.contains("fixed-nav");
    const id = e.currentTarget.getAttribute("href").slice(1);
    const element = document.getElementById(id);
    let postion = element.offsetTop - nav_height;
    console.log("before", postion);
    if (!fixedNav) {
      console.log("fixed", fixedNav);
      postion = postion - nav_height;
      console.log("fixed", postion);
    }
    if (nav_height > 82) {
      postion = postion + links_height;
    }
    window.scrollTo({
      left: 0,
      top: postion,
    });
    linksContainer.style.height = 0;
  });
});

// select links
