function search(event) {
  event.preventDefault();
  let searchInputElement = document.querySelector("#search-input");
  let cityElement = document.querySelector("#current-city");
  cityElement.innerHTML = searchInputElement.value;

  let city = searchInputElement.value;
  let apiKey = "fb24932f22a0f4a4b10t5cee3cc7fo79";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=imperial`;

  axios.get(apiUrl).then(cityTemperature);
}

function cityTemperature(response) {
  let temperature = Math.round(response.data.temperature.current);
  let city = document.querySelector("#current-city");
  city = response.data.city;

  let currentTemperature = document.querySelector("#current-temperature-value");
  currentTemperature.innerHTML = `${temperature}`;
}

function formatDate(date) {
  let minutes = date.getMinutes();
  let hours = date.getHours();
  let day = date.getDay();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  if (hours < 10) {
    hours = `0${hours}`;
  }

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  let formattedDay = days[day];
  return `${formattedDay} ${hours}:${minutes}`;
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);

let currentDateElement = document.querySelector("#current-date");
let currentDate = new Date();

currentDateElement.innerHTML = formatDate(currentDate);
