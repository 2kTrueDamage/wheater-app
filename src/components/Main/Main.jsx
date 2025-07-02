import './Main.css'

const WeatherCard = ({ data }) => {
    const { city, temp, description, humidity, wind, feelsLike, date } = data;

    const formattedDate = new Date(date).toLocaleDateString('ru-Ru', {
        weekday: 'long',
        day: 'numeric',
        month: 'long'
    });


    return (
        <div className='weather-card'>
            <div className='weather-card-header'>
                <h2>{city}</h2>
                <p className='weather-date'>{formattedDate}</p>
            </div>

            <div className='weather-main'>
                <div className='weather-temp'>
                    <span className='temp-value'>{Math.round(temp)}°C</span>
                    <span className='feels-like'>Ощущается как {Math.round(feelsLike)}°C</span>

                </div>

                <div className='weather-icon'>
                    <p className='weather-desc'>{description}</p>
                </div>
            </div>

            <div className='weather-details'>
                <div className='detail-item'>
                    <span>Влажность</span>
                    <span>{humidity}%</span>
                </div>
                <div className='detail-item'>
                    <span>{wind}м/с</span>
                </div>
            </div>
        </div>
    );
};

export default WeatherCard;