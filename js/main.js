const linksMenu = document.querySelectorAll('.header__nav__link')
const subMenu = document.querySelectorAll('.header__nav__sublinks')
const iconArrow = document.querySelectorAll('.header__nav__arrow')

const loginLinks = document.querySelectorAll('.header__navigation__login__link')
const jumbotronButtons = document.querySelectorAll('.header__jumbotron__button')
const iconBurguer = document.querySelector('.header__navigation__hamburguer')
const menuResponsive = document.querySelector('.header__navigation__nav')
const toggleMenu = document.getElementById('toggleMenu')

// DROPDOWN MENU 

linksMenu.forEach((links, index)=>{
    links.addEventListener('click', ()=>{
        subMenu[index].classList.toggle('header__nav__sublinks--active')
        iconArrow[index].classList.toggle('header__nav__arrow--rotate') 
        hiddenDropdown(index) 
    })
})

// SHOW MENU RESPONSIVE 

iconBurguer.addEventListener('click', ()=>{
    menuResponsive.classList.toggle('header__navigation__nav--active')
    if(menuResponsive.classList.contains('header__navigation__nav--active')){
        toggleMenu.setAttribute('src', 'images/icon-close.svg')
    } else {
        toggleMenu.setAttribute('src', 'images/icon-hamburger.svg')
    }
})


// LOGIN BUTTONS

loginLinks.forEach((link)=>{
    link.addEventListener('click', ()=>{
        removeActiveClass(loginLinks)
        link.classList.add('header__navigation__login--active')
    })
})

// JUMBOTRON BUTTONS

jumbotronButtons.forEach((button)=>{
    button.addEventListener('click', ()=>{
        removeActiveClass(jumbotronButtons)
        button.classList.add('header__jumbotron__button--active')
    })
})


// FUNCTIONS

function hiddenDropdown(index){
    for (let i = 0; i < subMenu.length; i++){
        if(subMenu[i].classList.contains('header__nav__sublinks--active') && index !=i){
            subMenu[i].classList.remove('header__nav__sublinks--active')
            iconArrow[i].classList.remove('header__nav__arrow--rotate')
        }
    }  
}

function removeActiveClass(links){
    links.forEach((link)=>{
        link.classList.remove('header__nav__sublinks--active', 'header__navigation__login--active', 'header__jumbotron__button--active')
    })
}
