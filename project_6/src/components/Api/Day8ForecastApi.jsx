export default function Day8ForecastApi(location) {
    return fetch(`http://api.weatherapi.com/v1/forecast.json?key=3d4cb896c45b4cce9d5161635261205&q=${location}&days=8`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}