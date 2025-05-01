'use strict';

// Formatter
const formatter = new Intl.NumberFormat(undefined, {
    currency: "EUR",
    style: "currency",
})
// Clear form elements
const clearBtn = document.getElementById('clearFillds').addEventListener('click', clearForm);
// Form
const formEl = document.getElementById('form');
// Inputs
const mortgageAmount = document.querySelector('.inputMortgage');
const mortgageTerm = document.querySelector('.inputMortgageTerm');
const mortgageInterest = document.querySelector('.inputInterest');
const radioInput = document.getElementsByName('radio');
// Symbol & texts
const euroSymbol= document.getElementById('euro-sign');
const yearText = document.getElementById('year-text');
const percentText = document.getElementById('percent-sign');
// Labels
const mortgageTypeLabel_1 = document.querySelector('.lbl');
const mortgageTypeLabel_2 = document.querySelector('.lbl2');
// Errors
const errMortgage = document.getElementById('err-mortgage');
const errTerm = document.getElementById('err-term');
const errInterest = document.getElementById('err-interest');
const errRadio = document.getElementById('err-radio');
// Submit btn 
const submitBtn = document.getElementById('btn');
// Results elements
const resultZone = document.getElementById('result-zone');
const monthlyPaymentsEl = document.getElementById('monthly-payments');
const total = document.getElementById('total');
const emptyCont = document.querySelector('.empty-content');
const resultContent = document.querySelector('.result-content');
// Focus event to the mortgage term
mortgageAmount.addEventListener('focus', (e) => {
    e.target.style.outline = '2px solid hsl(61, 70%, 52%)';
    euroSymbol.style.background = 'hsl(61, 70%, 52%)';
});
// Blur event to the mortgage term
document.querySelector('.inputMortgage').addEventListener('blur', (e) => {
    e.target.style.outline = '';
    document.getElementById('euro-sign').style.background = '';
});

// Focus event to the Mortgage term
mortgageTerm.addEventListener('focus', (e) => {
    e.target.style.outline = '2px solid hsl(61, 70%, 52%)';
    yearText.style.backgroundColor = 'hsl(61, 70%, 52%)';
})
// Blur event to the Mortgage term
mortgageTerm.addEventListener('blur', (e) => {
    e.target.style.outline = '';
    yearText.style.backgroundColor = '';
})
// Focus event to the interest rate
mortgageInterest.addEventListener('focus', (e) => {
    e.target.style.outline = '2px solid hsl(61, 70%, 52%)';
    percentText.style.backgroundColor = 'hsl(61, 70%, 52%)';
})
// Blur event to the interest rate
mortgageInterest.addEventListener('blur', (e) => {
    e.target.style.outline = '';
    percentText.style.backgroundColor = '';
})

radioInput.forEach((radio, index) => {
    radio.addEventListener('click', (e) => {
        if (e.target.classList.contains('first_radio')) {
            mortgageTypeLabel_1.style.background = 'hsl(61, 70%, 52%, .4)';
            mortgageTypeLabel_1.style.outline = '1px solid hsl(61, 70%, 52%)';
            mortgageTypeLabel_2.style.outline = '';
            mortgageTypeLabel_2.style.background = '';
        } else if (e.target.classList.contains('second_radio')) {
            mortgageTypeLabel_2.style.background = 'hsl(61, 70%, 52%, .4)';
            mortgageTypeLabel_2.style.outline = '1px solid hsl(61, 70%, 52%)';
            mortgageTypeLabel_1.style.outline = '';
            mortgageTypeLabel_1.style.background = '';
        }
    })
})

function myFunc(myForm) {
    myForm.addEventListener('submit', (e) => {
        e.preventDefault();
    })
    submitBtn.addEventListener('click', () => validateInputs(mortgageAmount, mortgageTerm, mortgageInterest));
}
myFunc(formEl);

