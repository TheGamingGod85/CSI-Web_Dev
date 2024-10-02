const apiKey = "462e1b347991af24d63486355660e91c";
const geoNamesUsername = "marcus32"; 
function autocomplete(input) {
    let currentFocus;

    input.addEventListener("input", async function () {
        const value = this.value;
        closeAllLists();
        if (!value) return; 

        currentFocus = -1;
        const listContainer = document.createElement("div");
        listContainer.setAttribute("id", this.id + "autocomplete-list");
        listContainer.setAttribute("class", "autocomplete-list");
        this.parentNode.appendChild(listContainer);

        const suggestions = await fetchCities(value);
        
        suggestions.forEach((item) => {
            if (item.name.toLowerCase().startsWith(value.toLowerCase())) { 
                const suggestionItem = document.createElement("div");
                suggestionItem.setAttribute("class", "autocomplete-item");
                suggestionItem.innerHTML = "<strong>" + item.name.substr(0, value.length) + "</strong>";
                suggestionItem.innerHTML += item.name.substr(value.length);
                suggestionItem.innerHTML += "<input type='hidden' value='" + item.name + "'>";
                suggestionItem.addEventListener("click", function () {
                    input.value = this.getElementsByTagName("input")[0].value;
                    closeAllLists();
                    getWeather(input.value);
                });
                listContainer.appendChild(suggestionItem);
            }
        });

        if (listContainer.childElementCount > 0) {
            listContainer.style.display = 'block';
        } else {
            listContainer.style.display = 'none'; 
        }
    });

    function closeAllLists(element) {
        const lists = document.getElementsByClassName("autocomplete-list");
        for (let i = 0; i < lists.length; i++) {
            if (element !== lists[i] && element !== input) {
                lists[i].parentNode.removeChild(lists[i]);
            }
        }
    }

    document.addEventListener("click", function (e) {
        closeAllLists(e.target);
    });
}

async function fetchCities(query) {
    const response = await fetch(`http://api.geonames.org/searchJSON?q=${query}&maxRows=10&username=${geoNamesUsername}`);
    const data = await response.json();
    return data.geonames; 
}

function getWeather(city) {
    const base_url = "http://api.openweathermap.org/data/2.5/weather?";
    const complete_url = base_url + "appid=" + apiKey + "&q=" + city + "&units=metric";

    fetch(complete_url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== "404") {
                const { temp, pressure, humidity } = data.main;
                const weatherDescription = data.weather[0].description;
                document.getElementById("weather-info").innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p>Temperature: ${temp} °C</p>
                    <p>Pressure: ${pressure} hPa</p>
                    <p>Humidity: ${humidity} %</p>
                    <p>Description: ${weatherDescription}</p>
                `;
            } else {
                document.getElementById("weather-info").innerHTML = `
                    <h2>Weather in ${city}</h2>
                    <p class="error-message">City not found</p>
                `;
            }
        })
        .catch(error => {
            document.getElementById("weather-info").innerHTML = `
                <h2>Weather</h2>
                <p class="error-message">An error occurred while fetching the data</p>
            `;
        });
}

autocomplete(document.getElementById("city"));
