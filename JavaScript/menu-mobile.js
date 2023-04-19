const menuHamburger = document.querySelector('.menu-hamburger')
const headerNav = document.querySelector('.header-nav')

function activateMenu(){
    headerNav.classList.toggle('active')
    menuHamburger.classList.toggle('active')
}

menuHamburger.addEventListener('click', activateMenu)