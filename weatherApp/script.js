let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
//   let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(" active", "");
//   }
  slides[slideIndex-1].style.display = "block";
//   dots[slideIndex-1].className += " active";
}

const apiKey ="af5d3a836e557d78ef30c35b55b0afa2";
const apiUrl = `https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`;
const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + " °C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + " %";
    document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";

    if(data.weather[0].main == "Clouds") {
        weatherIcon.src = "../pic/weather/icons8-cloud-100.png";
    }else if(data.weather[0].main == "Clear") {
          weatherIcon.src = "../pic/weather/icons8-sun-100.png";
      } else if(data.weather[0].main == "Rain") {
          weatherIcon.src = "../pic/weather/icons8-heavy-rain-100.png";
      } else if(data.weather[0].main == "Drizzle") {
          weatherIcon.src = "../pic/weather/icons8-light-rain-100.png";
      }else if(data.weather[0].main == "Mist") {
          weatherIcon.src = "../pic/weather/icons8-partly-cloudy-day-100.png";
      }else if(data.weather[0].main == "Snow") {
          weatherIcon.src = "../pic/weather/icons8-snow-100.png";
      } else if(data.weather[0].main == "Haze") {
          weatherIcon.src = "../pic/weather/icons8-haze-100.png";
      } else if(data.weather[0].main == "Thunderstorm") {
          weatherIcon.src = "../pic/weather/icons8-stormy-weather-100.png";
      }
      document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
    }
}


checkWeather("New York");
searchBtn.addEventListener("click", () => { 
    checkWeather(searchBox.value);    
});

const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
function AddTask(){
  if(inputBox.value === ''){
    alert("Please enter a task");
  }else{
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00D7";
    li.appendChild(span);
  }
  inputBox.value = '';
  saveData();
}

listContainer.addEventListener("click", (e) => {
  if(e.target.tagName === "LI"){
    e.target.classList.toggle("checked");
    saveData()
  }else if(e.target.tagName === "SPAN"){
    e.target.parentElement.remove();
    saveData()
  }
}, false);

function saveData(){
  localStorage.setItem("data", listContainer.innerHTML);
}

function showTasks(){
  listContainer.innerHTML = localStorage.getItem("data");
}
showTasks();