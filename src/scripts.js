'use strict'

const MENU_BTN = document.getElementsByClassName('menu__btn')[0]
const MENU_DROP = document.getElementsByClassName('menu__dropdown')[0]
const MENU_ITEMS = MENU_DROP.children[0].children

let menuToggler = () => {
    MENU_BTN.removeEventListener('click', menuToggler);
    const isVisible = isMenuVisible();
    for (let i = 0; i < MENU_ITEMS.length; i++) {
        setTimeout(() => {
            if (isVisible) {
                hideMenu(i);
            } else {
                showMenu(i);
            }
        }, i * 100)
    }

    setTimeout(() => {
        MENU_BTN.addEventListener('click', menuToggler);
    }, MENU_ITEMS.length * 100)
}

MENU_BTN.addEventListener('click', menuToggler);

function isMenuVisible() {
    return MENU_ITEMS[0].classList.contains('show-menu') && !MENU_ITEMS[0].classList.contains('hide-menu')
}

function hideMenu(i) {
    let menuItem = MENU_ITEMS[MENU_ITEMS.length - 1 - i]
    menuItem.classList.add('hide-menu')
    menuItem.classList.remove('show-menu')
}

function showMenu(i) {
    let menuItem = MENU_ITEMS[i]
    menuItem.classList.remove('hide-menu')
    menuItem.classList.add('show-menu')
    if (menuItem.classList.contains('menu__item--hidden')) {
        menuItem.classList.remove('menu__item--hidden')
    }
}