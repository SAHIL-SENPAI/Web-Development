document.querySelector("button").addEventListener('click',(event)=>{
    const place = document.getElementById("location-input").value;
    const promise = fetch(`http://api.weatherapi.com/v1/current.json?key=2c95a84b196f4d8ab5c21033250702&q=${place}&aqi=yes`)
    

    function updatedata(data){
        const temprature = document.getElementById("two");
        const wind_speed = document.getElementById("three");
        const location = document.getElementById("four");
        const iccon = document.getElementById("one");

        location.innerHTML = `${data.location.country}, ${data.location.name}`
        temprature.innerHTML = `${data.current.temp_c}°C`;
        wind_speed.innerHTML = `Wind Speed: ${data.current.wind_kph} km/h`;
        iccon.style.background = `url(${data.current.condition.icon})`
        iccon.style.backgroundRepeat = "no-repeat";
        iccon.style.backgroundSize = "110%";

        
        const hummidity = document.getElementById("sixth");
        
        const air_quaality = document.getElementById("seventh");
        
        const skky = document.getElementById("five");
        
        hummidity.innerHTML =`Humidity: ${data.current.humidity}` ;
        air_quaality.innerHTML =`Air Quality: ${data.current.air_quality.co} ` ;
        skky.innerHTML = `Weather: ${data.current.condition.text}` ;
    }
    
    
    promise
    .then((response => response.json()))
    .then(data => updatedata(data));
})