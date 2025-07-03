import './Footer.css'
import myImage from './img/light.png'
import { useState } from 'react';

function Footer() {

    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
        document.body.classList.toggle('dark', !isDark);
    };



    return (
        <div className='footer-container'>
            <div className='footer-high'>

                <ul>
                    <li>Главное</li>
                    <li>Погода</li>
                    <li>Контакты</li>
                    <li>О нас</li>
                </ul>
            </div>
            <div className='footer-low'>@2kTrueDamage</div>
            <div className='switchMode'>
                <img src={myImage} alt='lamp' onClick={toggleTheme}></img></div>
        </div>
    )
};

export default Footer;
