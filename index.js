const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric";
        const apikey = "fa8d35eee4eeb0b41572d6ae2733f176";
        
        // adding eventListner on search btn
        const searchBtn = document.querySelector('.s-btn');
        // on click
        searchBtn.addEventListener('click',()=>{
            const city = document.querySelector('.city-input').value;
            document.querySelector('.city-input').value='';
            checkWeather(city);
        });
        // on enter
        document.body.addEventListener('keydown',(Event)=>{
            if(Event.key === 'Enter'){
                const city = document.querySelector('.city-input').value;
                document.querySelector('.city-input').value='';
                checkWeather(city);
            }
        });
        async function checkWeather(city){
            const response = await fetch(apiurl+`&appid=${apikey}`+`&q=${city}`);
            let data = await response.json();
           
            // city
            document.querySelector('.city-name').innerHTML = data.name;
            // temperature
            document.querySelector('.temp').innerHTML=Math.round(data.main.temp)+'°c';
            // humidity
            const humidity1 = data.main.humidity+'%';
            const windSpeed = data.wind.speed+'km/h';
            const htmlFoot = `
            <div class="humidity">
                <img class="foot-img" src="images/humidity.png" alt="">
                <div class="foot-info">
                    <span class="foot-val1 humidity">${humidity1}</span>
                    <span class="foot-val2">Humidity</span>
                </div>
            </div>
            <div class="wind-speed">
                <img class="foot-img" src="images/wind.png" alt="">
                <div class="foot-info">
                    <span class="foot-val1">${windSpeed}</span>
                    <span class="foot-val2">Wind Speed</span>
                </div>
            </div>`;
            document.querySelector('.foot1').innerHTML=htmlFoot;
            // image
            let iconW = data.weather[0].icon;
            let weatherCon = data.weather[0].main;
            let htmlWeatherCondition="";
            if(weatherCon=='Clouds'){
                htmlWeatherCondition=`<img class="weather-img" src="images/clouds.png" >`;
            }else if(weatherCon=='Clear'){
                htmlWeatherCondition=`<img class="weather-img" src="images/clear.png" >`;
            }else if(weatherCon=='Rain'){
                htmlWeatherCondition=`<img class="weather-img" src="images/rain.png" >`;
            }else if(weatherCon=='Drizzle'){
                htmlWeatherCondition=`<img class="weather-img" src="images/drizzle.png" >`;
            }else if(weatherCon=='Mist'){
                htmlWeatherCondition=`<img class="weather-img" src="images/mist.png" >`;
            }else if(weatherCon=='Snow'){
                htmlWeatherCondition=`<img class="weather-img" src="images/snow.png" >`;
            }
            else if(weatherCon=='Smoke'){
                htmlWeatherCondition=`<img class="weather-img" src="images/smoke.png" >`;
            }
            document.querySelector('.weather-condition').innerHTML=htmlWeatherCondition;
        }
        