'use strict';

const numbers = [];

for (let i = 1; i <= 5; i++) {
  const number = prompt('Syötä numero: ');
  numbers.push(number);
}

for (let i = numbers.length - 1; i >= 0; i--) {
  console.log(numbers[i]);
}


