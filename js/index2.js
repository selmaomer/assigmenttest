const apikey='c9eebeae116d47e18bf143936232712';
const apiUrl='http://api.weatherapi.com/v1/forecast.json?&q= ';

let searchBox=document.querySelector(".search input");
let searchBtn=document.getElementById("searhbtn");
let weatherIcon=document.querySelector(".weather_icon");

let city;
 const src='http://cdn.weatherapi.com/weather/day'
const dateObj=new Date();
const getDayName=(dayType,dateVal=dateObj)=>dateVal.toLocaleString('en-US',{weekday:dayType});

async function checkWeather(city){

  const apiUrl=`http://api.weatherapi.com/v1/forecast.json?key=c9eebeae116d47e18bf143936232712&q=${city}&days=3`;
       let response= await fetch(apiUrl) ;
  let data =await response.json();
    console.log(data);
 
   const fullDates=dateObj.toLocaleDateString('en-GB',{day:"numeric",month:"short",year:"numeric"});
document.querySelector('.date-day').innerHTML=fullDates;
if(data.current.condition.text="sunny")
{
  weatherIcon.src="images/day/113.png";
}
if(data.current.condition.text="Partly cloudy")
{
  weatherIcon.src="images/day/116.png"
}
if(data.current.condition.text=" Overcast")
{
  weatherIcon.src="images/day/122.png"
}
if(data.current.condition.text=" cloudy")
{
  weatherIcon.src="images/day/119.png"
}
if(data.current.condition.text=" Mist")
{
  weatherIcon.src="images/day/143.png"
}

//document.querySelector('.weather-icon').src=`${data.current.condition.icon}`;
document.querySelector('.date-dayname').innerHTML=getDayName('short');

document.querySelector('.temp').innerHTML=`${data.current.temp_c}°C`;
document.querySelector('.humidity').innerHTML=`${data.current.humidity}%`;
document.querySelector('.wind').innerHTML=`${data.current.wind_kph}km/h`;
document.querySelector('.text').innerHTML=`${data.current.condition.text}`;

//if(data.current.is_day){
  //document.querySelector(".weather-side").classList.replace("night","day");
//}else
//  {
 //   document.querySelector(".weather_side").replace("day","Night");
//}
  updateForecastDate(data.forecast)
}


checkWeather(city);
  searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);})


function updateForecastDate(forecastVal){
  const weekContainer= document.querySelector(".week_list");
  weekContainer.innerHTML="";
  forecastVal.forecastday.forEach(eachForecast => {
  //console.log(eachForecast.day)
    const dayVal=eachForecast.day;
    const currentDate=new Date(eachForecast.date);
    if(currentDate.toDateString()!== dateObj.toDateString())
    {
      const src='images/days/';
      let liEl=document.createElement('li');
      liEl.innerHTML=`
      <img class="day_icon" src="${dayVal.condition.icon}" alt=""
      ${eachForecast.date}temperature><span class="day-name text-white fw-bold pb-3 text-center me-2">
        ${getDayName('short',currentDate)}
        </span><class="day_temp">max temp
          ${dayVal.maxtemp_c}°C </span>
          <span  class="day_wind">wind
          ${dayVal.mintemp_c}°C </span>`
          weekContainer.appendChild(liEl);
    }
  })
  weekContainer.insertAdjacentHTML("afterend",`<div class="clear"></div>`);

    
}