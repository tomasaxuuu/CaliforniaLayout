const buttonSignUp = document.querySelector('.button-devices');
let inputField =  document.querySelector('.input-devices');
buttonSignUp.addEventListener("click", function () {
    alert(`Мы отправим письмо на вашу почту: ${inputField.value}`);
    inputField.value = '';
});