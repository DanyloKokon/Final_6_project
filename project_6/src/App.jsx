import { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import HeroForm from './components/HeroForm'
import './App.css'
import WeatherCoordinatesApi from './components/Api/WeatherCooApi'
import CurrentForecast from './components/CurrentForecast'
import MoreForecastInfo from './components/MoreForecastInfo'
import ChartSection from './components/ChartSec'
import Footer from './components/Footer'
import RegistrationForm from './components/RegistrationForm'
import Day8ForecastApi from './components/Api/Day8ForecastApi'
import Day8Forecast from './components/Day8Foreacst'
import NewsApi from './components/Api/NewsApi'


function App() {
  const [user, setUserValues] = useState(null)
  const [country, setCountry] = useState('New York')
  const [cureentWeather, setCurrentWeather] = useState(null)
  const [Day8, setDay8] = useState(null)
  const [whClicked, setWhClicked] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)

  useEffect(() => {
    WeatherCoordinatesApi(country)
      .then(data => {
        setCurrentWeather(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching coordinates:', error));
  }, [country]);

  useEffect(() => {
    Day8ForecastApi(country)
      .then(data => {
        setDay8(data)
        console.log(data)
      })
      .catch(error => console.error('Error fetching 8-day forecast:', error));
  }, [country]);

  useEffect(()=>{
    NewsApi()
    .then(data =>{
      console.log(data);
    })
  })

  return (
    <>

      <div className="App">
        <NavBar user={user} isReg={isRegistered} setIsReg={setIsRegistered} />
        {isRegistered && <div className='outframe'><div className='modal'><RegistrationForm setValues={setUserValues} setOp={setIsRegistered} /></div></div>}
        <section className='hero-section'>
          <div className='hero'>
            <div className='hero_h1'>
              <h1 className='hero-h1-h1'>Weather dashboard</h1>
            </div>
            <div className='hero_p'>
              <p>Create your personal list of favorite cities and always be aware of the weather.</p>
              <p>{new Date().toLocaleDateString()}</p>
            </div>
            <div className='hero_form'>
              <HeroForm setCountry={setCountry} />
            </div>
          </div>
        </section>

        <main>
          <section className='forecast'>
            <CurrentForecast currentWeather={cureentWeather} location={country} setWhClicked={setWhClicked} />
            {whClicked !== '' && <MoreForecastInfo currentWeather={cureentWeather} whClicked={whClicked} />}
            {whClicked !== '' && <ChartSection data={cureentWeather} whClicked={whClicked} />}
            {whClicked !== '' && <Day8Forecast data={Day8}/>}
          </section>
          <section className='news-animals'>
          {}
          </section>
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  )
}

export default App
