"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-Unit6-03-HTML/sw.js", {
    scope: "/ICS2O-Unit6-03-HTML/",
  })
}

;("use strict")

// this is where I got async and await
// https://www.w3schools.com/js/js_async.asp
const weather2 = async (URLAddress) => {
  try {
    const request = await fetch(URLAddress)
    const jsonData = await request.json()
    let tempature1 = jsonData.main.temp
    let tempature2 = 0
    const feeling = jsonData.weather[0]
    const image = feeling.icon
    tempature2 = tempature1 - 273.15

    console.log(jsonData.weather)
    document.getElementById("theImage").innerHTML =
      "<img src='https://openweathermap.org/img/wn/" +
      image +
      "@2x.png' alt='Icon' width='10%'><br><h5>"
    ;(">")

    // this is where I got catch (err)
    // https://www.w3schools.com/js/js_errors.asp
    document.getElementById("theTemp").innerHTML =
      "The tempurature outside is " + tempature2.toFixed(2) + " °C!"
  } catch (err) {
    console.log(err)
  }
}

weather2(
  "https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5"
)
