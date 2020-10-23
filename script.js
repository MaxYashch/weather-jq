window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector('.temperature__description');
    let temperatureDegree = document.querySelector('.temperature__degree');
    let locationTimezone = document.querySelector('.location__timezone');


    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            var api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';
            // console.log(typeof api);

            fetch(api)
                .then(response => {
                    // console.log(response);
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    const { temperature, summary } = data.currently;
                    // set DOM elements from API
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                })
        });


    } else {
        h1.textContent = 'Does not work because ....'
    }
});