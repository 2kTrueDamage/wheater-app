import React from 'react';
import './User.css';
import photo from './wanderer/icon.png';


function User() {

    const Wanderer = {
        name: 'Wanderer',
        img: { photo }
    };

    return (
        <div>
            <h1>Привет, {Wanderer.name}</h1>
            <img src={photo} alt='strannik' />
        </div>
    );
}

export default User