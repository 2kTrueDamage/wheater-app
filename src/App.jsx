import React from 'react';
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import WeatherCard from './components/Main/Main'

import './App.css'




const App = () => {
  const weatherData1 = {
    city: "Москва",
    temp: 20,
    description: "облачно с прояснениями",
    humidity: 65,
    wind: 3.5,
    feels_like: 16,
    date: "2023-05-15T12:00:00"
  };

  const weatherData2 = {
    city: "Челябинск",
    temp: 23,
    description: "Ливни",
    humidity: 70,
    wind: 4,
    feels_like: 20,
    date: "2023-05-15T12:00:00"
  };

  const weatherData3 = {
    city: "Казань",
    temp: 20,
    description: "Облачно",
    humidity: 65,
    wind: 2.5,
    feels_like: 17,
    date: "2023-05-15T12:00:00"
  };

  const weatherData4 = {
    city: "Батуми",
    temp: 30,
    description: "Жарко",
    humidity: 65,
    wind: 2,
    feels_like: 27,
    date: "2023-05-15T12:00:00"
  };



  return (
    <div className='app'>
      <div className='header'><Header /></div>
      <div className='weather-container'>
        <WeatherCard data={weatherData1} />
        <WeatherCard data={weatherData2} />
        <WeatherCard data={weatherData3} />
        <WeatherCard data={weatherData4} />
      </div>
      <div className='footer'><Footer /></div>
    </div>

  )
}

export default App;