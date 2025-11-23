'use strict';

const target = document.querySelector('#target');

function diceRoll() {
  return Math.floor(Math.random() * 6) + 1;
}

while (true) {
  const roll = diceRoll();
  target.innerHTML += `<li>You rolled a ${roll}</li>`;
  if (roll === 6) {
    break;
  }
}