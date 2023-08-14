'use strict';

const five = document.querySelector('.fi');
const ten = document.querySelector('.te');
const fiveteen = document.querySelector('.fee');
const twentfive = document.querySelector('.twfi');
const pipty = document.querySelector('.fif');
const amount2 = document.querySelector('.amount2');
const amount1 = document.querySelector('.amount1');
const inibill = document.querySelector('.bills');
const numb = document.querySelector('.numb');
let custom = document.querySelector('.custom');

let pertip = 0;

console.log(inibill.value);

custom.addEventListener("input", function () {
    const customTipValue = parseFloat(custom.value);
    if (!isNaN(customTipValue)) {
        pertip = customTipValue * 0.01;

        const inibillValue = parseFloat(inibill.value);
        const numpeoValue = parseFloat(document.querySelector('.peoplenum').value);

        if (!isNaN(inibillValue) && !isNaN(numpeoValue)) {
            const totperbil = inibillValue * pertip;
            const tipamper = totperbil / numpeoValue;
            const totper = (inibillValue / numpeoValue) + tipamper;
            amount1.textContent = Math.ceil(tipamper * 100) / 100;
            amount2.textContent = Math.ceil(totper * 100) / 100;
            numb.textContent = 'Number of People';
        } else {
            numb.textContent = 'Enter Number of People';
        }
    }
});


document.querySelector('.reset').addEventListener('click', function () {
    amount1.textContent = "0.00";
    amount2.textContent = "0.00";
    numb.textContent = 'Number of People';
    document.querySelector('.peoplenum').value = 0;
    inibill.value = 0;
});
