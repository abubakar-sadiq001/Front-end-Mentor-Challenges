'use strict';

// Answrs
const ans1 = document.querySelector(".hidden1");
const ans2 = document.querySelector(".hidden2");
const ans3 = document.querySelector(".hidden3");
const ans4 = document.querySelector(".hidden4");
// Spans
const span1 = document.getElementById("span1");
const span2 = document.getElementById("span2");
const span3 = document.getElementById("span3");
const span4 = document.getElementById("span4");
// Questions
const question1 = document.querySelector(".question1");
const question2 = document.querySelector(".question2");
const question3 = document.querySelector(".question3");
const question4 = document.querySelector(".question4");




question1.addEventListener("click", toggleAnswr1);
function toggleAnswr1() {
    ans1.classList.toggle("block1");
    span1.lastChild.classList.toggle("minusIcon");
    //
    ans2.classList.remove("block2");
    span2.lastChild.classList.remove("minusIcon"); 
    ans3.classList.remove("block3");
    span3.lastChild.classList.remove("minusIcon");
    ans4.classList.remove("block4");
    span4.lastChild.classList.remove("minusIcon");
}


question2.addEventListener("click", toggleAnswr2);
function toggleAnswr2() {
    ans2.classList.toggle('block2');
    span2.lastChild.classList.toggle("minusIcon");
    // 
    ans1.classList.remove("block1");
    span1.lastChild.classList.remove("minusIcon");
    ans3.classList.remove("block3");
    span3.lastChild.classList.remove("minusIcon");
    ans4.classList.remove("block4");
    span4.lastChild.classList.remove("minusIcon");
}


question3.addEventListener("click", toggleAnswr3);
function toggleAnswr3() {
    ans3.classList.toggle('block3');
    span3.lastChild.classList.toggle("minusIcon");
    // 
    ans1.classList.remove("block1");
    span1.lastChild.classList.remove("minusIcon");
    ans2.classList.remove("block2");
    span2.lastChild.classList.remove("minusIcon");
    ans4.classList.remove("block4");
    span4.lastChild.classList.remove("minusIcon");
}


question4.addEventListener("click", toggleAnswr4);
function toggleAnswr4() {
    ans4.classList.toggle('block4');
    span4.lastChild.classList.toggle("minusIcon");
    // 
    ans1.classList.remove("block1");
    span1.lastChild.classList.remove("minusIcon");
    ans2.classList.remove("block2");
    span2.lastChild.classList.remove("minusIcon");
    ans3.classList.remove("block3");
    span3.lastChild.classList.remove("minusIcon");
}