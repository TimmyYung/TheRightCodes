window.addEventListener("load", () =>{
    let long;
    let lat;
    let temerpatureDescription = document.querySelector(".temperature-description");
    let temerpatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    // If the user allows location 
    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition
        (position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            
            const proxy ="http://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/d3f7b2ce4dbccdbfa674febd498c839a/${lat},${long}`;

        // Gets the information then does something with the data
        fetch(api)
        .then(response =>{
            return response.json();
        })
        .then(data => {
            const {temperature, summary} = data.currently;
            // Set DOM elements from the API
            temperatureDegree.textContent = temperature;
            temperatureDescription.textContent = summary;
            locationTimezone.textContent = data.timezone;
            });
        });
    }

    else{
        h1.textContent = "Please enable location."
    }
});