'use strict';

const billInput = document.querySelector('.inputBill');
const allPercentages = document.querySelectorAll('.allPercent');
const numberOfFolks = document.querySelector('.inputPeople');
const errMsg = document.querySelector('.err-msg');
// Result side
let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-amount');
const resetBtn = document.getElementById('reset').addEventListener('click', reset);
// Percentages
const fivePercent = document.querySelector('.five');
const tenPercent = document.querySelector('.ten');
const fifteenPercent = document.querySelector('.fifteen');
const twentyfivePercent = document.querySelector('.twentyfive');
const fiftyPercent = document.querySelector('.fifty');
const customPercent = document.querySelector('.custom');

// Checking and validating number of people input
function perPerson(p) {
    numberOfFolks.addEventListener('input', (e) => {
        if (+numberOfFolks.value < 1) {
            errMsg.classList.add('folksNum-show-err');
            numberOfFolks.style.border = 'solid red 3px';
            numberOfFolks.value = '';
        } else {
            errMsg.classList.remove('folksNum-show-err');
            numberOfFolks.style.border = '';
        }
        e.preventDefault();
    })
    return p;
}
// Custom input event handler
function  customInputEvent(custom) {
    customPercent.addEventListener('input', () => {
        customPercent;
    })
    return custom;
}


function calculateTip() {
    billInput.addEventListener('keyup', () => {
        totalAmount.textContent = billInput.value === '' 
        ? '$0.00' 
        : `$${parseFloat(billInput.value).toFixed(2)}`;
    });
    numberOfFolks.addEventListener('input', () => {

    })
   
    allPercentages.forEach(function(perc) {
        perc.addEventListener('click', (e) => {
            if (perc.classList.contains('five')) {
                fivePercent.classList.add('active');
                tenPercent.classList.remove('active');
                fifteenPercent.classList.remove('active');
                twentyfivePercent.classList.remove('active');
                fiftyPercent.classList.remove('active');

                const myTipCalc1 = () => {
                    let calcBill = +billInput.value * parseFloat(fivePercent.textContent) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc1();

                billInput.addEventListener('keyup', () => {
                    myTipCalc1();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc1();
                })
            } else if (perc.classList.contains('ten')) {
                tenPercent.classList.add('active');
                fivePercent.classList.remove('active');
                fifteenPercent.classList.remove('active');
                twentyfivePercent.classList.remove('active');
                fifteenPercent.classList.remove('active');

                const myTipCalc2 = () => {
                    let calcBill = +billInput.value * parseFloat(tenPercent.textContent) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc2();

                billInput.addEventListener('keyup', () => {
                    myTipCalc2();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc2();
                })
            } else if (perc.classList.contains('fifteen')) {
                fifteenPercent.classList.add('active');
                fivePercent.classList.remove('active');
                tenPercent.classList.remove('active');
                twentyfivePercent.classList.remove('active');
                fiftyPercent.classList.remove('active');

                const myTipCalc3 = () => {
                    let calcBill = +billInput.value * parseFloat(fifteenPercent.textContent) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc3();

                billInput.addEventListener('keyup', () => {
                    myTipCalc3();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc3();
                })
            } else if (perc.classList.contains('twentyfive')) {
                twentyfivePercent.classList.add('active');
                fivePercent.classList.remove('active');
                tenPercent.classList.remove('active');
                fifteenPercent.classList.remove('active');
                fiftyPercent.classList.remove('active');

                const myTipCalc4 = () => {
                    let calcBill = +billInput.value * parseFloat(twentyfivePercent.textContent) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc4();

                billInput.addEventListener('keyup', () => {
                    myTipCalc4();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc4();
                })
            } else if (perc.classList.contains('fifty')) {
                fiftyPercent.classList.add('active');
                fivePercent.classList.remove('active');
                tenPercent.classList.remove('active');
                fifteenPercent.classList.remove('active');
                twentyfivePercent.classList.remove('active');

                const myTipCalc5 = () => {
                    let calcBill = +billInput.value * parseFloat(fiftyPercent.textContent) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc5();

                billInput.addEventListener('keyup', () => {
                    myTipCalc5();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc5();
                })
            } else if (perc.classList.contains('custom')) {
                fiftyPercent.classList.remove('active');
                fivePercent.classList.remove('active');
                tenPercent.classList.remove('active');
                fifteenPercent.classList.remove('active');
                twentyfivePercent.classList.remove('active');

                const myTipCalc6 = () => {
                    let calcBill = +billInput.value * parseFloat(customInputEvent(+customPercent.value)) / 100 / perPerson(numberOfFolks.value);
                    tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                    const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                    totalAmount.textContent = `$${total.toFixed(2)}`;
                }
                myTipCalc6();

                customPercent.addEventListener('keyup', () => {
                    const myTipCalc6 = () => {
                        let calcBill = +billInput.value * parseFloat(customInputEvent(+customPercent.value)) / 100 / perPerson(numberOfFolks.value);
                        tipAmount.textContent = `$${calcBill.toFixed(2)}`;
                        const total = calcBill + Number(billInput.value) / perPerson(numberOfFolks.value);
                        totalAmount.textContent = `$${total.toFixed(2)}`;
                    }
                    myTipCalc6();
                })

                billInput.addEventListener('keyup', () => {
                    myTipCalc6();
                })
                numberOfFolks.addEventListener('keyup', () => {
                    myTipCalc6();
                })
            }
        })
    })
}

calculateTip();
// Resetting function
function reset() {
    return window.location.reload();
}