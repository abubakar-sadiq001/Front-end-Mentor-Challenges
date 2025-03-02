'use strict';
// Labeles name
const labelDay = document.getElementById("day");
const labelMonth = document.getElementById("month");
const labelYear = document.getElementById("year");
// Errs
const errDayEl = document.querySelector(".errDay");
const errMonthEl = document.querySelector(".errMonth");
const errYearEl = document.querySelector(".errYear");

// Ouput
const outputDay = document.getElementById("output-day");
const outputMonth = document.getElementById("output-month");
const outputYear = document.getElementById("output-year");

const inputDay = document.getElementById("inptDay");
const inputMonth = document.getElementById("inptMonth");
const inputYear = document.getElementById("inptYear");
const btnEl = document.getElementById("btn");


inputDay.addEventListener("input", () => {
    if (!+inputDay.value) {
        errDayEl.textContent = "This field is required";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        inputDay.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else if (+inputDay.value > 31 || +inputDay.value <= 0) {
        errDayEl.textContent = "Must be a valid day";
        labelDay.style.color = "hsl(0, 100%, 67%)";
        inputDay.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else {
        errDayEl.textContent = "";
        labelDay.style.color = "";
        inputDay.style.outline = "1px solid";
    }
});


inputMonth.addEventListener("input", () => {
    if (!+inputMonth.value) {
        errMonthEl.textContent = "This field is required";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        inputMonth.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else if (+inputMonth.value > 12 || +inputMonth.value <= 0) {
        errMonthEl.textContent = "Must be a valid Month";
        labelMonth.style.color = "hsl(0, 100%, 67%)";
        inputMonth.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else {
        errMonthEl.textContent = "";
        labelMonth.style.color = "";
        inputMonth.style.outline = "1px solid"
    }
});


inputYear.addEventListener("input", () => {
    let year = new Date().getFullYear();
    if (!+inputYear.value) {
        errYearEl.textContent = "This field is required";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        inputYear.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else if (+inputYear.value > year || +inputYear.value <= 0) {
        errYearEl.textContent = "Must be a valid year";
        labelYear.style.color = "hsl(0, 100%, 67%)";
        inputYear.style.outline = "1px solid hsl(0, 100%, 67%)";
    } else {
        errYearEl.textContent = "";
        labelYear.style.color = "";
        inputYear.style.outline = "1px solid"
    }
});

btnEl.addEventListener("click", calcAge);
document.getElementById("myForm").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        calcAge();
    }
})
function calcAge() {
    if (!+inputMonth.value || !+inputDay.value || !+inputYear.value) {
        alert("error");
    } else {
        let birthdayObj = new Date(`${inputMonth.value}/${inputDay.value}/${inputYear.value}`);
        console.log(birthdayObj)
        let birthObj = new Date(birthdayObj);
        let ageDifMill = Date.now() - birthObj;
        let ageDate = new Date(ageDifMill);
        let years = ageDate.getUTCFullYear() - 1970;
        let months = ageDate.getUTCMonth();
        let day = ageDate.getUTCDay();

        outputYear.textContent = years;
        outputMonth.textContent = months;
        outputDay.textContent = day;
    }
}