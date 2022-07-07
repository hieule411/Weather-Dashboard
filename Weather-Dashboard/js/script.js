var searchCity = $("#search-city");
var searchButton = $("#search-button");
var currentTemperature = $("#temperature");
var currentHumidty= $("#humidity");
var currentWSpeed=$("#wind-speed");
var currentUvindex= $("#uv-index");
var sCity=[];

//API key
var APIKey="8f149e973ffead900ecf753824ea3f1b";
function displayWeather(event){
    event.preventDefault();
    if(searchCity.val().trim()!==""){
        city=searchCity.val().trim();
        currentWeather(city);
    }
}

function find {
    for (var i=0; i<City.length; ) {
        if(UpperCase()==City()) {
            return -1;
        }
    }
    return 1;
}


function currentWeather(city) {
    fetch ("https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=8f149e973ffead900ecf753824ea3f1b")
    .then(response => response.json())
}
        currentTemperature(response)
        currentHumidty(response)
        currentWSpeed(response)
        UVIndex(response);
        forecast(response.id);
        if(response.cod===200){
            City=JSON.parse(localStorage.getItem("cityname"));
            if (City==null){
                City=[];
                City.push(city.toUpperCase()
                );
                localStorage.setItem("cityname",JSON.stringify(City));
                addToList(city);
            }
            else {
                if(find(city)>0){
                    sCity.push(city.toUpperCase());
                    localStorage.setItem("cityname",JSON.stringify(City));
                    addToList(city);
                }
            }
        }


