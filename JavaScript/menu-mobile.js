const menuHamburger = document.querySelector('.menu-hamburger')
const headerNav = document.querySelector('.header-nav')
const backShadow = document.querySelector('.backshadow')

function activateMenu(){
    headerNav.classList.toggle('active')
    menuHamburger.classList.toggle('active')
    backShadow.classList.toggle('active')
}

menuHamburger.addEventListener('click', activateMenu)