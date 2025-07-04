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


  return (
    <div className='app'>
      <div className='header'><Header /></div>
      <div className='weather-container'>
        <WeatherCard data={weatherData1} />

      </div>
      <div className='footer'><Footer /></div>
    </div>

  );
}

export default App;