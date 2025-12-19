// calling/set default value from api 
function getWeather(cityName) {
    const city_name = "New Delhi";
    const state_code = "DL";
    const country_code = "IN";
    fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city_name},${state_code},${country_code}&limit=1&appid=86172535ea5859db60396039ab393716`)
    .then(response => response.json())
    .then(result => {
        const latitude = result[0].lat;
        const longitude = result[0].lon;

        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=86172535ea5859db60396039ab393716`)
        .then(response => response.json())
        .then(result2 => {
            const temp = result2.main.temp;
            const weather = result2.weather[0].description;
            const feels_like = result2.main.feels_like;

            const wind_speed = result2.wind.speed;
            const humidity = result2.main.humidity;
            const air_cond = result2.main.pressure;
            const name = result2.name;
            const cntry = result2.sys.country;

            const Celsius=(temp - 273.15)
            console.log("Temperature : ",Celsius.toFixed(2)+" °C")

            // const Celsius=(temp - 273.15) // Celsius=Kelvin−273.15
            document.getElementById("temp").innerHTML = Celsius.toFixed(2)+" °C";
            document.getElementById("weather_desc").innerHTML = weather;
            const feels_like_cel = (feels_like - 273.15)
            document.getElementById("feels_like").innerHTML = ("Feels like "+feels_like_cel.toFixed(2)+" °C")
            document.getElementById('wind_speed').innerHTML = (Math.round(wind_speed*3.6))+" km/h";  // km/h=m/s×3.6
            document.getElementById("humidity").innerHTML = (humidity+" %")
            document.getElementById("pressure").innerHTML = air_cond+" hPa";
            document.getElementById("location").innerHTML = `${name} ,${cntry}`;

            if(weather === "clear sky"){  //Shillong
                document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-cloud-sun" style="color: white"></i>';
            }else if(weather == "fog" || "mist"){
                document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-cloud" style="color: white"></i>'
            }else if(weather == "rainy"){
                document.getElementById("sun_logo").innerHTML ='<i class="fa-solid fa-cloud-sun-rain" style="color:white;"></i>';
            }else{
                document.getElementById("sun_logo").innerHTML = '🌤';
            }
        })
    })
    .catch(error => {
      console.log("Error:", error);
    });
}


// get the seaching data
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

    const temp = result2.main.temp;
    const weather = result2.weather[0].description;
    const feels_like = result2.main.feels_like;

    const wind_speed = result2.wind.speed;
    const humidity = result2.main.humidity;
    const air_cond = result2.main.pressure;
    const name = result2.name;
    const cntry = result2.sys.country;

    
    

    // console.log("temp : ",temp)
    // console.log("weather : ",weather)
    // console.log("feels_like : ",feels_like)
    // console.log("wind_speed : ",wind_speed)
    // console.log("humidity : ",humidity)
    // console.log("Air condition : ",air_cond)
    // console.log("city : ",name)
    // console.log("counrty : ",cntry)


    const Celsius=(temp - 273.15)
    console.log("Temperature : ",Celsius.toFixed(2)+" °C")

    const container = document.getElementById("output_result")
    // const Celsius=(temp - 273.15) // Celsius=Kelvin−273.15
    document.getElementById("temp").innerHTML = Celsius.toFixed(2)+" °C";
    document.getElementById("weather_desc").innerHTML = weather;
    const feels_like_cel = (feels_like - 273.15)
    document.getElementById("feels_like").innerHTML = ("Feels like "+feels_like_cel.toFixed(2)+" °C")
    document.getElementById('wind_speed').innerHTML = (Math.round(wind_speed*3.6))+" km/h";  // km/h=m/s×3.6
    document.getElementById("humidity").innerHTML = (humidity+" %")
    document.getElementById("pressure").innerHTML = air_cond+" hPa";
    document.getElementById("location").innerHTML = `${name} ,${cntry}`;

    if(weather === "clear sky"){                         //Shillong
        document.body.className = "";
        document.body.classList.add("bg-clear_sky") 
        document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-cloud-sun" style="color: white"></i>';

    }else if(weather === "fog" || weather === "mist"){                //RANCHI, GURUGRAM
        document.body.className = "";
        document.body.classList.add("bg-FOG")
        document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-cloud" style="color: white"></i>'
        
    }else if(weather === "rainy" || weather === "overcast clouds" || weather === "broken clouds"){
        document.body.className = "";
        document.body.classList.add("bg-rainy_sky")
        document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-cloud-sun-rain" style="color: white;"></i>';

    }else{
        document.getElementById("sun_logo").innerHTML = '<i class="fa-solid fa-sun" style="color: white"></i>'
    }

}

fetchData()
