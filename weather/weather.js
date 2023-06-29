// 6afd13eb3627e76136352d0eb59bda49

//! https://api.openweathermap.org/data/2.5/weather?appid={API_KEY}&q={CITY_NAME}

// https://openweathermap.org/img/wn/01d@2x.png

let form = document.forms[0];
let cityname;
let article = document.querySelector("article");
// console.log(form.elements.cityname.value);

function fetchData(city) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?appid=6afd13eb3627e76136352d0eb59bda49&q=${city}`
  )
    .then(response => {
      response
        .json()
        .then(data => {
          let img = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          console.log(data);
          article.innerHTML = `
                <div class="card-block">

                    <div class="top">
                        <h1>${data.name} </h1>
                        <h2>${data.sys.country}</h2>
                    </div>
                    <div class="image-descriptio">
                    <div class="left">
                    
                    <img src=${img}>
                    <h3>Description: ${data.weather[0].description}</h3>


                    </div>

                    <div class="right">
                        <div> lon : ${data.coord.lon}</div>
                        <div> lat : ${data.coord.lat}</div>
                        <div> temp : ${data.main.temp}</div>
                        <div> temp_min : ${data.main.temp_min}</div>
                        <div> temp_max : ${data.main.temp_max}</div>
                        <div> humidity : ${data.main.humidity}</div>
                        <div> pressure : ${data.main.pressure}</div>
                        <div> Wind speed : ${data.wind.speed}</div>
                    <div>
                    </div>
                </div>
              `
              ;
        })
        .catch(err => {
          console.log(err);
        });
    })
    .catch(err => {
      console.log(err);
    })
    .finally(() => {
      console.log("server responded");
    });
}
form.addEventListener("submit", e => {
  e.preventDefault();
  cityname = form.elements.cityname.value;
  fetchData(cityname);
});

