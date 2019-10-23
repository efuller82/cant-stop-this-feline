import React from 'react';
import './style.css';

function CatGalleryCard(props) {
    return (
        <div className='card whole-card'>
            <h5 className='card-title'>
                {props.name}
            </h5>
            <h6 className='card-subtitle'>
                {props.alias}
            </h6>
            <div className='img-container'>
                <img
                    className='cat-pic'
                    alt={props.bio}
                    src={props.image}
                />
            </div>
            <p className='card-text'>
                {props.bio}
            </p>
        </div>
    )
}

export default CatGalleryCard;