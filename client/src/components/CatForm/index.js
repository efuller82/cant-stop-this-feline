import React, { Component } from "react";
import './style.css';

import API from "../../utils/API";

class CatForm extends Component {

state = {
    catName: "",
    nickname: "",
    description: "",
    imgURL: ""
};

componentDidMount() {
    console.log("It's mounted");
}

handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
        [name]: value
    });
};

handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.catName && this.state.description && this.state.imgURL.includes(".")) {
        let catData = {
            catName: this.state.catName,
            nickname: this.state.nickname,
            description: this.state.description,
            imgURL: this.state.imgURL
        };
        console.log(catData);
        API.saveCat({ 
            catName: this.state.catName,
            nickname: this.state.nickname,
            description: this.state.description,
            imgURL: this.state.imgURL
         })
            .then(res => alert(res.data.catName + " has been added!"))
            .catch(err => console.log(err));
    }
    this.clearForm();
}

clearForm = () => {
    this.setState({
        catName: "",
        nickname: "",
        description: "",
        imgURL: ""
    });
}

render() {
    return (
        <div className='card'id="add-cat-card">
            <div className='card-body' id="add-cat-body">
                <h3 className='card-title'>Add a Cat</h3>
                <form>
                    <label htmlFor='cat-name'>Cat Name: </label>
                    <input type='text' id='cat-name' className='form-control' 
                        value={this.state.catName}
                        onChange={this.handleInputChange}
                        name="catName"
                    />
                    <label htmlFor='nick-name'>Nickname/Alias: </label>
                    <input type='text' id='nick-name' className='form-control' 
                        value={this.state.nickname}
                        onChange={this.handleInputChange}
                        name="nickname"
                    />
                    <label htmlFor='bio'>What's not to love?</label>
                    <textarea className='form-control' id='bio' rows='3' 
                        value={this.state.description}
                        onChange={this.handleInputChange}
                        name="description"
                    />
                    <label htmlFor='add-photo'>Add Photo URL:</label>
                    <input type='text' className='form-control' id='add-photo' 
                        value={this.state.imgURL}
                        onChange={this.handleInputChange}
                        name="imgURL"
                    />
                    <button type="submit" className="btn btn-primary"
                        onClick={this.handleFormSubmit}
                    >Submit</button>
                </form>
            </div>
        </div>
    )
}
}

export default CatForm;