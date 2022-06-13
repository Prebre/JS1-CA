// details.html
/*  (Remember, you will need a parameter in the query string on this page, so either click through to it from the index page or manually add a parameter to the URL).
    - Retrieve the id, name or other parameter from the query string.
    - Once you have the parameter, add it to the API URL in the format the API requires.
    - Make an API call using the URL you create.
    - Display at least 3 different properties from the received JSON on this page.
    - Set the title of the HTML page to be one of the property values, like name, title or another relevant property.
    - Catch any errors and display a message on the page if an error occurs. */

const container = document.querySelector(".container");

const queryString = document.location.search;
const parameters = new URLSearchParams(queryString);
const code = parameters.get("cca2");

console.log(code);

const url = "https://restcountries.com/v3.1/alpha/" + code;
let title = document.querySelector("title");
let h1 = document.querySelector("h1");

console.log(url);

async function fetchCountry() {

        try {
                const response = await fetch(url);

                const country = await response.json();

                for(let i = 0; i < country.length; i++) {

                        console.log(country[i]);

                        container.innerHTML = `<div class="country">
                                        <h2>${country[i].flag} ${country[i].name.official} ${country[i].flag}</h2>
                                        <img src="${country[i].coatOfArms.png}" alt="${country[i].name.official} Coat of Arms" width="200px;">
                                        <p class="result">Their common name is ${country[i].name.common}.</p>
                                        <p class="result">Their capital is called ${country[i].capital[0]}.</p>
                                        <p class="result">They are located in ${country[i].subregion}.</p>
                                        <p class="result">They have a population of ${country[i].population} people.</p>
                                        <p class="result">They start their week on ${country[i].startOfWeek}s.</p>
                                        </div>`

                        title.innerHTML = `${country[i].name.official} | Javascript 1 Course Assignment`
                        h1.innerHTML = `Details on ${country[i].name.common} | JavaScript 1 Course Assignment`
                }
        }
        catch(error) {
                console.log("An error has occurred");
                container.innerHTML = "An error has occurred"
        }
}

fetchCountry();