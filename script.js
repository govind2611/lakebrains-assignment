function searchWeatherFunction() {
  const cityInputElement = document.getElementById("cityInput");
  const cityNameElement = cityInputElement.value;
  const apiKey = "840de593b7028de6e424162454790fe5";

  fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${cityNameElement}&units=metric&appid=${apiKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      const overlayContainer = document.getElementById("overlayContainer");
      const popupContainer = document.getElementById("popupContainer");
      const cityNameElementElement = document.getElementById("cityNameElement");
      const temperatureElementElement =
        document.getElementById("temperatureElement");
      const weatherDescriptionElementElement = document.getElementById(
        "weatherDescriptionElement"
      );

      cityNameElementElement.textContent = `City: ${data.name}`;
      temperatureElementElement.textContent = `Temperature: ${data.main.temp}°C`;
      weatherDescriptionElementElement.textContent = `Main: ${data.weather[0].main}, Description : ${data.weather[0].description}`;

      overlayContainer.style.display = "block";
      popupContainer.style.display = "block";
    })
    .catch((error) => {
      console.error(error);
    });
}

function handleKeyDownEvent(event) {
  if (event.key === "Enter") {
    searchWeatherFunction();
  }
}

function closePopupFunction() {
  const overlayContainer = document.getElementById("overlayContainer");
  const popupContainer = document.getElementById("popupContainer");

  overlayContainer.style.display = "none";
  popupContainer.style.display = "none";
}

function clearInput() {
    const cityInputElement = document.getElementById("cityInput");
    cityInputElement.value = "";
  }