let changeLanguage = document.querySelector('.header__btn');
let languageBlock = document.querySelector('.header__btns-list');
let popUp = document.querySelector('.popup');
let popUpBtn = document.querySelector('.header__link');
let closePopUp = document.querySelector('.popup__item-close');
let popUpBg = document.querySelector('.bg-popup');
let burger = document.querySelector('.burger');
let nav = document.querySelector('.header-nav');
let navCatalog = document.querySelector('.catalog__list');
let body = document.body;
let header = document.querySelector('.header');
let headerHeight = header.offsetHeight;
document.querySelector(':root').style.setProperty('--header-height', `${headerHeight}px`);

burger.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    nav.classList.toggle('nav--visible');
    navCatalog.classList.toggle('nav--visible');
    burger.classList.toggle('burger--active');
});

changeLanguage.addEventListener('click', () => {
    languageBlock.classList.toggle('visually');
});

popUpBtn.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    popUp.classList.toggle('animdrop');
    popUpBg.classList.toggle('animdrop-bg');
}); 

closePopUp.addEventListener('click', () => {
    body.classList.toggle('stop-scroll');
    popUp.classList.toggle('animdrop');
    popUpBg.classList.toggle('animdrop-bg');
    
});


function openTabs(evt, cityName) {
    evt.preventDefault();
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" visact", "");
    }

    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " visact";
}





