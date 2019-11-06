import React, { Component, Fragment } from "react";
import Banner from "../components/Banner";
import SideNav from "../components/SideNav";
import Wrapper from "../components/Wrapper";
import { Container, Row, Col } from "react-grid-system";
import RumbleGalleryCard from "../components/RumbleGalleryCard";
import RumbleCats from "../components/RumbleCats";
import "./stylePages.css";
import API from "../utils/API";
//! The next line is for dummy data only
// import dummyCat from "../dummyCat.json";

class Rumble extends Component {
  state = {
    cats: [],
    clicked: false,
    myCat: {},
    challengerCat: {}
  };

  componentDidMount() {
    this.loadCats();
  }

  loadCats = () => {
    API.getCats()
      .then(res => {
        this.setState({ cats: res.data });
      })
      .catch(err => console.log(err));
  };

  resetGame = () => {
    console.log("Clicked Reset Button");
    this.setState({
      myCat: {},
      challengerCat: {},
      clicked: false
    });
    // this.props.loadCats();
  };

  //The winner gets a point/upvote
  votes = cat => {
    var objectU = { upvotes: cat.upvotes + 1 };
    API.updateCat(cat._id, objectU)
      .then(res => this.loadCats())
      .catch(err => console.log(err));

    console.log("My cat should get plus 1");
    console.log(cat._id);
  };

  handleSelection = id => {
    // console.log(this.state.cats);
    // console.log(id);
    const selectedCat = this.state.cats.find(dummyCat => dummyCat._id === id);

    // console.log(selectedCat);

    this.setState({
      myCat: selectedCat,
      clicked: true
    });

    //this is a temporary solution -- it doesn't check to see if random cat might be the same as selected cat.
    const challengerCat = this.state.cats[
      Math.floor(Math.random() * this.state.cats.length)
    ];
    // console.log(challengerCat);
    this.setState({ challengerCat: challengerCat });
  };

  // Add logic to compare challengerCat and selectedCat, if they are === then choose another challengerCat

  render() {
    return (
      <Fragment>
        <Container>
          <Banner />
          <Row>
            <Col sm={3}>
              <SideNav />
            </Col>
            <Col sm={9}>
              <Row>
                <div className="welcomeMsg">
                  First, pick your rumble cat, then Start the Rumble!
                </div>

                <Col sm={4}>
                  <Wrapper>
                    <div className="rumbleSubtitle">Pick Your Rumbler</div>
                    {this.state.cats.map(dummyCat => (
                      <RumbleGalleryCard
                        key={dummyCat.id}
                        id={dummyCat._id}
                        nickname={dummyCat.nickname}
                        imgURL={dummyCat.imgURL}
                        handleSelection={this.handleSelection}
                        // upvotes={dummyCat.upvotes}
                        // votes={this.votes}
                        // clicked={this.clicked}
                      />
                    ))}
                  </Wrapper>
                </Col>
                <Col sm={8}>
                  <RumbleCats
                    myCat={this.state.myCat}
                    challengerCat={this.state.challengerCat}
                    resetGame={this.resetGame}
                    clicked={this.state.clicked}
                    // upvotes={dummyCat.upvotes}
                    votes={this.votes}
                  />
                </Col>
              </Row>
            </Col>
          </Row>
          {/* <Row>
            <Col sm={3}>
              <Wrapper>
                <div className="rumbleSubtitle">Pick Your Rumbler</div>
                {this.state.cats.map(dummyCat => (
                  <RumbleGalleryCard
                    key={dummyCat._id}
                    id={dummyCat._id}
                    nickname={dummyCat.nickname}
                    imgURL={dummyCat.imgURL}
                    handleSelection={this.handleSelection}
                  />
                ))}
              </Wrapper>
            </Col>
            <Col sm={9}>
              <RumbleCats
                myCat={this.state.myCat}
                challengerCat={this.state.challengerCat}
              />
            </Col>
          </Row> */}
        </Container>
      </Fragment>
    );
  }
}

export default Rumble;
