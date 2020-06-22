const weather = document.querySelector(".jsWeather");

const API_KEY = "4c3089fd16af286e0d678b25133e6874";
const CROOD = "coords";

function getWeather(lat, lon){
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
  ).then(function(res){
    return res.json();
  }).then(function(json){
    console.log(json);
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerHTML = `${temperature} @ ${place}`;
  })
}

function saveCoords(coordsObj){
  localStorage.setItem(CROOD, JSON.stringify(coordsObj));
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(function(position){
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
      latitude,
      longitude
    };
    saveCoords(coordsObj);
    getWeather(latitude, longitude);
  }, function(){
    console.log("Cant accesss geo info")
  });
}

function loadCoords(){
  const loadedCoords = localStorage.getItem(CROOD);
  if(loadedCoords === null){
    askForCoords();
  } else{
    const parsedCoords = JSON.parse(loadedCoords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();