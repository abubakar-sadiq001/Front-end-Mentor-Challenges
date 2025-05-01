'use strict';

// Selecting the inputs
const nameF = document.getElementById("fName");
const nameL = document.getElementById("lName");
const email = document.getElementById("Email");
const rd1 = document.getElementById("rdio1");
const rd2 = document.getElementById("rdio2");
const textArea = document.getElementById("txt");
const check = document.getElementById("check");
const btn = document.getElementById("submitBtn");
// Err messages
const errName = document.querySelector(".errName");
const errLastName = document.querySelector(".errLastName");
const errEmail = document.querySelector(".errEmail");
const errRadio = document.querySelector(".errRadio");
const errText = document.querySelector(".errText");
const errCheck = document.querySelector(".errCheck");
// Radio warpper
const rdio1Wrapper = document.querySelector(".rdio1Wrapper1");
const rdio2Wrapper = document.querySelector(".rdio1Wrapper2");
// Sucess message 
const sucessWrapper = document.querySelector(".sucess-01--messg-container");
// All entries
const allEntries = [nameF, nameL, email, rd1, rd2, textArea, check, btn];

btn.addEventListener('click', (e) => {
    if (!nameF.value) {
        errName.style.display = "block";
        nameF.style.border = "1px red solid";
    } else {
        errName.style.display = "";
        nameF.style.border = "";
    }
    // Lastname validation
    if (!nameL.value) {
        errLastName.style.display = "block";
        nameL.style.border = "1px red solid";
    } else {
        errLastName.style.display = "";
        nameL.style.border = "";
    }
    // Email validation
    // const regex = /^([a-zA-Z0-9_\-\.]+)\@(gmail.com){1}$/;
    const regex = /^([a-zA-Z0-9_\-\.]+)\@[A-Za-z]+(.com){1}$/;
    if (!regex.test(email.value)) {
        errEmail.style.display = "block";
        email.style.border = "1px red solid"
        errEmail.textContent = "Please enter a valid address";
        if (!email.value) {
            errEmail.textContent = "This field is required";
        }
    } else {
        errEmail.style.display = "";
        email.style.border = "";
        
    }
    // radion type validation
    rd1.checked || rd2.checked ? errRadio.style.display = "none" : errRadio.style.display = "block";
    // Textarea validation
    if (textArea.value === "") {
        errText.style.display = "block";
        textArea.style.border = "1px red solid";
    } else {
        errText.style.display = "none";
        textArea.style.border = "";
    }
    // Checkbox validation
    !check.checked ? errCheck.style.display = "block" : errCheck.style.display = "none";

    if (textArea.value && check.checked) {
        if (nameF.value && nameL.value) {
            if (regex.test(email.value)) {
                if (rd1.checked || rd2.checked) {
                    setTimeout(() => {
                        sucessWrapper.style.display = "block";
                    }, 700)
                    setTimeout(() => {
                        sucessWrapper.style.display = "none";
                    }, 3005);
                    setTimeout(() => {
                        location.reload();
                    }, 5000);
                }
            }
        }
    }
    e.preventDefault();
});

rdio1Wrapper.addEventListener("click", () => {
    rdio1Wrapper.style.backgroundColor = "hsl(148, 38%, 91%)";
    rdio1Wrapper.style.border = "1px solid hsl(169, 82%, 27%)";
    rdio2Wrapper.style.backgroundColor = "";
    rdio2Wrapper.style.border = "";
})
rdio2Wrapper.addEventListener("click", () => {
    rdio2Wrapper.style.backgroundColor = "hsl(148, 38%, 91%)";
    rdio2Wrapper.style.border = "1px solid hsl(169, 82%, 27%)";
    rdio1Wrapper.style.backgroundColor = "";
    rdio1Wrapper.style.border = "";
})