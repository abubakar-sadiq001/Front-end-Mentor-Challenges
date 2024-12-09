'use strict';

function redirect() {
    return window.location.href = "popUp.html"
}
const errText = document.querySelector(".errText");
const input = document.getElementById("myEmail");
const button = document.getElementById("myBtn");
button.onclick = (e) => {
    !input.value ? '' : valdateEmail();
    input.value = "";
    e.preventDefault();
}

function valdateEmail() {
    const regex = /^([a-zA-Z0-9_\-\.]+)\@(gmail.com){1}$/;
    if (!regex.test(input.value)) {
        errText.style.display = "block";
        input.style.outline = "1px red solid";   
        input.style.backgroundColor = "hsl(4, 100%, 91%, 0.5)";
    } else {
        input.style.outline = "1px #000 solid";   
        input.style.backgroundColor = "";
        errText.style.display = "none";
        redirect();
    }
}