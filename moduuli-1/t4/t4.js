'use strict';

const kohde = document.querySelector('#target');

const nimi = prompt('Input name:');
const huone = Math.floor(Math.random() * 4);

console.log(huone);

switch (huone) {
  case 0:
    kohde.innerText = `${nimi}, You have been chosen by Gryffindor`;
    break;
  case 1:
    kohde.innerText = `${nimi}, You have been chosen by Slytherin`;
    break;
  case 2:
    kohde.innerText = `${nimi}, You have been chosen by Hufflepuff`;
    break;
  case 3:
    kohde.innerText = `${nimi}, You have been chosen by Ravenclaw`;
    break;
}

