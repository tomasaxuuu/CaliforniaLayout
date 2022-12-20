const buttonSignUp = document.querySelector('.button-devices');
let inputField =  document.querySelector('.input-devices');
const swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    navigation : {
        nextEl: ".arrow-right",
        prevEl: ".arrow-left",
    },
    loop: true,
});
buttonSignUp.addEventListener("click", function () {
    alert(`Мы отправим письмо на вашу почту: ${inputField.value}`);
    inputField.value = '';
});

const burgerImg = document.querySelector(".burger-img");
const nav = document.querySelector(".nav-menu");
const burgerBtn = document.querySelector('.burger-menu');
const liItem = document.querySelector('.nav-ul');

burgerBtn.addEventListener("click", function() {
    if(nav.classList.toggle('open')) {
        burgerBtn.style = 'display: none';
    } else {
        burgerBtn.style = 'display: flex';
    }
    
});

liItem.addEventListener("click", function() {
    if(nav.classList.toggle('open')) {
        burgerBtn.style = 'display: none';
    } else {
        burgerBtn.style = 'display: flex';
    }
});
