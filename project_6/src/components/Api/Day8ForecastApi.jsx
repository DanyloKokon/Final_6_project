export default function Day8ForecastApi(location , key) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=8`)
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();

        })
}