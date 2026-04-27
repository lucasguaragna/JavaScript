// // 'use strict';

// const btn = document.querySelector('.btn-country');
// const countriesContainer = document.querySelector('.countries')

// const renderCountry = function(data, className = ''){
//     const html = `
//     <article class="country">
//         <img class="country__img" src="${data.flag}" />
//         <div class="country__data">
//             <h3 class="country__name">${data.name}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${(+data.population/1000000).toFixed(1)}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages[0].nativeName}</p>
//             <p class="country__row"><span>💰</span>${data.currencies[0].name}</p>
//         </div>
//     </article>
//     `;

//     countriesContainer.insertAdjacentHTML('beforeend', html);
//     countriesContainer.style.opacity = 1;
// };

//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v2/name/${countryName}`);
//     request.send();

//     // send request that fetches data in the background
//     // once is done, it will emit the "load" event
//     // so we listen to it:

//     request.addEventListener('load', function(){
//         // console.log(this.responseText)
//         const [data] = JSON.parse(this.responseText);
//         console.log(data);
//         // Render Country
//         renderCountry(data);
//     });
// };

// getCountryAndNeighbour('brazil');

// USING PROMISES
// const getCountryData = function(country){
//     fetch(`https://restcountries.com/v2/name/${country}`)
//         .then(function(response){
//             return response.json(); //it returns another promise
//         })
//         .then(function(data){
//             renderCountry(data[0])
//        })
//        .catch(err => alert(err));
// };

// btn.addEventListener('click', function(){
//     getCountryData('brazil');
// });


// Premisifying navigator.geolocation.getCurrentPosition
const getPosition = function(){
    return new Promise(function(resolve, reject){
        // navigator.geolocation.getCurrentPosition(
        //     position => resolve(position), 
        //     err => reject(err)
        // );
        navigator.geolocation.getCurrentPosition(resolve,reject);

    })

}

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries')

// const WhereAmI = function(){
//     getPosition().then(pos => {
//         const {latitude: lat, longitude: lng} = pos.coords;

//         return fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
//     })
//         .then(res => {
//             if (!res.ok) throw new Error(`Problem with geocoding: ${res.statusText} (${res.status})`)
//             return res.json()
//         })
//         .then(data => {
//             console.log(`You are in ${data.city}, ${data.countryName}`);

//             return fetch(`https://restcountries.com/v2/name/${data.countryName}`)
//         })
//         .then(res => {
//             if(!res.ok) throw new Error(`Country not found (${res.status})`);
//             return res.json();
//         })
//         .then(data => renderCountry(data[0]))
//         .catch(err => console.error(`🤯 ${error.message}`))
// }
   
const whereAmI = async function(){
    try {
        const pos = await getPosition(); // Returns a Promise
        const {latitude: lat, longitude: lng} = pos.coords;
    
        const resgeo = await fetch(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lng}`)
        if (!resgeo.ok) throw new Error(`Problem with geocoding: ${resgeo.status}`)
        const datageo = await resgeo.json()
    
        const res = await fetch(`https://restcountries.com/v2/name/${datageo.countryName}`)
        const data = await res.json()
    
        renderCountry(data[0])
    } catch (error) {
        console.error(error)
    }
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
    whereAmI();
});



