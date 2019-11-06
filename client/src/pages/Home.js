import React, { Component } from "react";
import Banner from "../components/Banner";
import CatGalleryCard from "../components/CatGalleryCard";
import { Container, Row, Col } from "react-grid-system";
import SideNav from "../components/SideNav";
import API from "../utils/API";
import "./stylePages.css";
import firebase from "firebase";

//! The next line is for dummy data only
//import dummyCats from '../dummyCats.json';

// Function that loads cats from database into gallery
// also will sort cats based upon cuteness score (most points)

// function that allows user to click on a cat and give it a point (upvote)
// user will need to be signed in to access this feature
// TODO add logic to prevent multiple clicks from one user

// TODO add logic so that you can only delete your own cat(s)

class Home extends Component {
  state = {
    cats: [],
    user: "",
    className: "btn btn-danger delete",
    none: "hide"
  };

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      this.saveUser(firebase.auth().currentUser.displayName);
    });
    this.loadCats();
  }

  saveUser = (user) => {
    this.setState({ user: user });
  }

  loadCats = () => {
    API.getCats()
      .then(res => {
        this.setState({ cats: res.data });
      })
      .catch(err => console.log(err));
  };

  deleteCat = id => {
    API.deleteCat(id)
      .then(res => this.loadCats())
      .catch(err => console.log(err));
  };

  votes = cat => {
    var objectU = { upvotes: cat.upvotes + 1 };
    API.updateCat(cat.id, objectU)
      .then(res => this.loadCats())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Banner />
        <Row>
          <Col sm={3}>
            <SideNav />
          </Col>
          <Col sm={9} className='main-cat-content'>
            <h1 id="leaderboard">Cat Leaderboard</h1>
            {this.state.cats.map(dummyCat => dummyCat.user === this.state.user ? (
              <CatGalleryCard
              key={dummyCat._id}
              id={dummyCat._id}
              deleteCat={this.deleteCat}
              className={this.state.className}
              catName={dummyCat.catName}
              nickname={dummyCat.nickname}
              imgURL={dummyCat.imgURL}
              description={dummyCat.description}
              votes={this.votes}
              upvotes={dummyCat.upvotes}
              />
            ) : (
              <CatGalleryCard
                key={dummyCat._id}
                id={dummyCat._id}
                deleteCat={this.deleteCat}
                className={this.state.none}
                catName={dummyCat.catName}
                nickname={dummyCat.nickname}
                imgURL={dummyCat.imgURL}
                description={dummyCat.description}
                votes={this.votes}
                upvotes={dummyCat.upvotes}
              />
            )
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Home;
