'use strict';

const hakulomake = document.querySelector('#hakulomake');
const saatiedot = document.querySelector('#saatiedot')

async function haeSaatiedot(evt) {
  evt.preventDefault()
  saatiedot.innerHTML = ''
  try {
    const city = document.querySelector('input[name=kaupunki]')
    const queryString = `/weather?q=${city}&appid=${apiKey}&units=metric`;
    const response = await fetch(apiUrl + queryString);
    const jsonData = await response.json();
    console.log(jsonData);

    const h3 = document.createElement('h3')
    h3.innerText = jsonData.name;

    const tuuli = document.createElement('p');
    tuuli.innerText = `Tuulen nopeus: ${jsonData.wind.speed}`

    const lampo = document.createElement('p');
    lampo.innerText = `Lämpötila: ${jsonData.main.temp}`

    const figure = document.createElement('figure');
    const iconImg = document.createElement('img')
    img.alt = jsonData.weather.description;
    img.src = `${imgUrl}${jsonData.weather.icon}@2x.png`

    // KESKEN KESKEN KESNKEN KESKEN KESKEN KESKEN KESKEN KESKEN

  } catch (error) {
    console.error(error);
  }
}

hakulomake.addEventListener('submit', haeSaatiedot)