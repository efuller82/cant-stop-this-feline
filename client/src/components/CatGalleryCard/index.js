import React from 'react';
import './style.css';

function CatGalleryCard(props) {
    return (
        <div className='card whole-card'>
            <div> 
                <h5 className='card-title'>
                    {props.catName}
                </h5>
                <button onClick={() => props.deleteCat(props.id)} type="button" className="btn btn-outline-danger delete" id={props.id}>X</button>
            </div>
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
            <button onClick={() => props.vote(props)} type="button" className="btn btn-outline-success" id={props.id}>Upvote ({props.upvotes})</button>
        </div>
    )
}

export default CatGalleryCard;