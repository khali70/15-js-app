// ****** SELECT ITEMS **********
const form = document.querySelector(".grocery-form");
const Alert = document.querySelector(".alert");
const grocery = document.getElementById("grocery");
const submit = document.querySelector(".submit-btn");
const clear_btn = document.querySelector(".clear-btn");
const list = document.querySelector(".grocery-list");
const container = document.querySelector(".grocery-container");

// edit option
let editValue;
let edit = false;
let editID = "";

// ****** EVENT LISTENERS **********
form.addEventListener("submit", add);
clear_btn.addEventListener("click", clear);
window.addEventListener("DOMContentLoaded", displayLocal);
// ****** FUNCTIONS **********

//****Delet Item Function*****

function delitem(e) {
  const item = e.currentTarget.parentElement.parentElement;
  const id = item.dataset.id;
  list.removeChild(item);
  if (list.children.length == 0) {
    container.classList.remove("show-container");
  }
  setalert("item removed successfuly", "danger");
  reset();
  // remove from local storge
  removeFromLocalStorage(id);
}
//clear list function
function clear() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) {
    items.forEach((item) => {
      list.removeChild(item);
    });
    container.classList.remove("show-container");
    setalert("delet success", "danger");
  }
  reset();
  localStorage.removeItem("list");
}
//***** Edit Item Function ******

function edit_item(e) {
  edit = true;
  let item = e.currentTarget.parentElement.parentElement;
  editID = item.dataset.id;
  editValue = e.currentTarget.parentElement.previousElementSibling;
  grocery.value = editValue.innerHTML;
  submit.textContent = "Edit";
}

// ****** LOCAL STORAGE **********
//display Local
function displayLocal() {
  let items = fetchlocal();
  if (items.length > 0) {
    items.forEach((item) => {
      displayLocal(item.id, item.value);
    });
  }
}
//save the list to the local storge
savelocal = (id, value) => {
  const newitem = { id, value };
  let items = fetchlocal();
  console.log(items);
  items.push(newitem);
  localStorage.setItem("list", JSON.stringify(items));
};
//reove from local storge
removeFromLocalStorage = (id) => {
  let items = fetchlocal();
  items = items.filter((item) => {
    if (item.id !== id) {
      return item;
    }
  });
  localStorage.setItem("list", JSON.stringify(items));
};
// edit local storge
editLocalStorage = (editID, value) => {
  let items = fetchlocal();
  items = items.map((item) => {
    if (item.id == editID) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
};
//fetch local
fetchlocal = () => {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
};
// ****** SETUP ITEMS **********
displayLocal = (id, value) => {
  const artical = document.createElement("artical");
  let attr = document.createAttribute("data-id");
  attr.value = id;
  artical.setAttributeNode(attr);
  artical.classList.add("grocery-item");
  artical.innerHTML = `<p class="title">${value}</p>
                          <div class="btn-container">
                          <!-- edit btn -->
                          <button type="button" class="edit-btn">
                              <i class="fas fa-edit"></i>
                          </button>
                          <!-- delete btn -->
                          <button type="button" class="delete-btn">
                              <i class="fas fa-trash"></i>
                          </button>
                          </div>
                      `;
  //apaned the artical chiled
  list.appendChild(artical);
  container.classList.add("show-container");
  const editbtn = artical.querySelector(".edit-btn");
  const delbtn = artical.querySelector(".delete-btn");
  // console.log({ editbtn, delbtn });
  editbtn.addEventListener("click", edit_item);
  delbtn.addEventListener("click", delitem);
};
//add item function
function add(e) {
  e.preventDefault();
  let value = grocery.value;
  const id = new Date().getTime().toString();
  if (value && !edit) {
    displayLocal(id, value);
    //alert
    setalert("item added successfuly", "success");
    //show container
    // local storge
    savelocal(id, value);
  } else if (value && edit) {
    editValue.innerHTML = value;
    setalert("Item Edited", "success");
    //edit local storge
    editLocalStorage(editID, value);
    reset();
  } else if (!value) {
  }
  //reset function
  reset();
}
//reset to the default
reset = () => {
  //   console.log("reset");
  edit = false;
  editID = "";
  grocery.value = "";
  submit.textContent = "submit";
};
//adding the alert
setalert = (text, type) => {
  Alert.innerHTML = text;
  Alert.classList.add(`alert-${type}`);
  setTimeout(function () {
    Alert.textContent = "";
    Alert.classList.remove(`alert-${type}`);
  }, 1000);
};
