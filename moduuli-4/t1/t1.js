'use strict';

const form = document.querySelector('#tv')

form.addEventListener('submit' , async function(evt) {
  evt.preventDefault();

  const fromData = new FormData(form)
  const queryString = new URLSearchParams(fromData).toString()
})