import { useEffect, useState, useRef } from 'react'
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
import AnimalNews from './components/AnimalNews'
import SwiperComponent from './components/Swiper'
import Dock from './components/Bits/Dock/Dock'
import { IoIosHome } from "react-icons/io";
import { IoIosCloudy } from "react-icons/io";
import { IoIosPaw } from "react-icons/io";
import { IoMdPerson } from "react-icons/io";
import Account from './components/Account'




function App() {
  const [user, setUserValues] = useState(null)
  const [country, setCountry] = useState('New York')
  const [cureentWeather, setCurrentWeather] = useState(null)
  const [Day8, setDay8] = useState(null)
  const [whClicked, setWhClicked] = useState('')
  const [isRegistered, setIsRegistered] = useState(false)
  const [news, setNews] = useState(null)
  const [page, setPage] = useState(1)
  const [acc, setAcc] = useState(false)
  const homeRef = useRef(null);
  const weatherRef = useRef(null);
  const newsRef = useRef(null);




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

  useEffect(() => {
    NewsApi({ page })
      .then(data => {
        setNews(data);

      })
  }, [page])


  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const items = [
    { icon: <IoIosHome />, label: 'Home', onClick: () => scrollToSection(homeRef) },
    { icon: <IoIosCloudy />, label: 'Weather', onClick: () => scrollToSection(weatherRef) },
    { icon: <IoIosPaw />, label: 'News', onClick: () => scrollToSection(newsRef) },
    { icon: <IoMdPerson />, label: 'Account', onClick: () => setAcc(true) },
  ];



  return (
    <>

      <div className="App">
        <NavBar acc={acc} user={user} isReg={isRegistered} setIsReg={setIsRegistered}>
        </NavBar>
        {isRegistered && <div className='outframe'><div className='modal'><RegistrationForm setValues={setUserValues} setOp={setIsRegistered} /></div></div>}
        {acc && <Account setAcc={setAcc} user={user} setUserValues={setUserValues} setIsRegistered={setIsRegistered} />}

        <section ref={homeRef} className='hero-section'>
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
          <section ref={weatherRef} className='forecast'>
            <CurrentForecast currentWeather={cureentWeather} location={country} setWhClicked={setWhClicked} />
            {whClicked !== '' && <MoreForecastInfo currentWeather={cureentWeather} whClicked={whClicked} />}
            {whClicked !== '' && <ChartSection data={cureentWeather} whClicked={whClicked} />}
            {whClicked !== '' && <Day8Forecast data={Day8} />}
          </section>
          <section ref={newsRef} className='news-animals'>
            <AnimalNews news={news} setPage={setPage} />
          </section>
          <section className='swiper-section'>
            <h2>Beautiful nature</h2>
            <SwiperComponent />
          </section>
        </main>
        <footer>

          <Footer />
        </footer>
        <div className='dock-container'>
          <Dock
            items={items}
            panelHeight={68}
            baseItemSize={50}
            magnification={70}
          />
        </div>
      </div>


    </>
  )
}

export default App
