'use strict';

const target = document.querySelector('#target');
const sides = parseInt(prompt('Kuinka monisivuista noppaa haluat heittää?'));

function diceRoll() {
  return Math.floor(Math.random() * (sides)) + 1;
}

while (true) {
  const roll = diceRoll();
  target.innerHTML += `<li>You rolled a ${roll}</li>`;
  if (roll === sides) {
    break;
  }
}