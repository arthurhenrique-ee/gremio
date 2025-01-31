let header = document.querySelector('header')
let menuMobile = document.querySelector('.menu-mobile')
let btnMenu = document.querySelector('.btn-menu')
let line1 = document.querySelector('.line1')
let line2 = document.querySelector('.line2')

document.addEventListener('scroll', ()=> {
    let scrollTop = window.scrollY

    if (scrollTop > 0) {
        header.classList.add('scroll')
    } else {
        header.classList.remove('scroll')
    }
})

btnMenu.addEventListener('click', ()=> {
    menuMobile.classList.toggle('abrir')
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
})

function linkMenu() {
    menuMobile.classList.toggle('abrir')
    line1.classList.toggle('ativo1')
    line2.classList.toggle('ativo2')
}