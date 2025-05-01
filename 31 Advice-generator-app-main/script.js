'use strict';
// You can use either of the API key below.
// Advice API (1)  =>>> https://api.adviceslip.com/advice

const theJokeEl = document.getElementById("joke");
const theBtnEle = document.getElementById("generateJoke");

theBtnEle.addEventListener("click", () => {
    fetchApi();
})
const fetchApi = async () => {
    try {
        const key = await fetch("https://api.adviceslip.com/advice");
        const re = await key;
        const res = await re; 
        if (res.status === 200 && res.ok === true) {
            const le = await res.json();
            theJokeEl.textContent =`"${le.slip.advice}"`;
            
        } else {
            theJokeEl.textContent =`"Check your connection and try again"`;
        }
    } catch(e) {
        theJokeEl.textContent = `Check your connection and try again`;
        console.log(e);
    }
};

fetchApi();