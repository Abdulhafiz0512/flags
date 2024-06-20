
fetch('https://restcountries.com/v3.1/all')
  .then(response => response.json())
  .then(data => {
    const countries = data;

    const cardsContainer = document.getElementById('cards-container');

    
    countries.forEach(country => {
      const card = document.createElement('div');
      card.classList.add('card');

      
      if (country.flags) {
        const flagImg = document.createElement('img');
        flagImg.src = country.flags.svg;
        flagImg.alt = `${country.name.common} flag`;
        card.appendChild(flagImg);
      }

     
      const countryName = document.createElement('h3');
      countryName.textContent = country.name.common;
      card.appendChild(countryName);

      
      cardsContainer.appendChild(card);
    });
  })
  .catch(error => console.log('Xatolik yuz berdi:', error));
