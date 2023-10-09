const btnFlagPl = document.querySelector('.pl')
const iconPl = document.querySelector('.icon-pl')
const btnFlagEng = document.querySelector('.eng')
const iconEng = document.querySelector('.icon-eng')
const currentH2 = document.querySelector('.current-h2')
const forecastH2 = document.querySelector('.forecast-h2')

const input = document.querySelector('#search-input')
const searchBtn = document.querySelector('.fa-solid')

const cityName = document.querySelector('.city')
const currentData = document.querySelector('.current-data')
const currentWeather = document.querySelector('.current-weather')
const temperature = document.querySelector('.temperature')
const currentPictures = document.querySelector('.current-pic')

// forecast variables

const dayOne = document.querySelector('.day-one')
const picsOne = document.querySelector('.pics-one')
const tempOne = document.querySelector('.temp-one')
const weatherOne = document.querySelector('.weather-day-one')

const dayTwo = document.querySelector('.day-two')
const picsTwo = document.querySelector('.pics-two')
const tempTwo = document.querySelector('.temp-two')
const weatherTwo = document.querySelector('.weather-day-two')

const dayThree = document.querySelector('.day-three')
const picsThree = document.querySelector('.pics-three')
const tempThree = document.querySelector('.temp-three')
const weatherThree = document.querySelector('.weather-day-three')

const changeLanguagePl = () => {
	iconEng.classList.remove('active-flag')
	iconPl.classList.add('active-flag')
	getWeatherPl()
	getForecastPl()
	currentH2.textContent = 'Aktualna pogoda'
	forecastH2.textContent = '3 dniowa prognoza pogody'
	input.placeholder = 'Wpisz miejscowość'
}

const changeLanguageEng = () => {
	iconEng.classList.add('active-flag')
	iconPl.classList.remove('active-flag')
	getWeather()
	getForecast()
	currentH2.textContent = 'Current Weather'
	forecastH2.textContent = '3 day weather forecast'
	input.placeholder = 'Enter the city name'
}

const chooseLanguage = () => {
	if(iconEng.classList.contains('active-flag')) {
		changeLanguageEng()
	} else {
		changeLanguagePl()
	}
}

