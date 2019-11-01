import React from 'react';
import './style.css';

function SideNav() {
    return (
        <div>
            <ul className='side-list' id='side-nav'>
                <li><a href='/' className='list-item side-nav-item'>Home</a></li>
                <li><a href='/addcat' className='list-item side-nav-item'>Add a Cat</a></li>
                <li><a href='/rumble' className='list-item side-nav-item'>Rumble</a></li>
                <li><a href='/adopt' className='list-item side-nav-item'>Adopt</a></li>
                {/* Placeholder button in case google auth is in place of this */}
                <button type='button' className='btn btn-primary btn-side-nav' id='sign-in'>Sign-In</button>
            </ul>
        </div>
    );
}

export default SideNav;