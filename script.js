// Get the button element by its ID
const button = document.getElementById("button");

// Get the input element by its ID
const input = document.getElementById("city");

// Get the various output elements by their IDs
const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const DayNight = document.getElementById("Day-Night");
const cityTemp = document.getElementById("city-temp");
const cityHumid = document.getElementById("city-humid");

// Define an async function to fetch weather data for a given city name
async function getData(cityName) {
    // Fetch data from the weather API using the provided city name
    const promise = await fetch(
        `https://api.weatherapi.com/v1/current.json?key=67e159c7929d4b608bb190803242902&q=${cityName}&aqi=yes`
    );

    // Return the JSON data from the response
    return await promise.json();
}

// Add an event listener to the button to handle click events
button.addEventListener("click", async () => {
    // Get the input value
    const value = input.value;

    // Fetch the weather data for the given city name
    const result = await getData(value);

    // Update the city name output element
    cityName.innerText = `${result.location.name},${result.location.region} - ${result.location.country}`;

    // Update the city time output element
    cityTime.innerText = result.location.localtime;

    // Update the Day/Night output element
    DayNight.innerText = result.current.condition.text;

    // Update the city temperature output element
    cityTemp.innerText = result.current.temp_c;

    // Update the city humidity output element
    cityHumid.innerText = result.current.humidity;
});
