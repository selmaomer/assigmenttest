//const apikey=c9eebeae116d47e18bf143936232712;
//const apiUrl= ;

const searchBox=document.querySelector(".searchinput");

async function checkWeather(){
    var response= await  fetch('http://api.weatherapi.com/v1/forecast.json?key=c9eebeae116d47e18bf143936232712&q=07112&days=5');
        var data =await response.json();
    console.log(data);




///document.querySelector('city').innerHTML=data.name;
document.querySelector('temp').innerHTML=data.temp_c;
document.querySelector('city').innerHTML=data.name;
document.querySelector('humidity').innerHTML=current.name;
}


checkWeather();
function processWeatherData(response) {
  
    var location=response.resolvedAddress;
    var days=response.days;
    console.log("Location: "+location);
    for (var i=0;i<days.length;i++) {
      console.log(days[i].datetime+": tempmax="+days[i].tempmax+", tempmin="+days[i].tempmin);
    }
  }
