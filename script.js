$(document).ready(function () {
    let lat;
    let long;

    if (navigator.geolocation) {

        navigator.geolocation.getCurrentPosition(function (position) {

            lat = position.coords.latitude;
            long = position.coords.longitude;

            const api = 'https://fcc-weather-api.glitch.me/api/current?lat=' + lat + '&lon=' + long + '';

            $.getJSON(api, function (responce) {

                let celsius = responce.main.temp;
                let farenheit = (celsius * 1.8) + 32;

                let location = responce.name;

                $('.weather__location-point').html(location);
                $('.weather__temperature-point').html(Math.floor(celsius));
                $('.weather__description').html(responce.weather[ 0 ].description);
                $('.weather__location-type').attr('id', responce.weather[ 0 ].main);
                $('.weather__temperature').on('click', function () {
                    if ($('.teweather__temperature-pointmp').html() == (Math.floor(celsius))) {
                        $('.weather__temperature-point').html(Math.floor(farenheit));
                        $('.weather__temperature-type').html('°F');

                    } else {
                        $('.weather__temperature-point').html(Math.floor(celsius));
                        $('.weather__temperature-type').html('°C');
                    }
                });

                //SETTING UP THE ICON 
                let icons = new Skycons({
                    "color": "white"
                });

                icons.set("Clear", Skycons.CLEAR_DAY);
                icons.set("Clear-night", Skycons.CLEAR_NIGHT);
                icons.set("Partly-cloudy-day", Skycons.PARTLY_CLOUDY_DAY);
                icons.set("Partly-cloudy-night", Skycons.PARTLY_CLOUDY_NIGHT);
                icons.set("Clouds", Skycons.CLOUDY);
                icons.set("Rain", Skycons.RAIN);
                icons.set("Sleet", Skycons.SLEET);
                icons.set("Snow", Skycons.SNOW);
                icons.set("Wind", Skycons.WIND);
                icons.set("Fog", Skycons.FOG);
                icons.play();

            });
        });
    }
});