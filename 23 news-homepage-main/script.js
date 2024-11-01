'use strict';

const openMenu = document.querySelector('.open_menu');
openMenu.addEventListener("click", opeNSideBar);
const closeMenu = document.querySelector('.close_menu');
closeMenu.addEventListener("click", closeSideBar);
const overlay = document.querySelector('.overlay');

function opeNSideBar() {
    document.querySelector('.side-bar').style.display = "block";
    overlay.style.display = "block";
    overlay.addEventListener("click", closeSideBar);
}
function closeSideBar() {
    document.querySelector('.side-bar').style.display = "none";
    overlay.style.display = "none";
}