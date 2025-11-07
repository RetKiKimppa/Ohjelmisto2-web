'use strict';

const numero1 = prompt('Anna eka numero:');
const numero2 = prompt('Anna toka numero:');
const numero3 = prompt('Anna vika numero:');

let summa = parseFloat(numero1) + parseFloat(numero2) + parseFloat(numero3);
let tulo = parseFloat(numero1) * parseFloat(numero2) * parseFloat(numero3);
const ka = (summa / 3);

document.querySelector(
    '#summa').innerText = `Numeroiden summa: ${summa}`;

document.querySelector(
    '#tulo').innerText = `Numeroiden tulo: ${tulo}`;

document.querySelector(
    '#ka').innerText = `Numeroiden keskiarvo: ${ka}`;