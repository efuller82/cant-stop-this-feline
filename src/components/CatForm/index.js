import React from 'react';
import './style.css';

function CatForm() {
    return (
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>Add a Cat</h3>
                <form>
                    <label htmlFor='cat-name'>Cat Name: </label>
                    <input type='text' id='cat-name' className='form-control' />
                    <label htmlFor='nick-name'>Nickname/Alias: </label>
                    <input type='text' id='nick-name' className='form-control' />
                    <label htmlFor='bio'>What's not to love?</label>
                    <textarea className='form-control' id='bio' rows='3' />
                    <label htmlFor='add-photo'>Add Photo URL:</label>
                    <input type='text' className='form-control' id='add-photo'></input>
                    <button type='submit' className='btn btn-primary'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default CatForm;