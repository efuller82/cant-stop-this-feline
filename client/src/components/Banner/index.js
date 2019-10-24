import React from 'react';
import './style.css';


function Banner() {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-light'>
            {/* Placeholder button in case google auth is in place of this */}
            <button type='button' className='btn btn-primary'>Sign-In</button>
            <h1 className='title' id='banner-title'><a href='/'>Can't Stop this Feline</a></h1>

        </div >
    )
}

export default Banner;