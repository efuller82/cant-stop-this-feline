import React from 'react';
import './style.css';

function CatGalleryCard(props) {
    return (
        <div className='card whole-card'>
            <div>
                <h5 className='card-title' id="leaderboard-card-title">
                    {props.catName}
                    <button id={props.display} onClick={() => props.deleteCat(props.id)} type="button" className="btn btn-danger delete" id={props.id}><i className="material-icons">delete_forever</i></button>
                </h5>
            </div>
            <h6 className='card-subtitle'>
                "{props.nickname}"
            </h6>
            <div className='img-container'>
                <img
                    className='cat-pic'
                    id='make-cat-bigger'
                    alt={props.catName}
                    src={props.imgURL}
                />
            </div>
            <p className='card-text' id="description">
                {props.description}
            </p>
            <button onClick={() => props.votes(props)} type="button" className="btn btn-success btn-upvote" id={props.id}>Upvote ({props.upvotes})</button>
        </div>
    )
}

export default CatGalleryCard;