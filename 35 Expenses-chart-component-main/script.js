'use strict';

const all = document.querySelectorAll('.all');
const allLines = document.querySelectorAll('.lines');

allLines.forEach(line => {
    line.addEventListener('mouseover', () => {
        if (line.classList.contains('monday')) {
            all.forEach(price => {
                if (price.classList.contains('m-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('tuesday')) {
            all.forEach(price => {
                if (price.classList.contains('t-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('wedenesday')) {
            all.forEach(price => {
                if (price.classList.contains('w-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('thursday')) {
            all.forEach(price => {
                if (price.classList.contains('thu-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('friday')) {
            all.forEach(price => {
                if (price.classList.contains('f-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('sartuday')) {
            all.forEach(price => {
                if (price.classList.contains('s-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        } else if (line.classList.contains('sunday')) {
            all.forEach(price => {
                if (price.classList.contains('sun-price')) {
                        price.setAttribute('id', "show");
                } else {
                    price.setAttribute('id', "");
                }
            })
        }
    })
    line.addEventListener('mouseout', () => {
        if (line.classList.contains('monday')) {
            all.forEach(price => {
                if (price.classList.contains('m-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        } else if (line.classList.contains('tuesday')) {
            all.forEach(price => {
                if (price.classList.contains('t-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        } else if (line.classList.contains('wedenesday')) {
            all.forEach(price => {
                if (price.classList.contains('w-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        } else if (line.classList.contains('thursday')) {
            all.forEach(price => {
                if (price.classList.contains('thu-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        } else if (line.classList.contains('friday')) {
            all.forEach(price => {
                if (price.classList.contains('f-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        } else if (line.classList.contains('sunday')) {
            all.forEach(price => {
                if (price.classList.contains('sun-price')) {
                        price.removeAttribute('id', "show");
                }
            })
        }
    })
})