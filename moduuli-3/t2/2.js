'use strict';

const target = document.getElementById('target');
const items = ['First item', 'Second item', 'Third item'];

for (let i = 0; i < items.length; i++) {
  const liElement = document.createElement('li');
  liElement.textContent = items[i];
  target.appendChild(liElement);

  if (i === 1) {
    liElement.classList.add('my-item');
  }
}
