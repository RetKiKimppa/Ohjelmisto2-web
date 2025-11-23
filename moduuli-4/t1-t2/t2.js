'use strict';

const apiURL = 'https://api.tvmaze.com/';
const tvForm = document.querySelector('#tv');

tvForm.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const formData = new FormData(tvForm);
  const queryString = new URLSearchParams(formData).toString();


  try {
    const response = await fetch(
        `${apiURL}/search/shows?${queryString}`,
    );

    const jsonData = await response.json();
    console.log(jsonData);

  } catch (error) {
    console.log(error.message);
  }
});
