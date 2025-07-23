"use strict";

const inputElement = document.querySelector(".email");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

let small_details = document.querySelector(".overlay");
let email_box = document.querySelector(".email_box");
let mutuals = document.querySelectorAll(".mutual");

let viewmore_list = document.querySelectorAll(".viewmore");
console.log(viewmore_list);
let viewless_list = document.querySelectorAll(".viewless");
let bot_section_list = document.querySelectorAll(".bot");

// Email test
document.querySelector(".submit_btn").addEventListener("click", function (e) {
  e.preventDefault();
  console.log("clicked");
  console.log(inputElement.value);
  let inputValue = inputElement.value;
  if (inputValue === "") {
    alert("The form has not been filled!");
  } else if (regex.test(inputValue) === false) {
    alert("wrong email format");
  } else {
    console.log(regex.test(inputValue));
    alert("The form has been filled");
    small_details.classList.remove("hide");
    email_box.classList.add("hide");
  }
});

// Viewmore/viewless

mutuals.forEach((mutual) => {
  mutual.addEventListener("mouseover", function () {
    hover(mutual);
  });
});

for (let i = 0; i < 6; i++) {
  // viewmore function
  viewmore_list[i].addEventListener("click", function () {
    console.log("viewmore clicked");
    bot_section_list[i].classList.remove("hide");
    viewmore_list[i].classList.add("hide");
    viewless_list[i].classList.remove("hide");
  });

  // Vieless function
  viewless_list[i].addEventListener("click", function () {
    console.log("viewless clicked");
    bot_section_list[i].classList.add("hide");
    viewmore_list[i].classList.remove("hide");
    viewless_list[i].classList.add("hide");
  });

  // Buttons disappearing when hover
  mutuals[i].addEventListener("mouseout", function () {
    viewmore_list[i].classList.add("hide");
  });
}

// No viewmore if viewless and contents are shown
function hover(item) {
  let viewmore = item.querySelector(".viewmore");
  let viewless = item.querySelector(".viewless");
  if (viewless.classList.contains("hide") === true) {
    viewmore.classList.remove("hide");
  }
}
