// local reviews data
const reviews = [
  {
    id: 1,
    name: "susan smith",
    job: "web developer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    text:
      "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 2,
    name: "anna johnson",
    job: "web designer",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883409/person-2_np9x5l.jpg",
    text:
      "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    name: "peter jones",
    job: "intern",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    text:
      "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 4,
    name: "bill anderson",
    job: "the boss",
    img:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg",
    text:
      "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic. ",
  },
];
// select the elements
const pervBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const randomBtn = document.querySelector(".random-btn");
const img = document.querySelector("#person-img");
const author = document.querySelector("#author");
const job = document.querySelector("#job");
const info = document.querySelector("#info");
let index = 0;
//adding the EventListeners
nextBtn.addEventListener("click", () => changeslide("next"));
pervBtn.addEventListener("click", () => changeslide("prev"));
randomBtn.addEventListener("click", () => changeslide("rendom"));
// the main function
changeslide = (event) => {
  console.log(event);
  switch (event) {
    case "next":
      index++;
      console.log("inc the indx => " + index);
      break;
    case "prev":
      index--;
      console.log("dec the index => " + index);
      break;
    default:
      index = Ran(reviews.length);
      console.log("random index => " + index);
  }
  if (index > 3) {
    index = 0;
  } else if (index < 0) {
    index = 3;
  }
  dispaly_review(index);
};
dispaly_review = (index) => {
  console.log("fire fun diplay_review at index => " + index);
  img.src = reviews[index].img;
  author.textContent = reviews[index].name;
  job.textContent = reviews[index].job;
  info.textContent = reviews[index].text;
};
function Ran(max) {
  console.log("random value ");
  return Math.floor(Math.random() * Math.floor(max));
}
