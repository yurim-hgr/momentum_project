const weatherTagfirst = document.querySelector("#weatherId div:first-child");
const weatherTagLast = document.querySelector("#weatherId div:last-child");
let iconNum;

function geoOk(position) {
  console.log(position);
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      weatherTagLast.innerText = `${Math.round(data.main.temp)}℃ ${data.name}`;
      console.log(data);
      iconNum = data.weather[0].icon;
      getIcon(iconNum);
    });
}

function getIcon(iconNum) {
  const IconImage = document.createElement("img");
  IconImage.src = `http://openweathermap.org/img/wn/${iconNum}@2x.png`;
  weatherTagfirst.appendChild(IconImage);
  IconImage.classList.add("iconimg");
}

function geoError() {
  alert("i cant find you");
}

navigator.geolocation.getCurrentPosition(geoOk, geoError);
