'use strict';

const btn = document.getElementById("btn");
const inptName = document.getElementById("inputName");
const inptLastName = document.getElementById("inputLastName");
const inptEmail = document.getElementById("inputEmail");
const inptPassword = document.getElementById("password");
const errName = document.querySelector(".align-right");
const errLastName = document.querySelector(".errLastName");
const errEmail = document.querySelector(".errEmail");
const errPassword = document.querySelector(".errPass");
const img1 = document.getElementById("img1");
const img2 = document.getElementById("img2");
const img3 = document.getElementById("img3");
const img4 = document.getElementById("img4");

btn.addEventListener("click", (e) => {
    if (!inptName.value) {
        errName.classList.add("showErrMessage");
        inptName.classList.add("borderErr");
        img1.style.display = "block";
    } else {
        errName.classList.remove("showErrMessage");
        inptName.classList.remove("borderErr");
        img1.style.display = "none";
    }
    if (!inptLastName.value) {
        errLastName.classList.add("showErrMessage");
        inptLastName.classList.add("borderErr");
        img2.style.display = "block";
    } else {
        errLastName.classList.remove("showErrMessage")
        inptLastName.classList.remove("borderErr");
        img2.style.display = "none";
    }
    if (!inptEmail.value) {
        errEmail.classList.add("showErrMessage");
        inptEmail.classList.add("borderErr");
        img3.style.display = "block";
    } else {
        errEmail.classList.remove("showErrMessage");
        inptEmail.classList.remove("borderErr");
        img3.style.display = "none";
        validateEmail();
    }
    if (!inptPassword.value) {
        errPassword.classList.add("showErrMessage");
        inptPassword.classList.add("borderErr");
        img4.style.display = "block";
    } else {
        errPassword.classList.remove("showErrMessage");
        inptPassword.classList.remove("borderErr");
        img4.style.display = "none";
    }
    e.preventDefault();
});


function validateEmail() {
    const regx =  /^([a-zA-Z0-9_\-\.]+)\@([gmail]){5}\.([com]{3})$/;
    if (!regx.test(inptEmail.value)) {
        errEmail.textContent = "Looks Like this is not an email";
        errEmail.classList.add("showErrMessage");
        inptEmail.classList.add("borderErr");
        img4.style.display = "block";
    } else {
        errEmail.classList.remove("showErrMessage");
        inptEmail.classList.remove("borderErr");
        img4.style.display = "none";
    }
}
