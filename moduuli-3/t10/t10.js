'use strict';

const lomake = document.querySelector('#source');

lomake.addEventListener('submit', function(evt) {
  evt.preventDefault();
  const formData = new FormData(lomake);
  const enimi = formData.get('firstname');
  const snimi = formData.get('lastname');

  document.querySelector(
      '#target').innerText = `Your name is ${enimi} ${snimi}!`;

  // jos tarvitsee datat getillä
  //const qString = new URLSearchParams(formData)
  //console.log(qString.toString())
});