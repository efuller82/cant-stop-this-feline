import React from 'react';
import './style.css';

function SideNav() {
    return (
        <div>
            <ul className='side-list' id='side-nav'>
                <li><a href='#' className='list-item'>Add a Cat</a></li>
                <li><a href='#' className='list-item'>Rumble</a></li>
                <li><a href='#' className='list-item'>Adopt</a></li>
            </ul>
        </div>
    );
}

export default SideNav;