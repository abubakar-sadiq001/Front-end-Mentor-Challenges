'use strict';

const btnEl = document.getElementById("notify");
const inputEl = document.getElementById("userEmail");
const formEl = document.querySelector(".wrapper");
const errEl = document.getElementById("err");

btnEl.addEventListener("click", (e) => {
    if (!inputEl.value) {
        alert("type your email");
    } else {
        validateEmail();
    }
    e.preventDefault();
})
formEl.addEventListener("keypress", (x) => {
    if (x.key === "Enter") {
        validateEmail();
    }
    x.preventDefault();
})
function validateEmail() {
    const regex = /^([a-zA-Z0-9_\-\.]+)\@([a-z])+\.([com]{3})$/;
    if (!regex.test(inputEl.value)) {
        console.log("doesn't match");
        inputEl.style.outline = "1px solid hsl(354, 100%, 66%)";
        errEl.style.display = 'block';
    } else {
        errEl.style.display = "none";
        console.log("It macthes the search");
        inputEl.style.outline = "";
    }
}