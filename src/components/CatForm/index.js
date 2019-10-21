import React from 'react';
import './style.css';

function CatForm() {
    return (
        <div className='card'>
            <div className='card-body'>
                <h3 className='card-title'>Add a Cat</h3>
                <form>
                    <label for='cat-name'>Cat Name: </label>
                    <input type='text' id='cat-name' className='form-control' />
                    <label for='nick-name'>Nickname/Alias: </label>
                    <input type='text' id='nick-name' className='form-control' />
                    <label for='bio'>What's not to love?</label>
                    <textarea className='form-control' id='bio' rows='3' />
                    <label for='add-photo'>Add Photo:</label>
                    <input type='file' className='form-control-file' id='add-photo'></input>

                </form>
            </div>
        </div>
    )
}

export default CatForm;