'use strict';

const dogs = [];
const target = document.querySelector('#target');

for (let i = 1; i <= 6; i++) {
  const dog = prompt('Syötä koiran nimi: ');
  dogs.push(dog);
}

dogs.sort();

for (let i = dogs.length - 1; i >= 0; i--) {
  target.innerHTML += `<li>${dogs[i]}</li>`;
}
