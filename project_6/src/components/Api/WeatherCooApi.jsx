export default function WeatherCoordinatesApi(location, key, setError) {
    return fetch(`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location}&days=3`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Weather API error! Status: ${res.status}`);
            }
            return res.json();
        })
        .catch(err => {
            setError(err.message);
            console.error("Failed to fetch weather data:", err.message);
            

            return null; 
        });
}