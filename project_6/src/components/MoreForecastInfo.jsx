import Temp from '../assets/termometr.svg'
import Wind from '../assets/wind.svg'
import Humidity from '../assets/humidity.svg'
import Eye from '../assets/eye.svg'
function MoreForecastInfo({ currentWeather, whClicked }) {
    return (<>
        <ul className="inf-ul">
            {currentWeather?.forecast?.forecastday?.[whClicked] && (
                <li>
                    <div className="flex">
                        <div className="inf">
                            <p >Feels like {currentWeather.forecast.forecastday[whClicked].day.avgtemp_c}°C</p>
                            <img className="inf-img"  src={Temp} alt="Temperature" />
                        </div>
                        <div className="inf">
                            <p>Min/Max temp </p>
                            <p>{currentWeather.forecast.forecastday[whClicked].day.mintemp_c}°C / {currentWeather.forecast.forecastday[whClicked].day.maxtemp_c}°C</p>
                        </div>
                        <div className="inf">
                            <p >Humidity: {currentWeather.forecast.forecastday[whClicked].day.avghumidity}%</p>
                            <img className="inf-img"  src={Humidity} alt="Humidity" />
                        </div>
                    </div>
                    <div className="flex">
                        <p className="inf">Uv: {currentWeather.forecast.forecastday[whClicked].day.uv}</p>
                        <div className="inf">
                            <p >Wind speed:
                                {currentWeather.forecast.forecastday[whClicked].day.maxwind_kph} kph
                            </p>
                            <img className="inf-img"  src={Wind} alt="Wind" />
                        </div>
                        <div className="inf">
                            <p >Visibility: {currentWeather.forecast.forecastday[whClicked].day.avgvis_km} km</p>
                            <img className="inf-img" src={Eye} alt="Visibility" />
                        </div>
                    </div>
                </li>
            )}
        </ul>
    </>);
}

export default MoreForecastInfo;