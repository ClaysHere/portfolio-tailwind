// NAV-FIX
window.onscroll = function() {
    const header = document.querySelector('header');
    const fixNav = header.offsetTop;

    if(window.pageYOffset > fixNav) {
        header.classList.add('nav-fix');
    } else {
        header.classList.remove('nav-fix');
    }
};

// BURGER
const burger = document.querySelector('#burger');
const navMenu = document.querySelector('#nav-menu')

burger.addEventListener('click', function() {
    burger.classList.toggle('burger-active');
    navMenu.classList.toggle('hidden');
});