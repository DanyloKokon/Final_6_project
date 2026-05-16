export default function WeatherCoordinatesApi(location) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=3d4cb896c45b4cce9d5161635261205&q=${location}&days=3`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}