const input = document.querySelector("#head-input");
const button = document.getElementById("head-btn");
let image = document.querySelector(".Image-icon");
const temperature = document.getElementById("temperture");
const wheather_disciption = document.getElementById("discription");
const humidity = document.getElementById("Humidity");
const speed = document.getElementById("speed");
let weather_content = document.querySelector(".weather");


async function checkWheather(city){
   const api_key = 'fd7f2134f6f2f410955b2fe462230932';
   const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

   let wheather_data = await fetch(url).
   then(response => response.json());

   if(wheather_data.cod === `404`){
      image.src="/weather/Not found.avif";
      image.style.width = "100%";
      weather_content.style.display = "none";
   }else{
      weather_content.style.display = "flex";
   }

   wheather_disciption.innerHTML = wheather_data.weather[0].main;
   speed.innerHTML = `${wheather_data.wind.speed} Km/H`;
   humidity.innerHTML =`${wheather_data.main.humidity}%`;
   temperature.innerHTML = `${Math.round(wheather_data.main.temp-273.15)}°C`;

   if(wheather_data.weather[0].main == "Clear"){
      image.src="/weather/sunny.jpg";

   }else if(wheather_data.weather[0].main == "Rain"){
      image.src="/weather/raniy.jpg";

   }else if(wheather_data.weather[0].main == "Clouds"){
      image.src="/weather/cludy.jpg";

   }else if(wheather_data.weather[0].main == "Mist"){
      image.src="/weather/mist.avif";

   }else if(wheather_data.weather[0].main == "Snow"){
      image.src="/weather/snow.jpg";

   }else if(wheather_data.weather[0].main == "Haze"){
      image.src="/weather/sunny.jpg";

   }

   console.log(wheather_data);
}


button.addEventListener("click", ()=>{checkWheather(input.value)});