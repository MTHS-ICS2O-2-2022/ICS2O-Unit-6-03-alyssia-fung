package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"net/http"
)

const (
	apiKey     = "YOUR_API_KEY" // Replace with your Weather Network API key
	weatherURL = "https://api.weather.com/v3/wx/conditions/current"
	latitude   = "45.4211435"  // Replace with desired latitude
	longitude  = "-75.6900574" // Replace with desired longitude
)

type WeatherResponse struct {
	Temperature float64 `json:"temperature"`
}

func main() {
	url := fmt.Sprintf("%s?apiKey=%s&language=en-US&format=json&geocode=%s,%s", weatherURL, apiKey, latitude, longitude)
	resp, err := http.Get(url)
	if err != nil {
		log.Fatal("Failed to fetch weather data:", err)
	}
	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatal("Failed to read response body:", err)
	}

	var weatherData WeatherResponse
	if err := json.Unmarshal(body, &weatherData); err != nil {
		log.Fatal("Failed to parse JSON response:", err)
	}

	temperatureC := weatherData.Temperature
	temperatureC -= 273.15

	fmt.Printf("The temperature outside is %.2f °C!\n", temperatureC)

	fmt.Println("\nDone.")
}
