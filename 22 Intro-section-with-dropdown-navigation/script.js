"use strict";

const dropDown = document.querySelector('.drop_down-list');
const dropDown_2 = document.querySelector('.drop_down-list-2');
const arr = document.querySelector(".arr-down");
const arr_2 = document.querySelector(".arr-down2");
const El = document.getElementById("drop_btn").addEventListener("click", showMenu);
const El_2 = document.getElementById("drop_btn-2").addEventListener("click", showMenu2);
const El_3 = document.getElementById("side-bar-drop1").addEventListener("click", showSideSrop1);
const side_drop = document.querySelector(".side-drop_list_1");
const s_arr = document.querySelector(".s-arr1");
const EL_4 = document.getElementById("side-bar-drop2").addEventListener("click", showSideSrop2);
const side_drop_2 = document.querySelector('.side-drop-list_2');
const s_arr_2 = document.querySelector(".s-arr2");
const openMenu = document.querySelector('.menu-open');
const closeMenu = document.getElementById('menu-close');
const overlay = document.querySelector('.overlay');
const sideBar = document.querySelector('.side_bar');


function showMenu() {
    dropDown.classList.toggle('hidden');
    arr.classList.toggle("arr-up");
}
function showMenu2() {
    dropDown_2.classList.toggle('hidden2');
    arr_2.classList.toggle("arr-2");
}
function showSideSrop1() {
    side_drop.classList.toggle("hidden3");
    s_arr.classList.toggle("side-bar-arr");
}
function showSideSrop2() {
    side_drop_2.classList.toggle("hidden4");
    s_arr_2.classList.toggle("side-bar-arr_2");
}

// Open menu
openMenu.addEventListener('click', openSideBar);
function openSideBar() {
    sideBar.style.display = "block";
    overlay.style.display = "block";
}
// close menu
closeMenu.addEventListener('click', closeSideBar);
function closeSideBar() {
    sideBar.style.display = "none";
    overlay.style.display = "";
    overlay.style.transition = ".9s";
}