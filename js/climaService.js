import { createElementFromHTML } from './Util.js'

const main = async () => {

    const fetchURL = async (url) => {
      const res = await fetch(`https://weatherservices.herokuapp.com/api/${url}`)
      return res.json()
    }


    const { locations: [sanMiguelLocation] } = await fetchURL("locations")
    const wheaterDataSanMiguel = await fetchURL(`weather/${sanMiguelLocation.state_id}`)
    const {item : { weather }} = wheaterDataSanMiguel
    const {forecast:{ forecast: {0: saturday, 1: sunday, 2: monday, 3: tuesday} }} = wheaterDataSanMiguel.item
    const forecast = [saturday, sunday, monday, tuesday]

    const extForecast = () => {
      return forecast.map((day, i) => {
        return `
        <div class="forecast-extend-item">
        
          <div class="forecast-inner-item">
          <span class="forecast-detail-item-date"><p id="date-${i}">${day.date}</p></span>
            <span class="forecast-detail-item">Temp min:<p id="min-temp-${i}">${day.temp_min ? `${day.temp_min}°C` : " ? °C " }</p></span>
            <span class="forecast-detail-item">Temp max:<p id="max-temp-${i}">${day.temp_max ? `${day.temp_max}°C` : " ? °C "}</p></span>
          </div>
        </div>
      `
      })
    }
    const forecastContainer = document.getElementById('extend-forecast-main-container')
    extForecast().forEach(forecast => forecastContainer.appendChild(createElementFromHTML(forecast)))
    
    const temp = document.getElementById('tempeture')
    const minTemp = document.getElementById('min-tempeture')
    const humidity = document.getElementById('humidity')
    const pressure = document.getElementById('pressure')
    const visibility = document.getElementById('visibility')
    const windSpeed = document.getElementById('wind_speed')
    const windDeg = document.getElementById('wind_deg')
    const description = document.getElementById('description')
    const image = document.getElementById('image')

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
    image.src = '/img/sun.svg'

    const { alerts: alertsDayOne } = await fetchURL("alerts/byDay/1")
    const { alerts: alertsDayTwo } = await fetchURL("alerts/byDay/2")
    const { alerts: alertsDayThree } = await fetchURL("alerts/byDay/3")

    const alerts = [alertsDayOne, alertsDayTwo, alertsDayThree]
    
    const alertsContainer = document.getElementById('alerts-main-container')
    let alertsToShow = []
    alerts.forEach(day => {
      let alertsByDay = day.map(alert => {
        const zones = Object.keys(alert.zones)
        return `<div class="alert-item">
        <div class="date-and-hour-alert">Fecha: ${alert.date}&nbsp;&nbsp;&nbsp;Comienza: ${alert.hour.slice(0,5)}</div>
        <h1 class="alert-subtitle">Descripcion: </h1>
        <p>${alert.description ? alert.description : "" }</p>
        <h1 class="alert-subtitle">Zonas afectadas: </h1>
        <p>${zones.map(zone => alert.zones[zone])}</p>
      </div>`
      })
      alertsToShow = [...alertsToShow, ...alertsByDay]
    })
    alertsToShow.forEach(alert => alertsContainer.appendChild(createElementFromHTML(alert)))
  }
  document.addEventListener("DOMContentLoaded", main)