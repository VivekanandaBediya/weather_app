

async function fetchData(){
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const country = document.getElementById("country").value;

    // console.log("city : ",city)
    // console.log("state : ",state)
    // console.log("country : ",country)

    const city_name = city;
    const state_code = state;
    const country_code = country;

    const resp1 = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=1&appid=86172535ea5859db60396039ab393716`)
    const result = await resp1.json();
    // console.log(result)

    const latitude = result[0].lat;
    const longitude = result[0].lon;

    // console.log("lat : ",lat)
    // console.log("lon : ",lon)

    const resp2 = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=86172535ea5859db60396039ab393716`)

    const result2 = await resp2.json()
    console.log(result2)

    console.log(Object.keys(result2))
    const time_zone = result2.timezone;
    const temp = result2.main.temp;
    const feels_like = result2.main.feels_like;
    const temp_min = result2.main.temp_min;
    const temp_max = result2.main.temp_max;
    const humidity = result2.main.humidity;
    const air_cond = result2.main.pressure;
    const sunrise = result2.sys.sunrise;
    const sunset = result2.sys.sunset;
    const name = result2.name;
    const cntry = result2.sys.country;
    const weather = result2.weather[0].description;
    const wind_speed = result2.wind.speed;
    

    console.log("city : ",name)
    console.log("counrty : ",cntry)
    console.log("time_zone : ",time_zone)
    console.log("temp : ",temp)
    console.log("feels_like : ",feels_like)
    console.log("temp_min : ",temp_min)
    console.log("temp_max : ",temp_max)
    console.log("sunrise : ",sunrise)
    console.log("sunset : ",sunset)
    console.log("weather : ",weather)
    console.log("wind_speed : ",wind_speed)
    console.log("humidity : ",humidity)
    console.log("Air condition : ",air_cond)


    const curr_date = new Date(time_zone*1000)
    console.log(curr_date)

    const container = document.getElementById("output_result")
    
    document.getElementById("sunrise").innerHTML = sunrise;
    document.getElementById("sunset").innerHTML = sunset;
    const Celsius=(temp - 273.15) // Celsius=Kelvin−273.15
    document.getElementById("temp").innerHTML = Celsius.toFixed(2)+" °C";
    document.getElementById("city_name").innerHTML = name;
    document.getElementById("country_name").innerHTML = cntry;
    document.getElementById("weather_desc").innerHTML = weather;
    document.getElementById('wind_speed').innerHTML = (Math.round(wind_speed*3.6))+" km/h";  // km/h=m/s×3.6
    document.getElementById("humidity").innerHTML = (humidity+" %")
    const feels_like_cel = (feels_like - 273.15)
    document.getElementById("feels_like").innerHTML = (feels_like_cel.toFixed(2)+" °C")
    document.getElementById("pressure").innerHTML = air_cond+" hPa"



}

fetchData()