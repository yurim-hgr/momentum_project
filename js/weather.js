const weatherTagfirst = document.querySelector("#weatherId span:first-child");
const weatherTagLast = document.querySelector("#weatherId span:last-child");


function geoOk (position){
    console.log(position);
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
    fetch(url)
        .then(response => response.json())
        .then(data => {
            
            weatherTagfirst.innerText = data.weather[0].main;
            weatherTagLast.innerText = `${data.main.temp}/ ${data.name}`;

        });
    
    console.log(url);
}
function geoError () {
    alert("cant find you")
}

const API_KEY = "1422a16f816b94e63d01f03564f19b76";


navigator.geolocation.getCurrentPosition(geoOk , geoError);