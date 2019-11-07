import React, { Component } from 'react';
import './style.css';
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
    apiKey: "AIzaSyA8QE7M8tA36tnEec__cfTbBPR5rcStKJk",
    authDomain: "cant-stop-this-feline.firebaseapp.com"
});

class SideNav extends Component {
    state = { isSignedIn: false };

    uiConfig = {
        signInFlow: "popup",
        signInOptions: [
            firebase.auth.GoogleAuthProvider.PROVIDER_ID
        ],
        callbacks: {
            signInSuccess: () => false
        }
    }

    componentDidMount = () => {
        firebase.auth().onAuthStateChanged(user => {
            this.setState({ isSignedIn: !!user });
        });
    }

    render() {
        return (
            <div>
                <ul className='side-list' id='side-nav'>
                    <li><a href='/' className='list-item side-nav-item'>Home</a></li>
                    <li><a href='/addcat' className='list-item side-nav-item'>Add a Cat</a></li>
                    <li><a href='/rumble' className='list-item side-nav-item'>Rumble</a></li>
                    <li><a href='/adopt' className='list-item side-nav-item'>Adopt</a></li>
                    {this.state.isSignedIn ? (
                        <div>
                            <p id="user">Welcome,<br></br>{firebase.auth().currentUser.displayName}</p>
                            <button onClick={() => {
                                firebase.auth().signOut();
                                window.location.reload(false);
                            }}type='button' className="btn btn-primary" id="signOut">Sign Out</button>
                        </div>
                    ) : (
                        <StyledFirebaseAuth
                            uiConfig={this.uiConfig}
                            firebaseAuth={firebase.auth()}
                        />
                    )}
                </ul>
            </div>
        );
    }
}

export default SideNav;