const menu = [
  {
    id: 1,
    title: "buttermilk pancakes",
    category: "breakfast",
    price: 15.99,
    img: "./images/item-1.jpeg",
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: "diner double",
    category: "lunch",
    price: 13.99,
    img: "./images/item-2.jpeg",
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: "godzilla milkshake",
    category: "shakes",
    price: 6.99,
    img: "./images/item-3.jpeg",
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: "country delight",
    category: "breakfast",
    price: 20.99,
    img: "./images/item-4.jpeg",
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: "egg attack",
    category: "lunch",
    price: 22.99,
    img: "./images/item-5.jpeg",
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: "oreo dream",
    category: "shakes",
    price: 18.99,
    img: "./images/item-6.jpeg",
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: "bacon overflow",
    category: "breakfast",
    price: 8.99,
    img: "./images/item-7.jpeg",
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: "american classic",
    category: "lunch",
    price: 12.99,
    img: "./images/item-8.jpeg",
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: "quarantine buddy",
    category: "shakes",
    price: 16.99,
    img: "./images/item-9.jpeg",
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];
const continer = document.querySelector(".section-center");
window.addEventListener("DOMContentLoaded", () => {
  console.log("bake and shake");
  display_categories();
  filter_categories();
});
// filter the displied offers by catigeroy
filter_categories = () => {
  const catbtns = document.querySelectorAll(".filter-btn");
  catbtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      console.log(e.currentTarget.dataset.id, "clicked");
      let category = e.currentTarget.dataset.id;
      const categoryarr = menu.filter((item) => {
        if (item.category == category) {
          return item;
        }
      });
      console.log(categoryarr);
      if (category == "all") {
        console.log("all category displaied");
        display_items(menu);
      } else {
        console.log(category, "category displaied");
        display_items(categoryarr);
      }
    });
  });
};

// diplay the categories
display_categories = () => {
  let btns = menu.reduce(
    (value, menu_object) => {
      if (!value.includes(menu_object.category)) {
        value.push(menu_object.category);
      }
      return value;
    },
    ["all"]
  );
  console.log(btns);
  const btns_cotainer = document.querySelector(".btn-container");
  cats = btns
    .map((cat) => {
      return `<button type="button" class="filter-btn" data-id=${cat}>${cat}</button>`;
    })
    .join("");
  btns_cotainer.innerHTML = cats;
};

// display the offers
display_items = (arr) => {
  console.log("display_items");
  let diplayed_menu_items = arr
    .map((item) => {
      return ` <article class="menu-item">
                <img src=${item.img} alt="menu item" class="photo" />
                <div class="item-info">
                  <header>
                    <h4>${item.title}</h4>
                    <h4 class="price">$${item.price}</h4>
                  </header>
                  <p class="item-text">
                    ${item.desc}
                  </p>
                </div>
              </article>`;
    })
    .join("");

  continer.innerHTML = diplayed_menu_items;
};
