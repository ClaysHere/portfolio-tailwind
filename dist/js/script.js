// NAV-FIX
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixNav = header.offsetTop;
  const top = document.querySelector("#to-top");

  if (window.pageYOffset > fixNav) {
    header.classList.add("nav-fix");
    top.classList.remove("hidden");
    top.classList.add("flex");
  } else {
    header.classList.remove("nav-fix");
    top.classList.remove("flex");
    top.classList.add("hidden");
  }
};

// BURGER
const burger = document.querySelector("#burger");
const navMenu = document.querySelector("#nav-menu");

burger.addEventListener("click", function () {
  burger.classList.toggle("burger-active");
  navMenu.classList.toggle("hidden");
});

window.addEventListener("click", function (e) {
  if (e.target !== burger && e.target !== navMenu) {
    burger.classList.remove("burger-active");
    navMenu.classList.add("hidden");
  }
});

// DARK MODE
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add('dark');
    localStorage.theme = 'dark';
  } else {
    html.classList.remove('dark');
    localStorage.theme = 'light';
  }
});

if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    darkToggle.checked = true;
  } else {
    darkToggle.checked = false;
  }