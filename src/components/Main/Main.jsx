import './Main.css'
import { useState } from 'react';








const cities = [
    { city: 'Москва', temp: '20', description: 'Облачно с прояснениями', humidity: '65', wind: '3.5', feels_like: '20', date: '2023-05-15T12:00:00' },
    { city: 'Челябинск', temp: '23', description: 'Облачно', humidity: '65', wind: '2.5', feels_like: '20', date: '2023-05-15T12:00:00' },
    { city: 'Казань', temp: '25', description: 'Ливни', humidity: '70', wind: '2.6', feels_like: '25', date: '2023-05-15T12:00:00' },
    { city: 'Батуми', temp: '30', description: 'Жарко', humidity: '50', wind: '3.0', feels_like: '35', date: '2023-05-15T12:00:00' },
    { city: 'Стокгольм', temp: '17', description: 'Облачно', humidity: '60', wind: '3.2', feels_like: '23', date: '2023-05-15T12:00:00' },
];





const WeatherCard = () => {

    const [currentCityIndex, setCurrentCityIndex] = useState(0);

    const prevCity = () => {
        setCurrentCityIndex((prev) =>
            prev === 0 ? cities.length - 1 : prev - 1
        );
    };

    const nextCity = () => {
        setCurrentCityIndex((prev) =>
            prev === cities.length - 1 ? 0 : prev + 1
        );
    }

    const currentCity = cities[currentCityIndex]

    return (

        <div className='weather-container'>
            <button className='nav-button left' onClick={prevCity}>&larr;</button>
            <div className='weather-card'>
                <div className='weather-card-header'>
                    <h2>{currentCity.city}</h2>
                    <p className='weather-date'>{currentCity.formattedDate}</p>
                </div>

                <div className='weather-main'>
                    <div className='weather-temp'>
                        <span className='temp-value'>{Math.round(currentCity.temp)}°C</span>
                        <span className='feels-like'>Ощущается как {Math.round(currentCity.feels_like)}°C</span>

                    </div>

                    <div className='weather-icon'>
                        <p className='weather-desc'>{currentCity.description}</p>
                    </div>
                </div>

                <div className='weather-details'>
                    <div className='detail-item'>
                        <span>Влажность</span>
                        <span>{currentCity.humidity}%</span>
                    </div>
                    <div className='detail-item'>
                        <span>{currentCity.wind}м/с</span>
                    </div>
                </div>

            </div>
            <button className='nav-button right' onClick={nextCity}>&rarr;</button>
        </div>
    );
};

export default WeatherCard;