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
  const fetchTP_API = async (url) => {
    const res = await fetch(`https://weatherservices.herokuapp.com/api/${url}`)
    return res.json()
  }
  const {help: {welcome, urls: {GET:URLS}}} = await loadFetch();
  console.log(URLS)


  const {states: weatherStates} = await fetchURL("weatherstates")
  console.log(weatherStates);

  const { locations, locations: [sanMiguelLocation] } = await fetchURL("locations")
  const wheaterDataSanMiguel = await fetchURL(`weather/${sanMiguelLocation.state_id}`)
  //console.table(sanMiguelLocation)

  const {name, province} = wheaterDataSanMiguel
  console.log(wheaterDataSanMiguel)

  const { alerts: alertsDayOne } = await fetchURL("alerts/byDay/1")
  const { alerts: alertsDayTwo } = await fetchURL("alerts/byDay/2")
  const { alerts: alertsDayThree } = await fetchURL("alerts/byDay/3")

  //const weather = wheaterSanMiguel.item.weather
  const {item : { weather }} = wheaterDataSanMiguel
  console.table(weather)
  const {forecast:{ forecast: {0: saturday, 1: sunday, 2: monday, 3: tuesday} }} = wheaterDataSanMiguel.item
  
  const forecast = [saturday, sunday, monday, tuesday]
  console.log(forecast)
}
document.addEventListener("DOMContentLoaded", main)
