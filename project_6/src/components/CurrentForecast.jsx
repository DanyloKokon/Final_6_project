function CurrentForecast({ currentWeather, location, setWhClicked }) {

    // const handleClick = (index) => {
    //     setWhClicked(index);
    //     console.log(index);
    // }

    return ( <>
    
    <ul className='current-forecast'>
        <li className="weather-card">
             <h2 className="card-location">{currentWeather.location.name}</h2>
                <p className="card-date">{currentWeather?.current?.last_updated}</p>
                <img className="card-img" src={currentWeather?.current?.condition.icon} alt={currentWeather?.current?.condition.text} />
                <p className="card-temp">{currentWeather?.current?.temp_c}°C</p>
               
        </li>
        {currentWeather?.forecast?.forecastday?.map((weather, index) => (
            <li className="weather-card" key={index}>
                <h2 className="card-location">{currentWeather.location.name}</h2>
                <p className="card-date">{weather.date}</p>
                <img className="card-img" src={weather.day.condition.icon} alt={weather.forecast?.forecastday?.weather.condition.text} />
                <p className="card-temp">{weather.day.maxtemp_c}°C</p>
                <button className="card-btn" id={`detail-btn-${index}`} onClick={() => setWhClicked(index)}>Details</button>
            </li>
        ))}
    </ul>
    </> );
}

export default CurrentForecast;