// import { useState } from "react";
import './Header.css';
import myImage from './img/fevIcon.png'


function Header() {

    return (
        <div className='head'>
            <img src={myImage} className='icon'></img>
            <h1 className='title'>Прогноз погоды</h1>

            <div className='registration'>
                <label for='email'>Email:</label>
                <input type='email' id='email' name='email'></input>
                <label for='password'>Пароль:</label>
                <input type='password' id='password' name='password'></input>
                <button className='login'>Вход</button>
                <button className='registration'>Регистрация</button>




            </div>
        </div>
    );
}

export default Header;