'use strict'

const menuBtn = document.getElementsByClassName('menu__btn')[0]
const menuDrop = document.getElementsByClassName('menu__dropdown')[0]
const menuItems = menuDrop.children[0].children

let menuToggler = () => {
    menuBtn.removeEventListener('click', menuToggler);
    const isVisible = isMenuVisible();
    for (let i = 0; i < menuItems.length; i++) {
        setTimeout(() => {
            if (isVisible) {
                hideMenu(i);
            } else {
                showMenu(i);
            }
        }, i * 100)
    }

    setTimeout(() => {
        menuBtn.addEventListener('click', menuToggler);
    }, menuItems.length * 100)
}

menuBtn.addEventListener('click', menuToggler);

function isMenuVisible() {
    return menuItems[0].classList.contains('show-menu') && !menuItems[0].classList.contains('hide-menu')
}

function hideMenu(i) {
    let menuItem = menuItems[menuItems.length - 1 - i]
    menuItem.classList.add('hide-menu')
    menuItem.classList.remove('show-menu')
}

function showMenu(i) {
    let menuItem = menuItems[i]
    menuItem.classList.remove('hide-menu')
    menuItem.classList.add('show-menu')
    if (menuItem.classList.contains('menu__item--hidden')) {
        menuItem.classList.remove('menu__item--hidden')
    }
}