const getWeather = () => {
	const city = input.value || 'London'

	const API_KEY = 'a33ad9a744f7479a84a80322231408'
	const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=no`

	axios.get(API_URL).then(res => {

		const temp = res.data.current.temp_c
		const time = res.data.location.localtime
		const weather = res.data.current.condition.text
		const code = res.data.current.condition.code
		const day = res.data.current.is_day

		cityName.textContent = res.data.location.name
		currentData.textContent = time
		currentWeather.textContent = weather
		temperature.textContent = Math.floor(temp) + '°C'
		input.value = ''

		if (day == 0) {
			currentPictures.setAttribute('src', './img/moon.png')
		} else if (code >= 1000 && code < 1003) {
			currentPictures.setAttribute('src', './img/sunny.png')
		} else if (code >= 1003 && code < 1006) {
			currentPictures.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (code >= 1006 && code < 1030) {
			currentPictures.setAttribute('src', './img/clouds.png')
		} else if (code >= 1030 && code < 1063) {
			currentPictures.setAttribute('src', './img/fog.png')
		} else if (code >= 1063 && code < 1066) {
			currentPictures.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (code >= 1066 && code < 1087) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1087 && code < 1114) {
			currentPictures.setAttribute('src', './img/storm_and_rain.png')
		} else if (code >= 1180 && code < 1201) {
			currentPictures.setAttribute('src', './img/rainy.png')
		} else if (code >= 1204 && code < 1210) {
			currentPictures.setAttribute('src', './img/rain_and_snow.png')
		} else if (code >= 1213 && code < 1225) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1240 && code < 1246) {
			currentPictures.setAttribute('src', './img/rainy.png')
		} else if (code >= 1249 && code < 1252) {
			currentPictures.setAttribute('src', './img/rain_and_snow.png')
		} else if (code >= 1255 && code < 1258) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1273 && code < 1279) {
			currentPictures.setAttribute('src', './img/storm_and_rain.png')
		} else {
			currentPictures.setAttribute('src', './img/mix.png')
		}
	})
}

getWeather()

// pl version

const getWeatherPl = () => {
	const city = input.value || 'Warszawa'

	const API_KEY = 'a33ad9a744f7479a84a80322231408'
	const API_URL = `https://api.weatherapi.com/v1/current.json?key=${API_KEY}&lang=pl&q=${city}&aqi=no`

	axios.get(API_URL).then(res => {

		const temp = res.data.current.temp_c
		const time = res.data.location.localtime
		const weather = res.data.current.condition.text
		const code = res.data.current.condition.code
		const day = res.data.current.is_day

		cityName.textContent = res.data.location.name
		currentData.textContent = time
		currentWeather.textContent = weather
		temperature.textContent = Math.floor(temp) + '°C'
		input.value = ''

		if (day == 0) {
			currentPictures.setAttribute('src', './img/moon.png')
		} else if (code >= 1000 && code < 1003) {
			currentPictures.setAttribute('src', './img/sunny.png')
		} else if (code >= 1003 && code < 1006) {
			currentPictures.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (code >= 1006 && code < 1030) {
			currentPictures.setAttribute('src', './img/clouds.png')
		} else if (code >= 1030 && code < 1063) {
			currentPictures.setAttribute('src', './img/fog.png')
		} else if (code >= 1063 && code < 1066) {
			currentPictures.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (code >= 1066 && code < 1087) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1087 && code < 1114) {
			currentPictures.setAttribute('src', './img/storm_and_rain.png')
		} else if (code >= 1180 && code < 1201) {
			currentPictures.setAttribute('src', './img/rainy.png')
		} else if (code >= 1204 && code < 1210) {
			currentPictures.setAttribute('src', './img/rain_and_snow.png')
		} else if (code >= 1213 && code < 1225) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1240 && code < 1246) {
			currentPictures.setAttribute('src', './img/rainy.png')
		} else if (code >= 1249 && code < 1252) {
			currentPictures.setAttribute('src', './img/rain_and_snow.png')
		} else if (code >= 1255 && code < 1258) {
			currentPictures.setAttribute('src', './img/snowfall.png')
		} else if (code >= 1273 && code < 1279) {
			currentPictures.setAttribute('src', './img/storm_and_rain.png')
		} else {
			currentPictures.setAttribute('src', './img/mix.png')
		}
	})
}

// forecast function

