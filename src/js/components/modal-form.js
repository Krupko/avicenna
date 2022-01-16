const openPopup = document.querySelector('.header__button-consultation');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__btn-close');

openPopup.addEventListener('click', function(e){
  e.preventDefault();
  popup.classList.add('active');
})
popupClose.addEventListener('click', ()=>{
  popup.classList.remove('active');
})

const regTel = /^(\+7|7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
    regNumbers = /[0-9]/,
    regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    regLetters = /[А-Яа-яЁё]/;

const inputName = document.querySelector('.js-input-name');
const inputPhone = document.querySelector('.js-input-phone');
const inputEmail = document.querySelector('.js-input-email');
const popupButton = document.querySelector('.popup__button');
const popupInput = document.querySelector('.popup__input');
const homeButton = document.querySelector('.form__home-button');
const homeInputName = document.querySelector('.form__user-name');
const homeUserPhone = document.querySelector('.form__user-phone');
const inputUserName = document.querySelector('#userName');
const homeInputPhone = document.querySelector('#phone');

// валидация формы на главной странице
homeButton.addEventListener('click', (e) => {
  e.preventDefault();
  if(!regLetters.test(inputUserName.value)){
    homeInputName.classList.add('error-input');
  }else{
    homeInputName.classList.remove('error-input');
  }
  if (!regTel.test(homeInputPhone.value)) {
    homeUserPhone.classList.add('error-input');
  } else {
    homeUserPhone.classList.remove('error-input');
  }
});



// валидация формы модала
popupButton.addEventListener('click', (e) => {
  e.preventDefault();

  if (!regLetters.test(inputName.value)) {
    // popupInput.classList.add('error');
    console.log('NO');
  } else {
    // popupInput.classList.remove('error');
    console.log('YES');
  }
  if (!regTel.test(inputPhone.value)) {
    console.log('NO');
  } else {
    console.log('YES');
  }
  if (!regEmail.test(inputEmail.value)) {
    console.log('NO');
  } else {
    console.log('YES');
  }
});

// console.log(inputName.value);