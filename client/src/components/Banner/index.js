import React from 'react';
import './style.css';


function Banner() {
    return (
        <div className='navbar navbar-expand-lg navbar-dark bg-light' id="cat-banner">
            <a href='/'><img src="https://i.imgur.com/B5iBURK.png" id='catbanner'alt='banner with a cat'></img> </a>

            <img src="https://i.imgur.com/VZwQ72C.png" className='eyes'id='eyes'alt='cateye'></img>
            
        </div >
    )
}

export default Banner;