const getForecast = () => {
	const city = input.value || 'London'
	const API_KEY = 'a33ad9a744f7479a84a80322231408'
	const API_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${city}&days=7&aqi=no&alerts=no`

	axios.get(API_FORECAST).then(res => {

		const dayOneForecast = res.data.forecast.forecastday[0].date
		const dayOneTemp = res.data.forecast.forecastday[0].day.maxtemp_c
		const dayOneWeather = res.data.forecast.forecastday[0].day.condition.text
		const dayOneCode = res.data.forecast.forecastday[0].day.condition.code
		dayOne.textContent = dayOneForecast
		weatherOne.textContent = dayOneWeather
		tempOne.textContent = Math.floor(dayOneTemp) + '°C'

		const dayTwoForecast = res.data.forecast.forecastday[1].date
		const dayTwoTemp = res.data.forecast.forecastday[1].day.maxtemp_c
		const dayTwoWeather = res.data.forecast.forecastday[1].day.condition.text
		const dayTwoCode = res.data.forecast.forecastday[1].day.condition.code
		dayTwo.textContent = dayTwoForecast
		weatherTwo.textContent = dayTwoWeather
		tempTwo.textContent = Math.floor(dayTwoTemp) + '°C'

		const dayThreeForecast = res.data.forecast.forecastday[2].date
		const dayThreeTemp = res.data.forecast.forecastday[2].day.maxtemp_c
		const dayThreeWeather = res.data.forecast.forecastday[2].day.condition.text
		const dayThreeCode = res.data.forecast.forecastday[2].day.condition.code
		dayThree.textContent = dayThreeForecast
		weatherThree.textContent = dayThreeWeather
		tempThree.textContent = Math.floor(dayThreeTemp) + '°C'

		// day one icons

		if (dayOneCode >= 1000 && dayOneCode < 1003) {
			picsOne.setAttribute('src', './img/sunny.png')
		} else if (dayOneCode >= 1003 && dayOneCode < 1006) {
			picsOne.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayOneCode >= 1006 && dayOneCode < 1030) {
			picsOne.setAttribute('src', './img/clouds.png')
		} else if (dayOneCode >= 1030 && dayOneCode < 1063) {
			picsOne.setAttribute('src', './img/fog.png')
		} else if (dayOneCode >= 1063 && dayOneCode < 1066) {
			picsOne.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayOneCode >= 1066 && dayOneCode < 1087) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1087 && dayOneCode < 1114) {
			picsOne.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayOneCode >= 1180 && dayOneCode < 1201) {
			picsOne.setAttribute('src', './img/rainy.png')
		} else if (dayOneCode >= 1204 && dayOneCode < 1210) {
			picsOne.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayOneCode >= 1213 && dayOneCode < 1225) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1240 && dayOneCode < 1246) {
			picsOne.setAttribute('src', './img/rainy.png')
		} else if (dayOneCode >= 1249 && dayOneCode < 1252) {
			picsOne.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayOneCode >= 1255 && dayOneCode < 1258) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1273 && dayOneCode < 1279) {
			picsOne.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsOne.setAttribute('src', './img/mix.png')
		}

		// day two icons

		if (dayTwoCode >= 1000 && dayTwoCode < 1003) {
			picsTwo.setAttribute('src', './img/sunny.png')
		} else if (dayTwoCode >= 1003 && dayTwoCode < 1006) {
			picsTwo.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayTwoCode >= 1006 && dayTwoCode < 1030) {
			picsTwo.setAttribute('src', './img/clouds.png')
		} else if (dayTwoCode >= 1030 && dayTwoCode < 1063) {
			picsTwo.setAttribute('src', './img/fog.png')
		} else if (dayTwoCode >= 1063 && dayTwoCode < 1066) {
			picsTwo.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayTwoCode >= 1066 && dayTwoCode < 1087) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1087 && dayTwoCode < 1114) {
			picsTwo.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayTwoCode >= 1180 && dayTwoCode < 1201) {
			picsTwo.setAttribute('src', './img/rainy.png')
		} else if (dayTwoCode >= 1204 && dayTwoCode < 1210) {
			picsTwo.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayTwoCode >= 1213 && dayTwoCode < 1225) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1240 && dayTwoCode < 1246) {
			picsTwo.setAttribute('src', './img/rainy.png')
		} else if (dayTwoCode >= 1249 && dayTwoCode < 1252) {
			picsTwo.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayTwoCode >= 1255 && dayTwoCode < 1258) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1273 && dayTwoCode < 1279) {
			picsTwo.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsTwo.setAttribute('src', './img/mix.png')
		}

		//day three icons

		if (dayThreeCode >= 1000 && dayThreeCode < 1003) {
			picsThree.setAttribute('src', './img/sunny.png')
		} else if (dayThreeCode >= 1003 && dayThreeCode < 1006) {
			picsThree.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayThreeCode >= 1006 && dayThreeCode < 1030) {
			picsThree.setAttribute('src', './img/clouds.png')
		} else if (dayThreeCode >= 1030 && dayThreeCode < 1063) {
			picsThree.setAttribute('src', './img/fog.png')
		} else if (dayThreeCode >= 1063 && dayThreeCode < 1066) {
			picsThree.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayThreeCode >= 1066 && dayThreeCode < 1087) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1087 && dayThreeCode < 1114) {
			picsThree.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayThreeCode >= 1180 && dayThreeCode < 1201) {
			picsThree.setAttribute('src', './img/rainy.png')
		} else if (dayThreeCode >= 1204 && dayThreeCode < 1210) {
			picsThree.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayThreeCode >= 1213 && dayThreeCode < 1225) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1240 && dayThreeCode < 1246) {
			picsThree.setAttribute('src', './img/rainy.png')
		} else if (dayThreeCode >= 1249 && dayThreeCode < 1252) {
			picsThree.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayThreeCode >= 1255 && dayThreeCode < 1258) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1273 && dayThreeCode < 1279) {
			picsThree.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsThree.setAttribute('src', './img/mix.png')
		}
	})
}

getForecast()

// version forecast pl

const getForecastPl = () => {
	const city = input.value || 'Warszawa'
	const API_KEY = 'a33ad9a744f7479a84a80322231408'
	const API_FORECAST = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&lang=pl&q=${city}&days=7&aqi=no&alerts=no`

	axios.get(API_FORECAST).then(res => {

		const dayOneForecast = res.data.forecast.forecastday[0].date
		const dayOneTemp = res.data.forecast.forecastday[0].day.maxtemp_c
		const dayOneWeather = res.data.forecast.forecastday[0].day.condition.text
		const dayOneCode = res.data.forecast.forecastday[0].day.condition.code
		dayOne.textContent = dayOneForecast
		weatherOne.textContent = dayOneWeather
		tempOne.textContent = Math.floor(dayOneTemp) + '°C'

		const dayTwoForecast = res.data.forecast.forecastday[1].date
		const dayTwoTemp = res.data.forecast.forecastday[1].day.maxtemp_c
		const dayTwoWeather = res.data.forecast.forecastday[1].day.condition.text
		const dayTwoCode = res.data.forecast.forecastday[1].day.condition.code
		dayTwo.textContent = dayTwoForecast
		weatherTwo.textContent = dayTwoWeather
		tempTwo.textContent = Math.floor(dayTwoTemp) + '°C'

		const dayThreeForecast = res.data.forecast.forecastday[2].date
		const dayThreeTemp = res.data.forecast.forecastday[2].day.maxtemp_c
		const dayThreeWeather = res.data.forecast.forecastday[2].day.condition.text
		const dayThreeCode = res.data.forecast.forecastday[2].day.condition.code
		dayThree.textContent = dayThreeForecast
		weatherThree.textContent = dayThreeWeather
		tempThree.textContent = Math.floor(dayThreeTemp) + '°C'

		// day one icons

		if (dayOneCode >= 1000 && dayOneCode < 1003) {
			picsOne.setAttribute('src', './img/sunny.png')
		} else if (dayOneCode >= 1003 && dayOneCode < 1006) {
			picsOne.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayOneCode >= 1006 && dayOneCode < 1030) {
			picsOne.setAttribute('src', './img/clouds.png')
		} else if (dayOneCode >= 1030 && dayOneCode < 1063) {
			picsOne.setAttribute('src', './img/fog.png')
		} else if (dayOneCode >= 1063 && dayOneCode < 1066) {
			picsOne.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayOneCode >= 1066 && dayOneCode < 1087) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1087 && dayOneCode < 1114) {
			picsOne.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayOneCode >= 1180 && dayOneCode < 1201) {
			picsOne.setAttribute('src', './img/rainy.png')
		} else if (dayOneCode >= 1204 && dayOneCode < 1210) {
			picsOne.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayOneCode >= 1213 && dayOneCode < 1225) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1240 && dayOneCode < 1246) {
			picsOne.setAttribute('src', './img/rainy.png')
		} else if (dayOneCode >= 1249 && dayOneCode < 1252) {
			picsOne.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayOneCode >= 1255 && dayOneCode < 1258) {
			picsOne.setAttribute('src', './img/snowfall.png')
		} else if (dayOneCode >= 1273 && dayOneCode < 1279) {
			picsOne.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsOne.setAttribute('src', './img/mix.png')
		}

		// day two icons

		if (dayTwoCode >= 1000 && dayTwoCode < 1003) {
			picsTwo.setAttribute('src', './img/sunny.png')
		} else if (dayTwoCode >= 1003 && dayTwoCode < 1006) {
			picsTwo.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayTwoCode >= 1006 && dayTwoCode < 1030) {
			picsTwo.setAttribute('src', './img/clouds.png')
		} else if (dayTwoCode >= 1030 && dayTwoCode < 1063) {
			picsTwo.setAttribute('src', './img/fog.png')
		} else if (dayTwoCode >= 1063 && dayTwoCode < 1066) {
			picsTwo.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayTwoCode >= 1066 && dayTwoCode < 1087) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1087 && dayTwoCode < 1114) {
			picsTwo.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayTwoCode >= 1180 && dayTwoCode < 1201) {
			picsTwo.setAttribute('src', './img/rainy.png')
		} else if (dayTwoCode >= 1204 && dayTwoCode < 1210) {
			picsTwo.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayTwoCode >= 1213 && dayTwoCode < 1225) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1240 && dayTwoCode < 1246) {
			picsTwo.setAttribute('src', './img/rainy.png')
		} else if (dayTwoCode >= 1249 && dayTwoCode < 1252) {
			picsTwo.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayTwoCode >= 1255 && dayTwoCode < 1258) {
			picsTwo.setAttribute('src', './img/snowfall.png')
		} else if (dayTwoCode >= 1273 && dayTwoCode < 1279) {
			picsTwo.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsTwo.setAttribute('src', './img/mix.png')
		}

		//day three icons

		if (dayThreeCode >= 1000 && dayThreeCode < 1003) {
			picsThree.setAttribute('src', './img/sunny.png')
		} else if (dayThreeCode >= 1003 && dayThreeCode < 1006) {
			picsThree.setAttribute('src', './img/sunny_and_cloudy.png')
		} else if (dayThreeCode >= 1006 && dayThreeCode < 1030) {
			picsThree.setAttribute('src', './img/clouds.png')
		} else if (dayThreeCode >= 1030 && dayThreeCode < 1063) {
			picsThree.setAttribute('src', './img/fog.png')
		} else if (dayThreeCode >= 1063 && dayThreeCode < 1066) {
			picsThree.setAttribute('src', './img/sunny_and_rainy.png')
		} else if (dayThreeCode >= 1066 && dayThreeCode < 1087) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1087 && dayThreeCode < 1114) {
			picsThree.setAttribute('src', './img/storm_and_rain.png')
		} else if (dayThreeCode >= 1180 && dayThreeCode < 1201) {
			picsThree.setAttribute('src', './img/rainy.png')
		} else if (dayThreeCode >= 1204 && dayThreeCode < 1210) {
			picsThree.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayThreeCode >= 1213 && dayThreeCode < 1225) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1240 && dayThreeCode < 1246) {
			picsThree.setAttribute('src', './img/rainy.png')
		} else if (dayThreeCode >= 1249 && dayThreeCode < 1252) {
			picsThree.setAttribute('src', './img/rain_and_snow.png')
		} else if (dayThreeCode >= 1255 && dayThreeCode < 1258) {
			picsThree.setAttribute('src', './img/snowfall.png')
		} else if (dayThreeCode >= 1273 && dayThreeCode < 1279) {
			picsThree.setAttribute('src', './img/storm_and_rain.png')
		} else {
			picsThree.setAttribute('src', './img/mix.png')
		}
	})
}

const checkInput = () => {
	if (input.value !== '') {
		chooseLanguage()
	}
}

const enterCheck = e => {
	if (e.keyCode == 13) {
		checkInput()
		chooseLanguage()
	}
}

btnFlagPl.addEventListener('click', changeLanguagePl)
btnFlagEng.addEventListener('click', changeLanguageEng)
searchBtn.addEventListener('click', checkInput)
input.addEventListener('keydown', enterCheck)
