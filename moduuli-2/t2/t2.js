'use strict';

const target = document.querySelector('#target');
const participantcnt = prompt('Syötä osallistujien määrä:');
const participants = [];

for (let i = 1; i <= participantcnt; i++) {
  const p_name = prompt(`Syötä osallistujan ${i} nimi: `);
  participants.push(p_name);
}

participants.sort();

// (Toinen tapa) ei toimi ääkkösillä oikein
//participants.sort(function (a, b) {
//    return a.localeCompare(b);
//});

for (let i = 1; i <= participantcnt; i++) {
  target.innerHTML += `<li>${participants[i-1]}</li>`;
}