function validateInputs(amount, term, interest) {
    let dangerObj = {
        dangerColor: 'hsl(4, 69%, 50%)',
        whiteColor: 'white',
        display: 'block',
        outline: '2px solid hsl(4, 69%, 50%)'
    }
    if (amount.value === '') {
        euroSymbol.style.backgroundColor = dangerObj.dangerColor;
        euroSymbol.style.color = dangerObj.whiteColor;
        errMortgage.style.display = dangerObj.display;
        amount.style.outline = dangerObj.outline;
    } else {
        euroSymbol.style.backgroundColor = '';
        euroSymbol.style.color = '';
        errMortgage.style.display = '';
        amount.style.outline = '';
        errMortgage.style.display = 'none';
    }        
    // Validating the term input
    if (term.value === '') {
        yearText.style.backgroundColor = dangerObj.dangerColor;
        yearText.style.color = dangerObj.whiteColor;
        term.style.outline = dangerObj.outline;
        errTerm.style.display = dangerObj.display;
    } else {
        yearText.style.backgroundColor = '';
        yearText.style.color = '';
        term.style.outline = '';
        errTerm.style.display = 'none';

    }
    // Validating the term input
    if (interest.value === '') {
        percentText.style.backgroundColor = dangerObj.dangerColor;
        percentText.style.color = dangerObj.whiteColor;
        interest.style.outline = dangerObj.outline;
        errInterest.style.display = dangerObj.display;
    } else {
        percentText.style.backgroundColor = '';
        percentText.style.color = '';
        interest.style.outline = '';
        errInterest.style.display = 'none';
    }
    monthlyPaymentsEl.textContent = (calcBill(+mortgageAmount.value, +mortgageInterest.value, +mortgageTerm.value));
    // Checking for empty inputs
    if (amount.value === '' || term.value === '' || interest.value === '' || !radioInput[0].checked && !radioInput[1].checked) {
        resultContent.style.display = "none";
        emptyCont.style.display = 'block';
    } else {
        resultContent.style.display = "block";
        resultContent.style.margin = "0px";
        emptyCont.style.display = 'none';
    }
}


// Mortgage repayments = P x r x (1 + r)n / (1 + r)n - 1                        
function calcBill(principal, annualRate, years) {
    const monthlyRate = annualRate / 100 / 12; // Converted to a monthly rate
    const totalPayments = years * 12 // Calculate total payments
    
    // For monthly repayment
    const monthlyReapayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, totalPayments)) / (Math.pow(1 + monthlyRate, totalPayments) - 1);
    const totalRepayment = monthlyReapayment * totalPayments;
    // For Interest repayment
    const interestRepayment = principal * monthlyRate;
    const totalInterestOnly = totalPayments * interestRepayment;

    if (radioInput[0].checked) {
        errRadio.style.display = 'none';
        total.textContent = formatter.format(`${totalRepayment.toFixed(2)}`);
        return formatter.format(monthlyReapayment.toFixed(2));
    } else if (radioInput[1].checked) {
        errRadio.style.display = 'none';
        total.textContent = formatter.format(`${totalInterestOnly.toFixed(2)}`);
        return formatter.format(interestRepayment.toFixed(2));
    } else {
        errRadio.style.display = 'block';
    }
}
function clearForm() {
    // Clear number inputs
        mortgageAmount.value = '';
        mortgageTerm.value = '';
        mortgageInterest.value = '';
        // Clear radio inputs      
        radioInput[0].checked = null;
        radioInput[1].checked = null;
        // Clear radio styles
        mortgageTypeLabel_1.style.outline = '';
        mortgageTypeLabel_1.style.background = '';
        mortgageTypeLabel_2.style.outline = '';
        mortgageTypeLabel_2.style.background = '';
        // Clear the monthly payments
        monthlyPaymentsEl.textContent = formatter.format('0.00');
        // Clear total
        total.textContent = formatter.format('0.00');
}