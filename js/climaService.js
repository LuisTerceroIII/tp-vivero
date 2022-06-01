const main = async () => {

    const fetchURL = async (url) => {
      const res = await fetch(`https://weatherservices.herokuapp.com/api/${url}`)
      return res.json()
    }
   
    const {states: weatherStates} = await fetchURL("weatherstates")
    console.log(weatherStates);
  
    const { locations, locations: [sanMiguelLocation] } = await fetchURL("locations")
    const wheaterDataSanMiguel = await fetchURL(`weather/${sanMiguelLocation.state_id}`)

    console.log(wheaterDataSanMiguel)
  
    const { alerts: alertsDayOne } = await fetchURL("alerts/byDay/1")
    const { alerts: alertsDayTwo } = await fetchURL("alerts/byDay/2")
    const { alerts: alertsDayThree } = await fetchURL("alerts/byDay/3")
  
    //const weather = wheaterSanMiguel.item.weather
    const {item : { weather }} = wheaterDataSanMiguel
    console.log(weather)
    const {forecast:{ forecast: {0: saturday, 1: sunday, 2: monday, 3: tuesday} }} = wheaterDataSanMiguel.item
    
    const forecast = [saturday, sunday, monday, tuesday]
    console.log(forecast)


    const temp = document.getElementById('tempeture')
    const minTemp = document.getElementById('min-tempeture')
    const humidity = document.getElementById('humidity')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    const windSpeed = document.getElementById('wind_speed')
    const windDeg = document.getElementById('wind_deg')
    const description = document.getElementById('description')

    const location = document.getElementById('location')
    location.innerHTML = `${sanMiguelLocation.name}, ${sanMiguelLocation.province}`

    temp.innerHTML = `${weather.temp}°C`;
    minTemp.innerHTML = `${weather.tempDesc}`;
    humidity.innerHTML = `${weather.humidity}%`;
    pressure.innerHTML = `${weather.pressure}hPa`;
    visibility.innerHTML = `${weather.visibility}km`;
    windSpeed.innerHTML = `${weather.wind_speed}Km`;
    windDeg.innerHTML = `${weather.wing_deg}`;
    description.innerHTML = `${weather.description}`;





  }
  document.addEventListener("DOMContentLoaded", main)