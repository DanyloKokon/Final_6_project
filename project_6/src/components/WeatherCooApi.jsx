export default function WeatherCoordinatesApi(location) {
    return fetch(`http://api.weatherapi.com/v1/forecast.json?key=2700dff258164b39883163335262804&q=${location}&days=3`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}