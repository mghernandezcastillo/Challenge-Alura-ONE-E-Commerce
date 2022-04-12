const check = document.getElementById("check");
const searchIcon = document.querySelector(".header__icon");
const search = document.querySelector(".header__search");
const nav = document.querySelector(".header__nav");

// all the li elements in the mobile menu
const mobilemenuItems = document.querySelectorAll("#menu li");

mobilemenuItems.forEach(function (item) {
  item.addEventListener("click", function () {
    check.checked = !check.checked;
  });
});

searchIcon.addEventListener("click", function () {
  searchIcon.classList.toggle("header__icon--hidden");
  nav.classList.toggle("header__nave--displayinherit");
  search.classList.toggle("header__search--show");
});
