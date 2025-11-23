'use strict';


const tvFormElem = document.querySelector('#tv');
const resultsElem = document.querySelector('#results');

tvFormElem.addEventListener('submit', async function(evt) {
  evt.preventDefault();

  const queryParam = document.querySelector('input[name=q]').value;
  const query = `https://api.tvmaze.com/search/shows?q=${queryParam}`;

  try {
    const response = await fetch(query);
    const jsonData = await response.json();

    resultsElem.innerHTML = '';

    for (const tvShow of jsonData) {
      const h2 = document.createElement('h2');
      h2.innerText = tvShow.show.name;

      const img = document.createElement('img');
      img.src = tvShow.show.image?.medium;
      img.alt = tvShow.show.name;

      img.addEventListener('error', function(){
        img.src = 'https://placecats.com/210/295'
      })

      const article = document.createElement('article');
      article.append(h2, img);

      resultsElem.append(article);
    }

  } catch (error) {
    console.log(error.message);
  }
});