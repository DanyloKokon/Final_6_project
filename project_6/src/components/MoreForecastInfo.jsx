import { VscSearchFuzzy } from "react-icons/vsc";
function MoreForecastInfo({ currentWeather, whClicked }) {
    return (<>
        <ul className="inf-ul">
            {currentWeather?.forecast?.forecastday?.[whClicked] && (
                <li>
                    <div className="flex">
                        <p className="inf">Feels like {currentWeather.forecast.forecastday[whClicked].day.avgtemp_c}°C</p>
                        <div className="inf">
                            <p>Min/Max temp </p>
                            <p>{currentWeather.forecast.forecastday[whClicked].day.mintemp_c}°C / {currentWeather.forecast.forecastday[whClicked].day.maxtemp_c}°C</p>
                        </div>
                        <p className="inf">Humidity: {currentWeather.forecast.forecastday[whClicked].day.avghumidity}%</p>
                    </div>
                    <div className="flex">
                        <p className="inf">Uv: {currentWeather.forecast.forecastday[whClicked].day.uv}</p>
                        <p className="inf">Wind speed:
                            {currentWeather.forecast.forecastday[whClicked].day.maxwind_kph} kph
                        </p>
                        <p className="inf">Visibility:
                            {currentWeather.forecast.forecastday[whClicked].day.avgvis_km} km
                        </p>
                    </div>
                </li>
            )}
        </ul>
    </>);
}

export default MoreForecastInfo;