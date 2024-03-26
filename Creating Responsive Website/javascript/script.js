burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
logo = document.querySelector('.logo')
menu = document.querySelector('.menu')
searchmenu = document.querySelector('.searchmenu')
heading = document.querySelector('.heading')

burger.addEventListener('click', () => {
    logo.classList.toggle('v-class-resp');
    menu.classList.toggle('v-class-resp')
    searchmenu.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
    heading.classList.toggle('heading-resp');
})