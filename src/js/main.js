const search = document.querySelector('.header__button--search'),
    headerMenu = document.querySelector('.header__menu-wrapper'),
    headerContact = document.querySelector('.header__contact'),
    headerConsultation = document.querySelector('.header__button-consultation'),
    headerEye = document.querySelector('.header__button--eye'),
    searchWrap = document.querySelector('.search__wrap'),
    headerSearchCross = document.querySelector('.search__cross'),
    logo = document.querySelector('.logo'),
    screenWidth = document.documentElement.clientWidth;

search.addEventListener('click', (e)=>{
    e.preventDefault();
    search.classList.toggle('none');
    headerMenu.classList.toggle('none');
    headerContact.classList.toggle('none');
    headerConsultation.classList.toggle('none');
    headerEye.classList.toggle('none');
    searchWrap.classList.toggle('active');

    if (screenWidth < 600 && searchWrap.classList.contains('active')) {
        logo.classList.add('none');
    }
});

headerSearchCross.addEventListener('click', ()=>{
    search.classList.remove('none');
    headerMenu.classList.remove('none');
    headerContact.classList.remove('none');
    headerConsultation.classList.remove('none');
    headerEye.classList.remove('none');
    searchWrap.classList.remove('active');

    if (screenWidth < 600 && !searchWrap.classList.contains('active')) {
        logo.classList.remove('none');
    }
})



