async function weatherupdate(city) {
    document.getElementById("weather-info").style.display = "block";
    const apikey = "80c8f27d18d77439214228a115c9e3ff";
    const apiurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`;
    const response = await fetch(apiurl);
    var data = await response.json();
    if (response.status == 404) {
      alert("City not found!");
      document.getElementById("weather-info").style.display = "none";
      document.getElementById("city-info").textContent = "";
      return;
    }
    document.getElementById("city").textContent = data.name;
    document.getElementById("temperature").textContent =
      Math.round(data.main.temp) + "°C";
    document.getElementById("humiditypercentage").textContent =
      data.main.humidity + "%";
    document.getElementById("windspeedpercentage").textContent =
      data.wind.speed + " km/h";
    document.getElementById("weather-type").textContent =
      data.weather[0].description;
    console.log(data);
    if (data.weather[0].main == "Clear") {
      document.getElementById("icon").src = "clear.png";
    } else if (data.weather[0].main == "Clouds") {
      document.getElementById("icon").src = "clouds.png";
    } else if (data.weather[0].main == "Rain") {
      document.getElementById("icon").src = "rain.png";
    } else if (data.weather[0].main == "Snow") {
      document.getElementById("icon").src = "snow.png";
    } else if (data.weather[0].main == "Drizzle") {
      document.getElementById("icon").src = "drizzle.png";
    } else if (data.weather[0].main == "Haze") {
      document.getElementById("icon").src = "haze.png";
    } else if (data.weather[0].main == "Mist") {
      document.getElementById("icon").src = "mist.png";
    } else if (data.weather[0].main == "Thunderstorm") {
      document.getElementById("icon").src = "3104612.png";
    }
  }

  const button = document.getElementById("searchbutton");
  button.addEventListener("click", () => {
    const city = document.getElementById("city-input").value;
    weatherupdate(city);
    document.getElementById("city-input").value = "";
  });