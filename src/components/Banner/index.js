import React from 'react';
import './style.css';


function Banner() {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-light'>
            {/* Placeholder button in case google auth is in place of this */}
            <button type='button' class='btn btn-primary'>Google Sign-In</button>
            <h1 className='title' id='banner-title'>Can't Stop this Feline</h1>

        </div >
    )
}

export default Banner;