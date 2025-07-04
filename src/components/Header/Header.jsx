
import './Header.css';
import myImage from './img/fevIcon.png'
import React, { useState } from 'react';



function Header() {

    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!login.trim() || !password.trim()) {
            alert('Заполните все поля');
            return;
        }


        if (password.length < 6) {
            alert('Пароль должен быть не менее 6 символов !!!');
            return;
        }




        alert(`Регистрация пройдена\nЛогин:${login}\nПароль ${password}`);

        setLogin('');
        setPassword('');
    };


    return (
        <div className='head'>
            <img src={myImage} className='icon'></img>
            <h1 className='title'>Прогноз погоды</h1>
            <form onSubmit={handleSubmit}>
                <div className='registration' >

                    <label htmlFor='email'>Email:</label>
                    <input type='email' id='email' name='email' autoComplete="current-password" value={login} onChange={(e) => setLogin(e.target.value)}></input>
                    <label htmlFor='password'>Пароль:</label>
                    <input type='password' id='password' name='password' autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} ></input>
                    <button className='login' type='submit'>Вход</button>
                    <button className='registration' type='submit'>Регистрация</button>
                </div>
            </form>
        </div>
    );
};

export default Header;