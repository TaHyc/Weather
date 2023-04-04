let tempBlock = document.querySelector('.tempBlock')
let tempLogo = document.querySelector('.tempLogo')
let mainTemp = document.querySelector('.mainTemp')
let minTemp = document.querySelector('.feelsLike')
let cityBlock = document.querySelector('#city')
let imgBlock = document.querySelector('.img-block')
let speed = document.querySelector('#speed')
let wind = document.querySelector('#wind')
let clouds = document.querySelector('#clouds')
let cloud = document.querySelector('#cloud')
let searchInp = document.querySelector('.search')
let lastupdate = document.querySelector('#clouds')

let city = 'Minsk'
//   <img src='https://i.gifer.com/fzt2.gif' width="200">
// <img src='https://i.gifer.com/604.gif'  width="200">

document.addEventListener('keydown', (e) => {
if(e.key === 'Enter') {
    let value = searchInp.value;
    if(!value) return false;
    city = value;
    init()
    searchInp.value = ''
}
})

function init() {
fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&lang=ru&units=metric&appid=8ee1df6881a57a15e3126ca9c1746f58`)
.then((resp) => {
	return resp.json()
})
.then((data) => {

if(Math.floor(data.main.temp)==0){
tempLogo.innerHTML =`<img src="https://cdn2.iconfinder.com/data/icons/weather-color-2/500/weather-30-256.png" id='img_pogodi'>`}

else if(Math.floor(data.main.temp)<0){
tempLogo.innerHTML =`<img src="https://cdn-icons-png.flaticon.com/512/1409/1409310.png" id='img_pogodi'>`
}

else{
tempLogo.innerHTML =`<img src="https://cdn4.iconfinder.com/data/icons/the-weather-is-nice-today/64/weather_3-256.png" id='img_pogodi'>`
}

mainTemp.textContent=`${Math.floor(data.main.temp)}°`
minTemp.textContent=`Ощущается как ${Math.floor(data.main.feels_like)}°`
wind.innerHTML = `Скорость ветра: ${Math.floor(data.wind.speed)} м/с`
cloud.innerHTML = `Облачность: ${data.clouds.all}%`
lastupdate.innerHTML = `${data.weather[0].description}`
cityBlock.textContent = `${data.name}`
    console.log(data)
    let date = new Date;
    console.log('перезапуск')
})
.catch(() => {
    alert('This city not found')
    city = 'London';
    init()
    searchInp.value = ''
})
}

init()