// Js
let emailField = document.querySelector('.email__text');
let startActionBtn = document.querySelector('.blue__start__action__btn');
let errorMessage = document.querySelector('.error__display');



// StartactBtn();
function checkingTheInput() {
    if (emailField.value === '') {
        emailField.style.border = '1px solid red';
        errorMessage.textContent = 'Please check your email';

        setTimeout(() => {
            emailField.style.border = '1px solid #000';
            errorMessage.textContent = '';
        }, 2000);
    }
    else {
        emailField.style.outline = '#333';
        errorMessage.textContent = '';

        setTimeout(() => {
            emailField.style.border = '1px solid #000';
            errorMessage.textContent = '';
        }, 1000);
    }
}
startActionBtn.addEventListener('click', checkingTheInput);



                // //


let sec3emailInput = document.querySelector('.section3__right__column__email__field');
let submitemailBtn = document.querySelector('.section3__right__column__submit__email__btn');
let sec3errorMessage = document.querySelector('.error_message');


function validateInput() {
    if (sec3emailInput.value === '') {
        sec3emailInput.style.border = '1px solid red';
        sec3errorMessage.textContent = 'Please check your email';

        setTimeout(() => {
            sec3emailInput.style.border = '1px solid #000';
            sec3errorMessage.textContent = '';
        }, 2000);
    }
    else {
        sec3emailInput.style.outline = '#333';
        sec3errorMessage.textContent = '';

        setTimeout(() => {
            sec3emailInput.style.border = '1px solid #000';
            sec3errorMessage.textContent = '';
        }, 1000);
    }
}
submitemailBtn.addEventListener('click', validateInput);