const main = async () => {
 
  const buttonLading = document.getElementById('button-landing')
  buttonLading.addEventListener('click', () => window.location = "/pages/catalogo.html")

  const loadFetch = async () => {
    const res = await fetch("https://weatherservices.herokuapp.com/api/")
    return res.json()
  }

  const fetchURL = async (url) => {
    const res = await fetch(`https://weatherservices.herokuapp.com/api/${url}`)
    return res.json()
  }

  const {help: {welcome, urls: {GET:URLS}}} = await loadFetch();
  console.log(URLS)
  const {states: weatherStates} = await fetchURL("weatherstates")
  const { locations, locations: [sanMiguel] } = await fetchURL("locations")
  const { alerts: alertsDayOne } = await fetchURL("alerts/byDay/1")
  const { alerts: alertsDayTwo } = await fetchURL("alerts/byDay/2")
  const { alerts: alertsDayThree } = await fetchURL("alerts/byDay/3")
  const {items: [weather]} = await fetchURL("weather")
  const {forecast:{ forecast: {0: saturday, 1: sunday, 2: monday, 3: tuesday} }} = weather
  const forecast = [saturday, sunday, monday, tuesday]
  console.log(forecast)
}
document.addEventListener("DOMContentLoaded", main)
