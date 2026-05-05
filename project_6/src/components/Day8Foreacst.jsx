function Day8Forecast({data}) {
    return (<>
        <ul className="weather-8-ul">
            <h2 className="weather-8-h2">8-day forecast</h2>
            {data?.forecast?.forecastday?.map((weather, index) => (
            <li className="weather-8-line" key={index}>
                <p className="weather-8-1-p">{weather.date}</p>
                <div className="weather-8-div">
                    <img src={weather.day.condition.icon} alt="" />
                    <p>{weather.day.mintemp_c}°C / {weather.day.maxtemp_c}°C</p>
                </div>
                <p>{weather.day.condition.text}</p>
            </li>
        ))}
        </ul>


    </>);
}

export default Day8Forecast;