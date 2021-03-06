import axios from 'axios'

const API_KEY = '742d065cca2b6ed9c71d3cf07e814aa0'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url)

  // console.log('r   equest:', request)
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
