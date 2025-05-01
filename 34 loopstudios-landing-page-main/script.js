'use strict';

const sideMenu =  document.querySelector('.sideMenu');
const closeIcon =  document.querySelector('.close');
document.querySelector('.open').addEventListener('click', () => {
    sideMenu.classList.add('showmenu');
    document.body.style.overflow = 'hidden';
    closeIcon.addEventListener('click', () => {
        sideMenu.classList.remove('showmenu');
        document.body.style.overflow = '';
    })
})

// Intersection observer API
const myContainer = document.querySelector('.container');
const articleWrapper = document.querySelector('.article-wrapper');
console.log(myContainer);

const options = {
    threshold: 0.4,
    // rootMargin: '-300px'
}

const callback = (entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
                const myArticles = document.querySelector('.second-sec article');
                setTimeout(function() {
                    myArticles.style.opacity = '1';
                    myArticles.style.transform = 'translateX(0)';
                    myArticles.style.transition = 'all .9s';
                }, 100)
        }
        console.log(entry);
    })
    
}

const observer = new IntersectionObserver(callback, options);
observer.observe(articleWrapper);