alert('ruk ja');
async function showWeather(){
    let latitude = 15.3333;
    let longitue = 74.0833;

    const response = fetch('https://api.openweathermap.org/data/2.5/weathe?q=${city}&appid=${API_KEY}&units=metric');
    
}