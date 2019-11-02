import React from 'react';
import './style.css';


function Banner() {
    return (
        <div className='navbar' id="cat-banner">
            <a href='/'><img src="https://i.imgur.com/B5iBURK.png" className="catbanner" id='catbanner'alt='banner with a cat'></img> </a>

            <a href='/'><img src="https://i.imgur.com/VZwQ72C.png" className='eyes'id='eyes'alt='cateye'></img> </a>
            <a href='/'><div className="overflow-lid" id="overflow-left">
                <a href='/'><img src="https://i.imgur.com/EXrxAZh.png" className='lids'id='lids'alt='cateye'></img> </a>
                </div></a>

            
        </div >
    )
}

export default Banner;
