/* FIND AN API
    - Search for a public, free-to-use API.
    - You will need to make two calls to this API:
        -- to fetch an array of results
        -- to fetch a single result using an id, name, or other property.

    - You will need to read the API's documentation to see what URLs are available, if they require a key to be sent in the header, and any other configuration they might need.
    -You may not use the APIs used in the lessons. */
    


    // index.html
    /*  - Make a call to your API URL. Loop through the results and create HTML for each result.
        - You must display at least 3 different properties inside the HTML. It's not required to display an image.
        - You will need to link each result to a details.html page and to pass a parameter in the query string to that page.
        - If you are going to fetch the individual result on the details page by its id, then pass an id in the query string.
        - If you will be retrieving by another property, like name for example, pass the name in the query string.
        - You will fetch this parameter from the query string in the details page code.
        - Catch any errors and display a message on the page if an error occurs. */
    

const url = "https://restcountries.com/v3.1/region/europe";
const container = document.querySelector(".container");

container.innerHTML = "";

async function getCountries() {
        try {
                        const response = await fetch(url);

                        const countries = await response.json();

                        for(let i = 0; i < countries.length; i++) {
                                        console.log(countries[i]);

                                        container.innerHTML += `<div class="card">
                                                        <h3>${countries[i].name.official}</h3>
                                                        <p class="result">${countries[i].subregion}</p>
                                                        <p class="result">${countries[i].capital[0]}</p>
                                                        <a href="details.html?cca2=${countries[i].cca2}">Read more!</a>
                                                        </div>`
                        }
        }
        catch(error) {
                        console.log("An error has occurred");
                        container.innerHTML = "An error has occurred"
        }
}

getCountries();