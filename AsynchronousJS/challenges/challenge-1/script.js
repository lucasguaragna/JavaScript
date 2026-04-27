const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

const WhereAmI = function(lat, lng){
    fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        .then(res => {
            if (!res.ok) throw new Error(`Problem with geocoding: ${res.statusText} (${res.status})`)
            return res.json()
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.countryName}`);

            return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
        })
        .then(res => {
            if(!res.ok) throw new Error(`Country not found (${res.status})`);
            return res.json();
        })
        .then(data => renderCountry(data[0]))
        .catch(err => console.error(`🤯 ${error.message}`))
}

const renderCountry = function(data, className = ''){
    const html = `
    <article class="country">
        <img class="country__img" src="${data.flag}" />
        <div class="country__data">
            <h3 class="country__name">${data.name}</h3>
            <h4 class="country__region">${data.region}</h4>
            <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
            <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
            <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
        </div>
    </article>
    `;

    countriesContainer.insertAdjacentHTML('beforeend', html);
    countriesContainer.style.opacity = 1;
};

btn.addEventListener('click', function(){
    WhereAmI(52.508,13.381);
});



