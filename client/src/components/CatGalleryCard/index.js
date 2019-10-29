import React from 'react';
import './style.css';

function CatGalleryCard(props) {
    return (
        <div className='card whole-card'>
            <h5 className='card-title'>
                {props.catName}
            </h5>
            <h6 className='card-subtitle'>
                {props.nickname}
            </h6>
            <div className='img-container'>
                <img
                    className='cat-pic'
                    alt={props.catName}
                    src={props.imgURL}
                />
            </div>
            <p className='card-text'>
                {props.description}
            </p>
        </div>
    )
}

export default CatGalleryCard;