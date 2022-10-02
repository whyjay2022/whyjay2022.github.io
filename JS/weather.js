const API_KEY = "6a6d99c2deed03e7df1db050b9a487a7";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("You live in", lat, lng);
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`
    // console.log(url);
    fetch(url)
        .then(response => response.json())
        .then(data => {
        // console.log(data.name, data.weather[0].main);
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            // const name = data.name;
            city.innerText = data.name;
            // const weather = data.weather[0].main;
            weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
        });
}

function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);