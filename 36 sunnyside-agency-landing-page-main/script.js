'use strict';

document.querySelector('.menu-open').addEventListener('click', () => {
    console.log('CLICKED');
    document.querySelector('.menu-bar').classList.toggle('showMenu');
})