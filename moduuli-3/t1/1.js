'use strict';

const target = document.getElementById('target');
const html = `
  <li>First item</li>
  <li>Second item</li>
  <li>Third item</li>
`;

target.innerHTML = html;

target.classList.add('my-list');